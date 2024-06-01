// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Telegram Bot with Next.js</title>
        <meta name="description" content="A simple Telegram bot using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-4">Welcome to Your Telegram Bot</h1>
        <p className="text-center text-lg">
          This is a simple implementation of a Telegram bot using Next.js.
        </p>
      </main>

      <footer className="text-center mt-8">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
