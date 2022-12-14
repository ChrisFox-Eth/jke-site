import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Head from "next/head";
import Header from "../components/guide/Header";
import Hero from "../components/guide/Hero";
import Collection from "../components/guide/Collection";
import HowTo from "../components/guide/HowTo";
import Minter from "../components/guide/Minter";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import Faq from "../components/guide/FAQ";
import "./styles/globals.css";

// This is the chainId your dApp will work on.


const sdk = new ThirdwebSDK("mainnet")

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    desiredChainId={ChainId.Mainnet}>
      <Head>
        <title>Hunnys Hupe Scouts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content="Hunnys Hupe Scouts" />
        <meta name="og:image" content="https://hupe.hunnysnft.com/HUPEScoutHero.png" />
        <meta name="og:description" content="Hunnys Hupe Scouts: A Community NFT Collection" />
        <meta name="og:url" content="https://hupe.hunnysnft.com" />
        <meta name="og:image" content="https://hupe.hunnysnft.com/HUPEScoutHero.png" />
        <meta name="twitter:title" content="Hunnys Hupe Scouts" />
        <meta name="twitter:text:title" content="Hunnys Hupe Scouts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://hupe.hunnysnft.com/HUPEScoutHero.png" />
        <meta name="keywords" content="Hunnys Hupe Scouts: A Community NFT Collection" />
      </Head>
      <Header />
      <Hero />
      <HowTo />
      <Component {...pageProps} />
      <Collection />
      <Faq />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
