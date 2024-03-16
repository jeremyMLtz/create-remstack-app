## Introduction

Welcome to the RemStack! A Full stack Next.js boilerplate preloaded with Prisma, Clerk, Tailwind, and TypeScript.

## Getting Started

First, you'll want to create your application, and that's easy:

```bash
npx create-remstack-app <project-directory>
```

The create-remstack-app command will bootstrap your Next.js application. We use the app router of course and set you up with a Prisma schema template, Clerk Authorization Middleware, and some example files on how to integrate the technologies together.

At this point, you can spin up the development server with `npm run dev` and start checking things out. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

You'll also notice a `.env` file in the root of your directory, it's there you'll want to add all your secrets and tokens for Clerk and Prisma. Once said and done it should look like the following:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_clerk_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=your_db_url
```

## After Token Setup

Once you've added your database url to the `.env` file, you can deploy your DB Model (found in `prisma/schema.prisma`) with the command `npx prisma db push`

Once you've created your Clerk app and added your Clerk keys to the `.env` file, you can uncomment out the code found in `src/middleware.ts` and delete the `doNothing()` function. You'll also want to go into the `src/app/layout.tsx` file and wrap your `html` tag in the `ClerkProvider` component like so:

```
<ClerkProvider>
    <html lang='en'>
        <body className={openSans.className}>{children}</body>
    </html>
</ClerkProvider>
```

Additionally, if you want to see an example on how to use Clerk and Prisma together, check out the `src/app/lib/initial-profile.tsx` file.

And that's it, now get out there and get building!

## Learn More

Below I have linked some helpful documentation on setting up a Clerk and Prisma app:

[Clerk Initial Setup](https://clerk.com/docs/quickstarts/setup-clerk)

[Clerk + Next.js](https://clerk.com/docs/quickstarts/nextjs)

[Prisma Quickstart Guide](https://www.prisma.io/docs/getting-started/quickstart)
