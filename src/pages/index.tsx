import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-red-600 text-4xl font-bold flex justify-center">
        Landing Page
      </h1>
      <div className="h-96 aspect-square bg-primary-default-background"></div>
      <div className="h-96 aspect-square border-4 border-primary-default-Solid"></div>
      <div className="h-96 aspect-square bg-primary-default-background"></div>
    </>
  );
}
