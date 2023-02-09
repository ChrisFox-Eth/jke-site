import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Head from "next/head";
import Header from "../components/guide/Header";
import Footer from "../components/guide/Footer";
import Hero from "../components/guide/Hero";
import Collection from "../components/guide/Collection";
import Music from "../components/guide/Music";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import About from "../components/guide/About";
import "./styles/globals.css";

// This is the chainId your dApp will work on.


const sdk = new ThirdwebSDK("mainnet")

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    desiredChainId={ChainId.Mainnet}>
    <Head>
      <title>Joe Kenney Enterprises</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:title" content="Joe Kenney Enterprises" />
      <meta name="og:image" content="https://pbs.twimg.com/media/FjqNylhWQAIEhZy?format=jpg&name=large" />
      <meta name="og:description" content="Joe Kenney Enterprises" />
      <meta name="og:url" content="https://joekenneyenterprises.com" />
      <meta name="twitter:title" content="Joe Kenney Enterprises" />
      <meta name="twitter:text:title" content="Joe Kenney Enterprises" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://pbs.twimg.com/media/FjqNylhWQAIEhZy?format=jpg&name=large" />
      <meta name="keywords" content="Joe Kenney Music Musician Artist Piano Teacher Performer Grammy" />
    </Head>
      <Header />
      <Hero />
      <Music />
      <Component {...pageProps} />
      <About />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
