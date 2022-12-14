import React from 'react';
import styles from "/pages/styles/Home.module.css";
import logo from "/public/JoeKenneyLogo.png";
import { Image } from "../shared/Image";
import { Link } from "../shared/Link";
import { InstagramLogo } from "../shared/svg/InstagramLogo";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { FacebookLogo } from "../shared/svg/FacebookLogo";
import { SoundcloudLogo } from "../shared/svg/SoundcloudLogo";
import { SpotifyLogo } from "../shared/svg/SpotifyLogo";
import { YouTubeLogo } from "../shared/svg/YouTubeLogo";
import { TikTokLogo } from "../shared/svg/TikTokLogo";
import { MenuLink } from "../shared/MenuLink";

export const Header = () => {
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
        href='https://www.tiktok.com/@joekenneypiano/'
        target='_blank'
        rel="noreferrer">
        <TikTokLogo width={24} height={24} />
        </a>
      <a
        href='https://www.youtube.com/joekenneypianophoenixville/'
        target='_blank'
        rel="noreferrer">
        <YouTubeLogo width={24} height={24} />
        </a>
      <a
        href='https://open.spotify.com/artist/5JyiHd887ZWNH1F0MrS0X1/'
        target='_blank'
        rel="noreferrer">
        <SpotifyLogo width={24} height={24} />
        </a>
      <a
        href='https://www.instagram.com/joekenneypiano/'
        target='_blank'
        rel="noreferrer">
        <InstagramLogo width={24} height={24} />
        </a>
      <a
        href='https://soundcloud.com/joekenneypiano'
        target='_blank'
        rel="noreferrer">
        <SoundcloudLogo width={24} height={24} />
        </a>
      <a
        href='https://www.facebook.com/JoeKenneyPiano/'
        target='_blank'
        rel="noreferrer">
        <FacebookLogo width={30} height={30} />
      </a>
      <a
        href='https://twitter.com/joekenneypiano'
        target='_blank'
        rel="noreferrer">
        <TwitterLogo width={30} height={30} />
      </a>
      </div>
    </div>
  );
};

export default Header;
