import Button from "../button/Button";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

const MembershipCard = ({ title, price, items }) => {
  return (
    <div className="group w-[275px] h-[400px] bg-dark-gray rounded-[10px]  text-white border border-dark-gray hover:border-yellow transition duration-300 cursor-pointer">
      <div className="px-6 py-4 border-b border-black rounded-t-[10px] group-hover:bg-yellow group-hover:text-black transition duration-300">
        <div className="text-18 font-family-bold text-center">
          Pass ‘{title}’
        </div>
        <div className="text-2xl text-center">$ {price}</div>
      </div>
      <div className="px-4 pt-6 flex items-center justify-between flex-col h-[305px] rounded-b-[10px] relative">
        <ul className="m-0 p-0 flex items-center justify-start flex-col gap-4">
          {items.map(({ caption }) => {
            return (
              <li className="flex items-center justify-start w-full gap-3">
                <span className="group-hover:text-yellow">
                  <Icon path={mdiCheckCircleOutline} size="20" />
                </span>
                <span className="text-14 font-family-light">{caption}</span>
              </li>
            );
          })}
        </ul>
        <Button title="Buy" extraClass="text-14 font-family-light py-[6px] absolute bottom-7" />
      </div>
    </div>
  );
};

export default MembershipCard;
