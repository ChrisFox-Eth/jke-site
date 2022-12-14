import React from 'react';
import styles from "/pages/styles/Home.module.css";
import logo from "/public/HUPEHeartLogo.png";
import { Image } from "../shared/Image";
import { Link } from "../shared/Link";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";
import {
  ThirdwebNftMedia,
  Web3Button,
  ConnectWallet,
  useAddress,
  useDisconnect,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useNFTCollection,
  useNFTs,
  useSigner,
  useNFTBalance
} from "@thirdweb-dev/react";
import { ChainId, ThirdwebSDK } from "@thirdweb-dev/sdk";

export const Header = () => {
  const address = useAddress();
  const signer = useSigner();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
        <Image
          className={styles.logo}
          src={logo}
          alt='Hunnys Hupe Scouts'
          placeholder='blur'
          />
        </div>
      </div>
      <div className={styles.right}>
      <a
        href='https://opensea.io/collection/hupe-scouts'
        target='_blank'
        rel="noreferrer">
        <OpenSeaLogo width={24} height={24} />
        </a>
      <a
        href='https://twitter.com/hupescouts'
        target='_blank'
        rel="noreferrer">
        <TwitterLogo width={30} height={30} />
      </a>
      <a
        href='https://discord.gg/hunnys'
        target='_blank'
        rel="noreferrer">
        <DiscordLogo width={30} height={30} />
      </a>
      <ConnectWallet className={`${styles.web3ButtonHeader} ${styles.spacerBottom}`} />
      </div>
    </div>
  );
};

export default Header;
