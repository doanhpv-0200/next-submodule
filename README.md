This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


See how it works:

#### Dashboard
- [http://localhost:3000](http://localhost:3000)
- [http://sub1.localhost:3000](http://sub1.localhost:3000)
- [http://sub2.localhost:3000](http://sub2.localhost:3000)

#### Login
- [http://localhost:3000/login](http://localhost:3000/login)
- [http://sub1.localhost:3000/login](http://sub1.localhost:3000/login)
- [http://sub2.localhost:3000/login](http://sub2.localhost:3000/login)

#### Profile
- [http://localhost:3000/profile/1](http://localhost:3000/profile/1)
- [http://sub1.localhost:3000/profile/1](http://sub1.localhost:3000/profile/1)
- [http://sub2.localhost:3000/profile/1](http://sub2.localhost:3000/profile/1)


## Project structure
```
src
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── login
│   │   └── page.tsx
│   ├── page.module.css
│   ├── page.tsx
│   ├── profile
│   │   └── [id]
│   │       └── page.tsx
│   ├── sub1
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── profile
│   │       └── [id]
│   │           └── page.tsx
│   └── sub2
│       ├── login
│       │   └── page.tsx
│       ├── page.tsx
│       └── profile
│           └── [id]
│               └── page.tsx
├── middleware.ts
└── utils
    └── subdomain
        └── index.ts

```

This project using [app router](https://nextjs.org/docs/app), router will be generated depend on project structure

- `app`: contain all pages of this project, includes pages for other subdomain
- `sub1`: contain all pages of subdomain 1
- `sub2`: contain all pages of subdomain 2
- `middleware.ts`: handle all request and rewrites route to matched domain