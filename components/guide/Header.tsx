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
        <Link href='/' className='mr-4'>
        <Image
          className={styles.logo}
          src={logo}
          alt='Joe Kenney Logo'
          placeholder='blur'
          />
          </Link>
        </div>
      </div>
      <div className={styles.social}>
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
