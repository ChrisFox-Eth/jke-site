import React from 'react';
import styles from "/pages/styles/Home.module.css";
import { Link } from "../shared/Link";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";

export const Collection = () => {
  return (
          <div className={styles.collectionContainer}>
      <h1 className={styles.h1}>
        JOE KENNEY GENESIS:
      </h1>
      <div style={{ marginTop: 48, marginBottom: 48 }}>
      <iframe
        src="https://gateway.ipfscdn.io/ipfs/Qmej3ewrU7UMh4G5Sjp9rb5kjcAtByujUo7fXYpPgKE2pW/drop.html?contract=0xC7fB4E4857e353a713BE1d24329eDB7B56738eCC&chainId=137"
        width="600px"
        height="600px"
        frameBorder="0"
      ></iframe>
      </div>
    </div>
);
};
export default Collection;
