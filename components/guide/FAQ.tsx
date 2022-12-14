import React from "react";
import type { NextPage } from "next";
import styles from "/pages/styles/Home.module.css";
import { Image } from "../shared/Image";
import { Link } from "../shared/Link";
import { MenuLink } from "../shared/MenuLink";
import hupePromoImage from "/public/bandPic.png";

export default function Faq() {
  return (
    <div>
      <h1 className={styles.h1}>
        FAQ
      </h1>
      <div className={styles.faqContainer}>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      <h3>Question</h3>
      <p>Joe Kenney -- a graduate of West Chester University of Pennsylvania with a B.M. in piano performance (2013) -- is a recording artist, songwriter, and pianist from Philadelphia. The music on his four albums and various collaborations span multiple genres, and are reflective of a cohesive blending of classical music theory, jazz fusion, rock, soul, and hip-hop idioms. Joe has garnered praise for both his original compositions and cover arrangements.</p>
      </div>
      <Image
      className={styles.hunnysDerivs}
      src={hupePromoImage}
      alt='Derivatives Collage'
      placeholder='blur'
      />
    </div>
  );
}
