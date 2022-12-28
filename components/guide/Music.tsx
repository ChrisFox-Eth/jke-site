import React from 'react';
import styles from "/pages/styles/Home.module.css";
import { Link } from "../shared/Link";
import { Image } from "../shared/Image";
import heroimage from "/public/PrevailingAlbum.jpeg";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";

export const Music = () => {
  return (

    <div className={styles.aboutContainer}>
    <div>
    <h1 className={styles.h1}>LATEST DROP</h1>
      <Image
        className={styles.hupeScout}
        src={heroimage}
        alt='Joe Kenney Band'
        placeholder='blur'
      />
      Out now on all digital platforms.
    </div>
    <div style={{ marginTop: 48, marginBottom: 48 }}>
        <div>
          <iframe
            src="https://open.spotify.com/embed/album/2VZl2ZPf6hThJXukbVnQxW"
            width="600px"
            height="80px"
            frameBorder="0"
            >
            </iframe>
        </div>
        </div>
    </div>

  );
};

export default Music;
