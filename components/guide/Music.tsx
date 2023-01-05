import React from 'react';
import styles from "/pages/styles/Home.module.css";
import { Link } from "../shared/Link";
import { Image } from "../shared/Image";
import prevailingAlbum from "/public/PrevailingAlbum.jpeg";
import albums from "/public/albums.png";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";

export const Music = () => {
  return (

    <div id='Music' className={styles.bodyContainer}>
    <div>
    <h1 className={styles.h1}>LATEST DROP</h1>
      <Image
        className={styles.latestDrop}
        src={prevailingAlbum}
        alt='Joe Kenney Band'
        placeholder='blur'
      />
      Out now on all digital platforms.
    </div>
    <div style={{ marginTop: 48, marginBottom: 48 }}>
        <div>
          <iframe
            src="https://open.spotify.com/embed/album/2VZl2ZPf6hThJXukbVnQxW"
            width="auto"
            max-width="600px"
            height="80px"
            frameBorder="0"
            >
            </iframe>
        </div>
        <div style={{ marginTop: 48 }}>
        <Image
          className={styles.heroImage}
          src={albums}
          alt='Albums'
          placeholder='blur'
        />
        </div>
        </div>
        <hr className={styles.rounded}></hr>
    </div>

  );
};

export default Music;
