import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

const VALID_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

export default async (req) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  let imageData, mediaType
  try {
    const body = await req.json()
    imageData = body.imageData
    mediaType = body.mediaType
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!imageData || !mediaType) {
    return Response.json({ error: 'Missing imageData or mediaType' }, { status: 400 })
  }

  if (!VALID_TYPES.includes(mediaType)) {
    return Response.json({ error: 'Unsupported image type. Use JPEG, PNG, WEBP, or GIF.' }, { status: 400 })
  }

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType,
                data: imageData,
              },
            },
            {
              type: 'text',
              text: `Classify this image accurately. Return ONLY a JSON object — no markdown, no other text.

{"primary":"<exact subject name>","classifications":[{"label":"<most specific label>","confidence":"high"},{"label":"<second label>","confidence":"medium"},{"label":"<third label>","confidence":"low"}],"description":"<1-2 sentence description of what is in the image>"}

Be precise: if it is a highway, say highway. If it is a screenshot of software, say screenshot. Identify what is actually present.`,
            },
          ],
        },
      ],
    })

    const text = message.content[0]?.text?.trim() ?? ''

    let result
    try {
      result = JSON.parse(text)
    } catch {
      const match = text.match(/\{[\s\S]*\}/)
      if (match) {
        try {
          result = JSON.parse(match[0])
        } catch {
          result = { primary: text, classifications: [], description: text }
        }
      } else {
        result = { primary: 'Unable to classify', classifications: [], description: text }
      }
    }

    return Response.json(result)
  } catch (err) {
    console.error('Classify error:', err)
    return Response.json({ error: 'Classification failed. Please try again.' }, { status: 500 })
  }
}

export const config = {
  path: '/api/classify-image',
}
