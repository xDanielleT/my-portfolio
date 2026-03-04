# Danielle Turner Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

This project has two working directions:
- `main` keeps the original developer portfolio version.
- `foodie-rebrand` adds a food-inspired personal brand direction while keeping the same site structure (`Home`, `About`, `Projects`, `Contact`).

## Live Site

- https://my-portfolio-lime-ten.vercel.app/

## Tech Stack

- React
- Vite
- Tailwind CSS
- EmailJS

## Features

- Responsive layout for mobile and desktop
- Loading intro screen and scroll reveal animations
- Project showcase with external demo/repo links
- Contact form using EmailJS
- Accessibility-focused contrast updates

## Local Development

```bash
npm install
npm run dev
```

## Lint

```bash
npm run lint
```

## Branch Workflow

Use a safe preview workflow for rebrands:

```bash
git checkout main
git pull
git checkout -b foodie-rebrand
npm run dev
```

If you do not like the rebrand direction, switch back to main:

```bash
git checkout main
```

## Notes

The foodie concept in `foodie-rebrand` is intentionally developer-first.
It reflects personal identity and creative perspective without changing role focus to chef/recipe content.
