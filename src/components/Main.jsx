import React from "react";
import cyberpunk from "../assets/videoplayback.mp4";

const Main = () => {
  function scrollToBottom() {
    window.scrollTo({
      top: window.scrollY + 900,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={cyberpunk} type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
      </div>
      <button className="button" onClick={scrollToBottom}>
        ПОЧАТОК
      </button>
    </div>
  );
};

export default Main;
