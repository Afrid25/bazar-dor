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


## Environment variables

Create or update `.env` and provide real values:

```text
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
BETTER_AUTH_DB_URL=
MONGODB_DNS_SERVERS=8.8.8.8,1.1.1.1
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Google and GitHub buttons require their corresponding OAuth credentials. Never
commit `.env` or expose private credentials in client-side code.

`MONGODB_DNS_SERVERS` is a comma-separated list used for MongoDB Atlas SRV
lookups when the local Node.js resolver cannot resolve Atlas records. Use a
resolver available in your deployment environment if the defaults are blocked.


