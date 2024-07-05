import Icon from "@mdi/react";
import { logo } from "../../assets/images";
import {
  mdiEmailOutline,
  mdiFacebook,
  mdiInstagram,
  mdiPhoneOutline,
  mdiTwitter,
  mdiYoutube,
} from "@mdi/js";
import SocialLink from "../social-link/SocialLink";

const Footer = () => {
  return (
    <>
      <div className="flex items-start justify-between gap-[216px] mb-20">
        <div>
          <img src={logo} alt="gym24" className="mb-[26px]" />
          <p className="text-14 font-family-light">
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community
          </p>
        </div>
        <div>
          <div className="text-18 mb-[26px]">Address</div>
          <div className="text-14 font-family-light w-max">
            Republic of Belarus
            <br />
            Minsk city
            <br />
            Dzerzhinsky Avenue 15
          </div>
        </div>
        <div>
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
    </>
  );
};

export default Footer;
