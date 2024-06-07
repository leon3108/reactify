# ⚠️⚠️ IMPORTANT ⚠️⚠️ 

You should remove ```display:table``` in ```node_modules/@radix-ui/react-scroll-area/dist/index.js``` and ```/home/leon/work/spotiflex/node_modules/@radix-ui/react-scroll-area/dist/index.mjs```

it's beyond my control, as I write these lines shadcn/ui has a bug with this component. The ContextMenuItem alos has a bug on hover. I have already opened an issue on their repo.


# Spotiflex


## Description

This project is a re-implementation of the Spotify interface.

I have re-implemented the `/` and `/search` route. I did not implement dynamic feature like fetching neither any CRUD operations.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# BoirlerPlateWEB2024

This boilerpalte was created with different tools : 

- React + NextJS
- Prisma Orm
- Tailwind
- Typescript
- Zod
- React Hook Form
- Shadcn/ui

I could possibly add this packages if i think it's relevant:
- Resend
- react-email
- GSAP
- NextAuth

If needed, I use Vercel to deploy the app and Neon to deploy db

# To do

player.tsx audioRef.current mettre dans un state ?

cursor-pointer