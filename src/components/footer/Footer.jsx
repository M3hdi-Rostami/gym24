import Icon from "@mdi/react";
import { logo } from "../../assets/images";
import bgMusic from "../../assets/mp3/bg-music.mp3";
import {
  mdiEmailOutline,
  mdiFacebook,
  mdiInstagram,
  mdiPause,
  mdiPhoneOutline,
  mdiPlay,
  mdiTwitter,
  mdiYoutube,
} from "@mdi/js";
import SocialLink from "../social-link/SocialLink";
import { useRef, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex items-start justify-center sm:justify-between sm:flex-row flex-col md:gap-[216px] gap-12 md:px-0 px-10">
        <div className="hidden md:block">
          <img src={logo} alt="gym24" className="mb-[26px]" />
          <p className="text-14 font-family-light">
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:w-max w-full">
          <div className="text-18 mb-[26px]">Address</div>
          <div className="text-14 font-family-light w-max">
            Republic of Belarus
            <br />
            Minsk city
            <br />
            Dzerzhinsky Avenue 15
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:w-max w-full">
          <div className="text-18 mb-[26px]">Contact</div>
          <div className="text-14 font-family-light w-max mb-6">
            <div className="flex gap-2 mb-2">
              <span>
                <Icon path={mdiPhoneOutline} size="20" />
              </span>
              <a href="cal:+375(44)-777-24-12">+375(44)-777-24-12</a>
            </div>
            <div className="flex gap-2">
              <span>
                <Icon path={mdiEmailOutline} size="20" />
              </span>
              <a href="mailto:gym24@gmail.com">gym24@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-6">
            <SocialLink link="#">
              <Icon path={mdiInstagram} size="20" />
            </SocialLink>
            <SocialLink link="#">
              <Icon path={mdiFacebook} size="20" />
            </SocialLink>
            <SocialLink link="#">
              <Icon path={mdiTwitter} size="20" />
            </SocialLink>
            <SocialLink link="#">
              <Icon path={mdiYoutube} size="20" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 py-6 mt-20 text-14 flex items-center justify-center gap-2">
        <span>Crafted with ☕ and 💚</span>
        <span className="text-gray-500">|</span>
        <span className="text-yellow">{currentYear}</span>
      </div>
      <button
        onClick={togglePlay}
        className="bg-yellow text-black w-12 h-12 rounded-full flex items-center justify-center fixed left-10 bottom-10 z-10"
      >
        {isPlaying ? (
          <Icon path={mdiPause} size="24" />
        ) : (
          <Icon path={mdiPlay} size="24" />
        )}
      </button>
      <audio ref={audioRef} src={bgMusic} />
    </>
  );
};

export default Footer;
