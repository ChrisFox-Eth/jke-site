import React from 'react';
import styles from "/pages/styles/Home.module.css";
import { Link } from "../shared/Link";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";
import {
  ThirdwebNftMedia,
  useAddress,
  useDisconnect,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useNFTCollection,
  useNFTs,
  useSigner,
  useNFTBalance,
} from "@thirdweb-dev/react";
import { ChainId, ThirdwebSDK } from "@thirdweb-dev/sdk";

export const Collection = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const signer = useSigner();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const nftCollection = useNFTCollection(
    // Replace this with your NFT Collection contract address
    "0x1D595b1b360E2240e85f06beC1D1679D5C005BE3"
  );
  return (
          <div className={styles.aboutContainer}>
    <div className={styles.collectionContainer}>
      <h1 className={styles.ourCollection}>
        See the collection:
      </h1>
      <div style={{ marginTop: 48, marginBottom: 48 }}>
          <a className={styles.osButton} onClick={() =>
           window.open(
             "https://opensea.io/collection/hupe-scouts",
             "_blank"
           )
         }>
            OpenSea
          </a>
      </div>
</div>
    </div>
);
};
export default Collection;
