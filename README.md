# Bazar Dor

## Project structure

```text
bazar-dor/
├── public/
│   └── images/
│       ├── bazar-hero.png
│       └── logo-icon.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js
│   │   ├── profile/
│   │   │   ├── page.jsx
│   │   │   └── updateProfile.jsx
│   │   ├── sign-in/
│   │   │   └── page.jsx
│   │   ├── sign-up/
│   │   │   └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthGaurd.jsx
│   │   │   ├── SignInForm.jsx
│   │   │   ├── SignUpForm.jsx
│   │   │   └── SocialLogin.jsx
│   │   ├── category/
│   │   │   ├── CategoryHeader.jsx
│   │   │   ├── CategoryProducts.jsx
│   │   │   ├── EmptyCategory.jsx
│   │   │   └── SortDropdown.jsx
│   │   ├── common/
│   │   │   ├── BackToHome.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── LoadingSkeleton.jsx
│   │   ├── home/
│   │   │   ├── AllProductsSection.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PricefallSection.jsx
│   │   │   └── PriceRiseSection.jsx
│   │   ├── layout/
│   │   │   ├── CategoryNav.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── PriceTicker.jsx
│   │   ├── Product/
│   │   │   ├── MarketPriceTable.jsx
│   │   │   ├── PriceChangeBadge.jsx
│   │   │   ├── PriceSummary.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   └── ProductSummary.jsx
│   │   ├── profile/
│   │   │   ├── ProfileCard.jsx
│   │   │   └── UpdateProfileForm.jsx
│   │   └── providers/
│   │       └── ToastProvider.jsx
│   └── lib/
│       ├── api.js
│       ├── auth-client.js
│       └── auth.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

### Directory overview

- `src/app/` contains Next.js routes, layouts, global styles, and API endpoints.
- `src/components/` contains reusable UI grouped by feature.
- `src/lib/` contains API and authentication helpers.
- `public/` contains static assets served directly by the application.