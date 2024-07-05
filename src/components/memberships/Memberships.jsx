import MembershipCard from "./MembershipCard";

const MemberShips = () => {
  const memberships = [
    {
      title: "Trial",
      price: 0,
      items: [
        {
          caption: "Access to the gym from 8:00 to 14:00",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "Easy Start",
      price: 119,
      items: [
        {
          caption: "Visit without restrictions 24/7",
        },
        {
          caption: "Individual training program",
        },
        {
          caption: "Access to the VTRAINER application",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
    {
      title: "Free Time",
      price: 49,
      items: [
        {
          caption: "The entrance time to the gym is from 14:00 to 16:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "1 Month 24/7",
      price: 85,
      items: [
        {
          caption: "Visit without restrictions 24/7",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "In Shape (AM)",
      price: 165,
      items: [
        {
          caption: "Training in mini-groups until 14:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "Classes with a trainer in a mini-group 3 times a week",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
    {
      title: "In Shape (PM)",
      price: 195,
      items: [
        {
          caption: "Training in mini-groups until 17:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "Classes with a trainer in a mini-group 3 times a week",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
  ];
  return (
    <section className="flex items-center justify-center flex-col w-full mb-10 px-[100px]">
      <div className="text-[48px] text-white mb-28">Gym membership</div>
      <div className="flex items-center justify-center gap-16 flex-wrap">
        {memberships.map(({ title, price, items }, index) => {
          return (
            <MembershipCard
              key={`membership-${index}`}
              title={title}
              price={price}
              items={items}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MemberShips;
