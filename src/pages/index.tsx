import Head from "next/head";
import { Header } from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-4 h-full border-x-4 border-secondary">
        <div>
          <h1 className="text-center text-6xl font-bold">TEST</h1>
          <h1 className="text-center text-6xl font-bold">TEST</h1>
        </div>
      </main>
    </>
  );
}
