import React from 'react';
import styles from "/pages/styles/Home.module.css";
import logo from "/public/JoeKenneyLogo.png";
import siteFooter from "/public/newJkeSiteFooter.png";
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

export default function ThirdwebGuideFooter() {
  return (
    <>
    <div>
    <Image
    className={styles.footerBanner}
    src={siteFooter}
    alt='Joe Kenney Band Picture'
    placeholder='blur'
    />
    </div>
      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://open.spotify.com/artist/5JyiHd887ZWNH1F0MrS0X1",
              "_blank"
            )
          }
        />
      </div>

        <div className={styles.footerLeft}>
        </div>
        <div className={styles.explain}>©2023 Joe Kenney Enterprises</div>
        <div className={styles.footerSocial}>
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
    </>
  );
}
