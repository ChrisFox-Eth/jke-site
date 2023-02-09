import React from "react";
import type { NextPage } from "next";
import styles from "/pages/styles/Home.module.css";
import { Image } from "../shared/Image";
import logo from "/public/JoeKenneyLogo.png";
import forthAlbum from "/public/forthAlbum.png";
import { Link } from "../shared/Link";
import { MenuLink } from "../shared/MenuLink";;
import siteFooter from "/public/newJkeSiteFooter.png";
import joekenneyband from "/public/MusicSectionJoeKenneyBand.png";

export default function About() {
  return (
    <div id='about'>
      <h1 className={styles.h1}>
        ABOUT
      </h1>
      <div className={styles.aboutContainer}>
      <p>Joe Kenney is a recording artist, songwriter, and pianist from Philadelphia. His music spans multiple genres and is a blend of classical music theory, jazz fusion, rock, soul, and hip-hop idioms.</p>
      <p>His debut album, Afflictions and Remedies, received local airplay and praise. His second album, 1.5, featured cover arrangements of alternative rock and top 40 hits and received recognition on broadcast radio and iHeartRadio.</p>
      <p>In 2017, Kenney released an EP of three singles that served as the foundation for his 2020 album, Forth. This album featured six highly decorated vocalists from the Philadelphia area and won a Bronze Medal in the Global Music Awards.</p>
      <p>In 2021, Kenney released a solo album called Reflections on Inner Transformation. It features character pieces that explore and meditate on points of growth in his own life. The Joe Kenney Band completed a tour in October 2021 and Kenney is working on more material and collaborations with new artists for future releases.</p>
      </div>
    <hr className={styles.rounded}></hr>
      <h1 className={styles.h1} style={{ textAlign: 'left', margin: 48 }}>
      UPCOMING SHOWS
      </h1>
      <a className={styles.bookButton} href="https://www.joekenneypiano.com/performances" target='_blank' rel="noreferrer">Calendar</a>
    </div>
  );
}
