import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function HomeInsurance() {
  const benefits = [
    {
      id: 1,
      desc_head: "Home Insurance covers you against natural calamities: ",

      desc: "The thought of a natural disaster that destroys your home is every property owner's worst nightmare. Disasters like earthquakes, floods, tsunamis, and typhoons can result in astronomical repair costs and cause immense financial and emotional stress for the owner. However, a comprehensive home insurance policy can offer protection against the losses and damages caused by these calamities. It covers the expenses related to repairs and renovations, acting as a financial cushion that can help you rebuild your home without having to deplete your savings. With a dependable home insurance policy in place, you can rest easy knowing that you're prepared for the unexpected.",
    },
    {
      id: 2,
      desc_head: "Home Insurance covers you against man-made disasters: ",

      desc: "In addition to safeguarding your home from natural disasters, a comprehensive home insurance policy also provides coverage for expenses resulting from human-made disasters. It offers protection against a range of human catastrophes, including thefts, burglaries, riots, strikes, and even terrorist attacks that could cause damage or destruction of property. With this added layer of protection, you can have peace of mind knowing that you're covered for any unforeseen events that could cause harm to your property. Don't wait for an unfortunate incident to occur - secure your home with a reliable home insurance policy today.",
    },
    {
      id: 3,
      desc_head: "Coverage of temporary living expenses: ",

      desc: "If your insured house is completely destroyed and requires rebuilding or renovation, finding temporary accommodation becomes crucial. This can be a time-consuming process, and if you don't have another property to live in, you may have to consider renting one. Unfortunately, renting out a new house can be quite expensive. However, with a reliable home insurance policy, you don't have to worry about the additional living expenses. Your home insurance policy provider will cover your temporary living expenses until your insured house is livable again, saving you from any financial burden during this difficult time.",
    },
    {
      id: 4,
      desc_head:
        "Protection for your valuable assets and personal belongings against loss or damage: ",

      desc: "Not only does property insurance protect the physical structure of your home, but it also covers most of the contents inside, making it an essential aspect of safeguarding your property. While a standard home insurance policy primarily covers the house's structure, opting for a comprehensive plan with appropriate riders can provide additional coverage for valuable items. This includes personal belongings such as jewelry, expensive apparels, home appliances, and furniture, which can be expensive to replace if lost, stolen, or damaged.",
    },
  ];

  const keyTerms = [false];

  return (
    <div>
      <PolicyDetails
        head={"Home Insurance"}
        
        subhead={
          "Easily Compare Different Home Insurance Plans in a few straight forward steps."
        }
        list1={"Compare Home Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Avail plan recommendation in seconds"}
        img={"Home_ins"}
        Ins_Text_1={"Insure your"}
        Ins_Text_2={"Home Sweet Home"}
        Ins_Text_3={""}
        description_1={
          "A property insurance policy commonly known as Home Insurance offers coverage for your residence, whether you own it or rent it, and your personal possessions inside it. It provides protection against unforeseen events like robberies, fires, floods, storms, and explosions."
        }
        description_2={
          " Purchasing a home is a crucial investment that people spend all their life working towards. However, many individuals overlook the importance of safeguarding and protecting this important investment. Your home holds more value than just its physical structure, including your cutting-edge gadgets, exquisite interiors, jewelry, and other valuable possessions. "
        }
        description_3={
          "Therefore, obtaining a Home Insurance policy is a crucial step towards ensuring the safety and wellbeing of your home. This type of insurance provides protection and cover against uncertain and unfortunate circumstances such as robberies, floods, fires, earthquakes, and other unexpected circumstances. Certain Home Insurance policies include an optional add-on for valuable items such jewellery, can help you safeguard your home and valuables."
        }
        benefits={benefits}
        homeInsurance={true}
        keyTerms={keyTerms}
        quotes={"Get Free Quotes"}
        helping_verb={"is"}
        why={true}
        whyText={benefits}
        no_benefit={true}
      />
    </div>
  );
}

export default HomeInsurance;
