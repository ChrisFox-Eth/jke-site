import styles from "./styles/Home.module.css";
import {
  ThirdwebNftMedia,
  NFTContract,
  Web3Button,
  useAddress,
  useDisconnect,
  useMetamask,
  useNetwork,
  useEditionDrop,
  useNetworkMismatch,
  useNFTCollection,
  useNFTs,
  useSigner,
  useOwnedNFTs,
  useNFTBalance
} from "@thirdweb-dev/react";
import { ChainId, ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { ContractAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import Minter from "../components/guide/Minter";
import type { BigNumberish } from "ethers";

const Home: NextPage = () => {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const signer = useSigner();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const hunnysCollection = useNFTCollection("0x5DFEB75aBae11b138A16583E03A2bE17740EADeD");
  const [hasBalance, setHasBalance] = useState(false);
  const { data: balance, isLoading } = useNFTBalance(hunnysCollection, address, "0");


  if (!address) {
    return (
      <div>
      <h2
      style={{
        color: "var(--purple)"
      }}>Please connect your wallet to check your eligibility for minting.
  </h2>
  <h2
  style={{
    color: "var(--purple)"
  }}>In order to be eligible to mint, you will need to be holding at least{" "}
  <span
  style={{
    cursor: "pointer",
    color: "white",
        }}
  onClick={() =>
  window.open(
    "https://opensea.io/collection/hunnys",
    "_blank"
  )}>
  1 Hunnys 10k NFT token.
</span>
</h2>
<Web3Button
  className={styles.web3Button}
  contractAddress={"0x1D595b1b360E2240e85f06beC1D1679D5C005BE3"}
  action={(contract) => console.log(contract)}>
</Web3Button>
</div>
    )
  }
if
  (balance?.toNumber() === 0) {
      return (
        <div>
        <h2
        style={{
          color: "var(--purple)"
        }}>It looks like there are currently no Hunnys NFTs held by the connected wallet.
    </h2>
    <h2
    style={{
      color: "var(--purple)"
    }}>In order to be eligible to mint, you will need to be holding at least{" "}
    <span
    style={{
      cursor: "pointer",
      color: "white",
          }}
    onClick={() =>
    window.open(
      "https://opensea.io/collection/hunnys",
      "_blank"
    )}>
    1 Hunnys 10k NFT.
  </span>
  </h2>
  <div className={styles.aboutContainer}>
  <div className={styles.mintShadow}>
  <h2 className={styles.theCollection}>
    Mint your piece into the collection:
  </h2>
  <p className={styles.description}>You can upload image, audio, video, html, text, pdf, and 3d model files here.</p>
  <div className={styles.collectionContainer}>

    <input
      type="text"
      placeholder="Name of your NFT"
      className={styles.textInput}
      maxLength={0}
    />

    <textarea
      placeholder="Description of your NFT"
      className={styles.textInput}
      maxLength={0}
    />


      <div
        className={styles.imageInput}
      >
        Drag and drop an image here to upload it!
      </div>



  <div style={{ marginTop: 24 }}>
      <a className={styles.mainButton}>Not Eligible</a>
  </div>
  </div>
  </div>
  </div>
  </div>
      );
    }


  return (
    <>

<Minter />

    </>
  );
};



export default Home;
