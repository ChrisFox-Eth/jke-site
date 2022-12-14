import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          transform: "rotate(45deg)",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://hunnys.net",
            "_blank"
          )
        }
      />

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
    </>
  );
}
