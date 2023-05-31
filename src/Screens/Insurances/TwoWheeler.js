import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function TwoWheeler() {
  const benefits = [
    {
      id: 1,
            desc_head : "Financial Protection: ",

      desc: "Bike insurance provides financial protection against unforeseen events such as accidents, theft, or damage to your vehicle. It helps cover the repair or replacement costs, reducing the financial burden on the policyholder.",
    },
    {
      id: 2,
            desc_head : "Third-Party Liability Coverage: ",

      desc: "Bike insurance includes mandatory third-party liability coverage, which covers the policyholder against legal liabilities arising from injury, death, or property damage caused to a third party. This coverage is essential as per the Motor Vehicles Act, 1988.",
    },
    {
      id: 3,
            desc_head : "Own Damage Coverage: ",

      desc: "Comprehensive two-wheeler insurance policies offer own damage coverage, which protects against damages to your own vehicle due to accidents, natural disasters, fire, theft, vandalism, or other such perils. This coverage provides financial assistance for repairs or replacement.",
    },
    {
      id: 4,
            desc_head : "Personal Accident Cover: ",

      desc: "Bike insurance policies typically include personal accident cover for the owner/rider. In case of accidental death or permanent disability resulting from a covered event, the policy provides compensation to the insured or their nominated beneficiaries.",
    },
    {
      id: 5,
            desc_head : "No Claim Bonus (NCB): ",

      desc: "Insurers offer a No Claim Bonus as a reward for not making any claims during the policy term. This bonus accumulates over the years and can lead to significant premium discounts upon policy renewal.",
    },
    {
      id: 6,
            desc_head : "Add-On Covers: ",

      desc: "Insurance providers offer various add-on covers that can be purchased along with the base policy. These add-ons provide additional coverage for specific needs, such as zero depreciation cover, roadside assistance, engine protection, consumable cover, etc.",
    },
    {
      id: 7,
            desc_head : "Cashless Claim Settlement: ",

      desc: "Many insurance companies have tie-ups with network garages, enabling cashless claim settlements. This facility allows policyholders to get their vehicles repaired without making upfront payments and saves them from the hassle of reimbursement procedures.",
    },
  ];

  const keyTerms = [
    {
      id: 1,
            desc_head : "Insurance Declared Value (IDV): ",

      desc: "Prior to choosing a two-wheeler insurance plan, it is important to have a clear understanding of your bike's IDV (Insurance Declared Value). The IDV represents the current market value of the vehicle, and it directly influences the insurance premium you will have to pay.",
    },
    {
      id: 2,
            desc_head : "Analysis of your specific needs: ",

      desc: "In order to select the most suitable policy, it is essential to analyze specific aspects related to your two-wheeler and driving habits. Factors such as your experience as a driver, frequency of vehicle usage, budgetary considerations, and the city you reside in should be carefully assessed and taken into account.",
    },
    {
      id: 3,
            desc_head : "Compare Two-wheeler Plans: ",

      desc: "Refer to reliable websites to access online reviews and gain further insights into the top two-wheeler insurance policies. Additionally, it is recommended to compare your insurance plans based on multiple factors for a well-informed decision.",
    },
  ];

  const gridText = [
    
    
    {
      id : 2,
      title : "Third-party Insurance",
      desc : "Provides coverage in the event that your vehicle causes damage to someone else's vehicle or causes bodily injury to them."

    },
    {
      id : 3,
      title : "Personal Accident Cover",
      desc : "Provides financial assistance in the event of death or disability resulting from an accident."

    },
    {
      id : 4,
      title : "Emergency Roadside Assistance",
      desc : "This feature provides round-the-clock emergency roadside assistance in the event of a vehicle breakdown."

    },
    {
      id : 5,
      title : "Personal Damage Cover",
      desc : "Provides coverage for damages incurred by your bike as a result of accidents, theft, riots, or natural disasters."
    },
    {
      id : 6,
      title : "Add-on Covers",
      desc : "Provides the opportunity to obtain extended coverage and discounts, including benefits such as No Claim Bonus cover, engine protection cover, zero depreciation cover, and more."

    },
   
    
  ]
  return (
    <div>
      {" "}
      <PolicyDetails
        head={"Two-Wheeler Insurance"}
        benefit_head = {"Benefits of buying Two-wheeler Insurance"}
        key_feature_head = {"How to choose a Two-wheeler Insurance Policy?"}
        subhead={"Compare Plans & Costs. Get Quotes Online."}
        list1={"Compare Two-wheeler Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        img={"Two_ins"}
        Ins_Text_1 ={"Rev up your protection and"}
        Ins_Text_2 ={"get insured now!"}
        Ins_Text_3 = {""}
        description_1={
          "In addition to offering third-party liability protection, Two-wheeler Insurance plans also offer comprehensive coverage to the owner/driver of the two-wheeler. These plans pay for the cost of repairs needed as a result of damage done to the insured two-wheeler as well as the owner's or driver's accidental death or disability."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        twoWheel={true}
        quotes = {"Get Free Quotes"}
        quotes_link ={"https://bike.analahinsurance.com/bike/lead-page"}
        no_benefit={true}
        gridTopLeft = {"Features"}
        gridTopRight = {"Coverage"}
        gridHeader={"Key Features of Two-wheeler Insurance Policy"}
          gridText={gridText}
      />
    </div>
  );
}

export default TwoWheeler;
