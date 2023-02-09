import React from 'react';
import styles from "/pages/styles/Home.module.css";
import { Link } from "../shared/Link";
import { Image } from "../shared/Image";
import prevailingAlbum from "/public/PrevailingAlbum.jpeg";
import theProperHustlers from "/public/TPHBand.jpeg";
import joekenneyband from "/public/MusicSectionJoeKenneyBand.png";
import forthAlbum from "/public/forthAlbum.png";
import immersionSingle from "/public/immersionSingle.png";
import anotherSideSingle from "/public/anotherSideSingle.png";
import jkeBandMusic from "/public/jkeBandMusic.png";
import albums from "/public/albumCollage.gif";
import { OpenSeaLogo } from "../shared/svg/OpenSeaLogo";
import { Collection } from "./Collection";
import { TwitterLogo } from "../shared/svg/TwitterLogo";
import { DiscordLogo } from "../shared/svg/DiscordLogo";
import { MenuLink } from "../shared/MenuLink";

export const Music = () => {
  return (
    <div id='Music'>
      <h1 className={styles.h1}>
    MUSIC
      </h1>
    <Image
    className={styles.musicBanner}
    src={jkeBandMusic}
    alt='Joe Kenney Band Picture'
    placeholder='blur'
    />
    <div id='JoeKenneyBand'>
    <h2 className={styles.h2} style={{ textAlign: 'left', margin: 48 }}>
    </h2>
    <div className={styles.bodyContainer}>
    <p className={styles.explain}> Joe Kenney Band blends a cool jazz fusion vibe with jam-band influences, to create a distinctive and dynamic energy that comes to life in captivating originals and distinctive arrangements of contemporary tunes from varying genres/origins.</p>
    </div>
    <div style={{ marginTop: 48 }}>
    <a className={styles.bookButton} href="mailto:Office@JoeKenneyPiano.com?subject=Booking%20Joe%20Kenney%20Band">Booking Requests</a>
</div>
        <div style={{ marginTop: 48 }}>
        <Image
          className={styles.heroImage}
          src={albums}
          alt='Albums'
        />
        </div>
        <div style={{ marginTop: 48, marginBottom: 48 }}>
              <iframe
                src="https://open.spotify.com/embed/artist/5JyiHd887ZWNH1F0MrS0X1?utm_source=generator"
                width="40%"
                min-width="500"
                height="500"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
        </div>
        <div className={styles.quoteRow}>
            <div className={styles.quoteColumn}>
            <blockquote cite="https://neonmusic.co.uk/premiere-another-side-of-joe-kenney-ft-joy-ike/">
<p className={styles.quoteColumn}>
                <Image
                  className={styles.quoteAlbums}
                  src={anotherSideSingle}
                  alt='Joe Kenney Single - Another Side'
                  placeholder='blur'
                  />
                  [<a href="https://open.spotify.com/track/1MolKOyhT3DKGjPJh1B2UX?si=bfbd0a6c5fdb47df" target="_blank" rel="noreferrer">Another Side</a>] is emotive but also spiritually uplifting, as it makes you look at your own life with fresh eyes. The lyrics shine through the musical styles, which are seamlessly stitched together.<br></br><br></br><em>- <a href="https://neonmusic.co.uk/premiere-another-side-of-joe-kenney-ft-joy-ike/" target='_blank' rel="noreferrer">Lucy Lerner, Neon Magazine</a></em></p>
            </blockquote>
            </div>
          </div>
          <div className={styles.quoteRow}>
          <div className={styles.quoteColumn}>
            <blockquote cite="https://mainlypiano.com/reviews/joe-kenney-reflection-5-immersion-single">
            <p className={styles.quoteColumn}>
                <Image
                  className={styles.quoteAlbums}
                  src={immersionSingle}
                  alt='Joe Kenney Single - Another Side'
                  placeholder='blur'
                  />
                [<a href="https://open.spotify.com/track/0b8T0RpF0i3FTG8p8YRGrB?si=cfd69044c9304fea" target="_blank" rel="noreferrer">Reflection #5 - Immersion</a>] begins very quietly and continues in a calm and reflective style that feels (to me) much like being lost in thought or becoming completely immersed in a daydream or simply allowing the music to create itself as it flows from the soul and out through fingers. Warm, soothing and very beautiful... Highly recommended!<br></br><br></br><em>- <a href="https://mainlypiano.com/reviews/joe-kenney-reflection-5-immersion-single" target='_blank' rel="noreferrer">Kathy Parsons, MainlyPiano</a></em></p>
            </blockquote>
            </div></div>
        <div id='TheProperHustlers'>
        <h2 className={styles.h2} style={{ textAlign: 'left', margin: 48 }}>
        </h2>
        <hr className={styles.rounded}></hr>
        <Image
          className={styles.musicBanner}
          src={theProperHustlers}
          alt='The Proper Hustlers Banner'
          placeholder='blur'
        />
        <div>
          <iframe
            className={styles.webEmbeds}
            width="560"
            frameBorder="0"
            max-width="560"
            height="315"
            src="https://www.youtube.com/embed/4jhhCz31wbk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
        </div>
        <div>
        <h2 className={styles.h2}>
        </h2>
        <iframe
          src="https://open.spotify.com/embed/artist/0oJPPtQNJfuH0wOOkGG9P0?utm_source=generator"
          width="40%"
          min-width="500"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>
        </div>
        </div>
        <div id='NFT'>
        <hr className={styles.rounded}></hr>
        <h1 className={styles.h1} style={{ textAlign: 'center', margin: 48 }}>
        JOE KENNEY GENESIS NFT COLLECTION
        </h1>
        <div>
          <iframe
              className={styles.webEmbeds}
              src="https://gateway.ipfscdn.io/ipfs/Qmej3ewrU7UMh4G5Sjp9rb5kjcAtByujUo7fXYpPgKE2pW/drop.html?contract=0xC7fB4E4857e353a713BE1d24329eDB7B56738eCC&chainId=137"
              width="600px"
              height="600px">
          </iframe>
        </div>
        <hr className={styles.rounded}></hr>
        </div>
        <div id='Booking'>
        <h1 className={styles.h1} style={{ textAlign: 'center', margin: 48 }}>
        LESSONS & BOOKING
        </h1>
        <div className={styles.quoteRowLessons}>
            <div className={styles.quoteColumnLessons}>
            <blockquote>
<p className={styles.quoteColumnLessons}>
              Joe has been teaching our son to play piano for about 9 months and we continue to be very pleased with our sons progress thus far. He has already played in one recital and invited to play in another, just to get him comfortable and practicing performances. Joe encourages this and our son loves the interaction. Joe goes out of his way to find fun and engaging music that keeps him interested and the sticker charts are wonderful to help our 7 year old attain goals in a reasonable time frame - motivating practice too! Joe has been punctual to all of our lessons and he responds very quickly to emails or calls. We highly recommend him for piano lessons!<br></br><br></br><em>- Nicole Ferrara, Phoenixville, PA</em></p>
            </blockquote>
            </div>
        </div>
        <div className={styles.quoteRowLessons}>
            <div className={styles.quoteColumnLessons}>
            <blockquote>
<p className={styles.quoteColumnLessons}>
              My child has enjoyed having Joe as his piano teacher. What Ive really appreciated is that Joe has tailored the instruction to match the interests of his students. Because of this, my son enjoys practicing his piano and looks forward to his lessons.<br></br><br></br><em>- Tony D, Spring City, PA</em></p>
            </blockquote>
            </div>
        </div>
        <div className={styles.quoteRowLessons}>
            <div className={styles.quoteColumnLessons}>
            <blockquote>
<p className={styles.quoteColumnLessons}>
              Joe has been teaching my nine-year-old for almost two years. Joe is patient, creative, encouraging and fosters a very relaxed atmosphere that helps my son feel comfortable. He always tries to find material that keeps my son interested and challenged and he really enjoys working with Joe. Most of all, he has learned a lot and developed a love for the piano!<br></br><br></br><em>- Heidi Carp, Swarthmore, PA</em></p>
            </blockquote>
            </div>
        </div>
        </div>
        <a className={styles.bookButton} href="mailto:Joe@JoeKenneyPiano.com?subject=Booking%20Request&body=Joe%2C%0D%0A%0D%0AI'm%20reaching%20out%20from%20%5BInsert%20Name%2FOrganization%5D%20as%20I%20am%20interested%20in%20booking%20you%20%26%20your%20band%20for%20%5BLive%20Performance%2FLessons%5D.%0D%0A%0D%0AMy%20phone%20number%20is%20XXX-XXX-XXXX.">Book Joe Kenney</a>
        </div>
        <hr className={styles.rounded}></hr>
    </div>

  );
};

export default Music;
