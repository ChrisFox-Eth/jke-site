import React from 'react';
import styles from "/pages/styles/Home.module.css";
import prevailingAlbum from "/public/PrevailingAlbum.jpeg";
import hero from "/public/hero.png";
import merch from "/public/merch.gif";
import shows from "/public/shows.png";
import music from "/public/music.png";
import about from "/public/about.png";
import { Image } from "../shared/Image";
import { Link } from "../shared/Link";
import { MenuLink } from "../shared/MenuLink";
import NextLink, { LinkProps as ImportedLinkProps } from 'next/link';

export const Hero = () => {
  return (

    <div className={styles.container}>
      {/* Top Section */}

      <div className={styles.bodyContainer}>
        {/* About Section */}
        <h1 className={styles.h1}>Joe Kenney</h1>
        <Image
          className={styles.heroImage}
          src={hero}
          alt='Joe Kenney Band Music'
          placeholder='blur'
        />
        <hr className={styles.rounded}></hr>
        <div className={styles.row}>
          <div className={styles.column}>
          <MenuLink to='Music' href='/' offset={-50}>
            <Image
              className={styles.panelImages}
              src={music}
              alt='Joe Kenney Band Music'
              placeholder='blur'
            />
          </MenuLink>
            </div>
            <div className={styles.column}>
            <MenuLink href='https://www.joekenneypiano.com/performances' target='_blank'>
            <Image
              className={styles.panelImages}
              src={shows}
              alt='Joe Kenney Band Performances'
              placeholder='blur'
            />
            </MenuLink>
            </div>
          </div>
          <div className={styles.row}>
          <div className={styles.column}>
          <MenuLink href='https://joe-kenney-enterprises.myshopify.com/' target='_blank'>
            <Image
              className={styles.panelImages}
              src={merch}
              alt='Joe Kenney Band Merch'
            />
            </MenuLink>
            </div>
            <div className={styles.column}>
            <MenuLink to='about' href='/' offset={-100}>
            <Image
              className={styles.panelImages}
              src={about}
              alt='Joe Kenney Band'
              placeholder='blur'
            />
            </MenuLink>
        </div>
        </div>
            </div>
            </div>

  );
};

export default Hero;
