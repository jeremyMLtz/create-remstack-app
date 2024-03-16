const HomePage = () => {
  return (
    <main>
      <header className='sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='px-8 flex justify-start h-14 items-center'>
          <span className='text-lg tracking-wide font-semibold'>RemStack</span>
          <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'></div>
        </div>
      </header>
      <section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
          Welcome to RemStack
        </h1>
        <h2 className='max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl'>
          Get your development started with Next, Prisma, Clerk, and Tailwind.
        </h2>
        <code className='border border-border rounded px-8 py-4 text-sm text-muted-foreground bg-input my-10'>
          {`>> Edit this page at src/app/page.tsx`}
        </code>
      </section>
      <section></section>
    </main>
  );
};

export default HomePage;
