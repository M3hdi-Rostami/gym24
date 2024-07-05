import { mdiInstagram, mdiTwitter, mdiYoutube } from "@mdi/js";
import Icon from "@mdi/react";
import SocialLink from "../social-link/SocialLink";

const TrainerCard = ({ image, name, instagram, twitter, youtube }) => {
  return (
    <div className="group w-[275px] h-[448px] bg-dark-gray rounded-[10px]  text-white border border-dark-gray px-4 py-5">
      <img src={image} className="mb-[18px]" alt="" />
      <div className="text-white text-18 text-center mb-[18px]">{name}</div>
      <div className="flex items-center justify-center gap-4">
        <SocialLink link="#">
          <Icon path={mdiInstagram} size="20" />
        </SocialLink>
        <SocialLink link="#">
          <Icon path={mdiTwitter} size="20" />
        </SocialLink>
        <SocialLink link="#">
          <Icon path={mdiYoutube} size="20" />
        </SocialLink>
      </div>
    </div>
  );
};

export default TrainerCard;
