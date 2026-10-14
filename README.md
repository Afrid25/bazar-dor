# Bazar Dor

Bazar Dor is a responsive Bangla market-price application for viewing daily
prices of essential products in Bangladesh.

## Features

- Home page with hero section, price ticker, rising prices, falling prices,
  and all products
- Category pages with price sorting
- Protected product detail pages with market-by-market prices
- Better Auth email/password authentication
- Optional Google and GitHub social authentication
- Protected profile and profile update pages
- Bengali number, currency, and unit formatting
- Responsive loading, empty, error, and not-found states

## Technologies

- Next.js 16 App Router
- React 19
- Tailwind CSS 4 and DaisyUI
- Better Auth
- MongoDB
- Sonner
- `react-fast-marquee`

## Project structure

```text
src/
├── app/
│   ├── api/auth/[...all]/route.js
│   ├── category/[slug]/
│   ├── product/[slug]/
│   ├── profile/
│   ├── sign-in/page.jsx
│   ├── sign-up/page.jsx
│   └── page.js
├── components/
│   ├── auth/AuthGuard.jsx
│   ├── category/
│   ├── common/
│   ├── home/
│   ├── layout/
│   ├── Product/
│   ├── profile/
│   └── ui/
└── lib/
    ├── api.js
    ├── auth-client.js
    └── auth.js
```

Authentication form logic is kept inside the `/sign-in` and `/sign-up` route
files. `AuthGuard` is the only reusable authentication component.

## API

The application uses the official Bazar Dor API:

```text
https://openapi.programming-hero.com/api/bazardor
```

API requests and shared formatting helpers are centralized in `src/lib/api.js`.

## Environment variables

Copy `.env.example` to `.env` and provide real values:

```text
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
BETTER_AUTH_DB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Google and GitHub buttons require their corresponding OAuth credentials. Never
commit `.env` or expose private credentials in client-side code.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run lint
npm run build
```
