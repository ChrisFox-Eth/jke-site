import React from 'react';
import styles from "/pages/styles/Home.module.css";
import heroimage from "/public/PrevailingAlbum.jpeg";
import heart from "/public/JoeKenneyLogo.jpeg";
import skuzzrelic from "/public/JoeKenneyLogo.jpeg";
import hupeGIF from "/public/JoeKenneyLogo.jpeg";
import { Image } from "../shared/Image";
import { Link } from "../shared/Link";
import { MenuLink } from "../shared/MenuLink";
import NextLink, { LinkProps as ImportedLinkProps } from 'next/link';

export const Hero = () => {
  return (

    <div className={styles.container}>
      {/* Top Section */}

      <div className={styles.aboutContainer}>
        {/* About Section */}
            <div className={styles.textGrid}>
            <h1 className={styles.h1}>JOE KENNEY</h1>
                <div className={styles.textItem}>
                  <p style={{ padding:"20px", textAlign:"left" }}>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
            </div>
        <div className={styles.row}>
          <div className={styles.column}>
          <h1> MUSIC </h1>
            <Image
              className={styles.hupeScout}
              src={heroimage}
              onClick={() =>
                window.open(
                  "https://hunnys.net",
                )
              }
              alt='Joe Kenney Band'
              placeholder='blur'
            />
            </div>
            <div className={styles.column}>
            <h1> SHOWS </h1>
            <Image
              className={styles.hupeScout}
              src={heroimage}
              alt='Joe Kenney Band'
              placeholder='blur'
            />
            </div>
          </div>
          <div className={styles.row}>
          <div className={styles.column}>
          <h1> MERCH </h1>
            <Image
              className={styles.hupeScout}
              src={heroimage}
              alt='Joe Kenney Band'
              placeholder='blur'
            />
            </div>
            <div className={styles.column}>
            <h1> ABOUT </h1>
            <Image
              className={styles.hupeScout}
              src={heroimage}
              alt='Joe Kenney Band'
              placeholder='blur'
            />
        </div>
        </div>
            </div>
            </div>
        </div>

  );
};

export default Hero;
