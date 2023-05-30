import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function CarInsurance() {
  const benefits = [
    {
      id: 1,
      desc_head: "",
      desc: "In the event of an accident, an insurance policy offers financial compensation to the survivors and assistance with medical treatment expenses. Additionally, it offers death benefits to the nominee or to the family members of the insured or deceased.",
    },
    {
      id: 2,
      desc_head: "",
      desc: "It protects the insured and compensates for any lawsuits and legal fees associated with the accident.",
    },
    {
      id: 3,
      desc_head: "",
      desc: "A Car Insurance policy covers for the costs of repairing any accident-related car damage.",
    },
    {
      id: 4,
      desc_head: "",
      desc: "A Car Insurance policy covers damage to the car brought on by fire, natural disasters, theft, and other man-made incidents.",
    },
    {
      id: 5,
      desc_head: "",
      desc: "In the event that the car is stolen, a car insurance policy offers discounts on premiums for having more than one insurance policy with the same insurance company..",
    },
    {
      id: 6,
      desc_head: "",
      desc: "An insurance policy also provides extended coverage for other people driving the car of the policyholder with permission.",
    },
    {
      id: 7,
      desc_head: "",
      desc: "Rewards are offered by insurance policies in the form of No Claim Bonus and other benefits.",
    },
  ];

  const keyTerms = [
    {
      id: 1,
      desc_head: "Covers for risk: ",
      desc: "The policyholder is protected by Car Insurance from the risk of damages caused by man-made disasters like fire, rioting, theft, etc., and natural disasters like flood, earthquake, landslide, etc., and damage while in transit, etc.",
    },
    {
      id: 2,
      desc_head: "The insured value: ",
      desc: "The car is covered by an insurance policy for its ‘Insured Declared Value’ which is determined on the price of the manufacturer less the depreciation.",
    },
    {
      id: 3,
      desc_head: "",
      desc: ".",
    },
    {
      id: 4,
      desc_head: "Add-ons: ",
      desc: "With this feature, the policyholder can add additional cover to protect themselves against risks that are not covered under the basic policy. Such additional covers include No Claim Bonus Protection, Zero Depreciation, Hospitalization for Accidents, Coverage for Fellow Passengers and the Driver etc.",
    },
    {
      id: 5,
      desc_head: "Tenure and Claims: ",
      desc: "An insurance policy is valid for a year after which they can easily be renewed.Car insurance renewal can be done online in some simple steps. The claim settlement process has also been simplified by reimbursement or cashless services in the network garages.",
    },
  ];
  const whyRequired_Text = [
    {
      id: 1,
      require_head: "Mandatory: ",
      require: "The Motor Vehicles Act of 1988 makes it mandatory for all vehicles, whether private or commercial, including electric vehicles, to have a valid third-party car insurance, wherein third-party liability is also mandatory. To comply with the law, the buyer must purchase or renew your Car Insurance.",
    },
    {
      id: 2,
      require_head: "Protection from Third-party Liabilities: ",
      require: "When your insured car causes damages to a third-party’s property or injuries to third-party, third-party liabilities are created. By covering your car with third-party insurance (also known as comprehensive insurance), you can protect against financial burdens brought on by third-party liabilities.",
    },
    {
      id: 3,
      require_head: "Coverage against Natural Calamities: ",
      require: "Natural calamities like floods, cyclones, earthquakes can cause significant damage to your car, and the cost of repairs may be very high. Comprehensive Car Insurance provides financial assistance for car repairs due to unexpected natural disasters.",
    },
    {
      id: 4,
      require_head: "Personal Accident Cover: ",
      require: "Insure your car and benefit from the Personal Accident Cover of up to INR 15 lakh. The policyholder (or owner-driver) receives compensation under this insurance in the event of bodily injury, death, or disability while operating the vehicle.",
    },
    {
      id: 5,
      require_head: "Protection from Car Theft: ",
      require: "Imagine that your insured vehicle is stolen and untraceable. Your Comprehensive Car Insurance Policy will compensate you for your financial loss.",
    },
    {
      id: 6,
      require_head: "Lowers Financial Burden: ",
      require: "Financial losses may result from a significant dent or scratch on your car brought on by an accident, natural disaster, or human error. Buying Comprehensive Car Insurance or Own Damage Cover protects you from these liabilities and keeps you protected against unanticipated financial losses. Certain Car Insurance policies also comes with the option of availing cashless services in the certified network garages across the nation.",
    },
  ]
  const add_ons_array = [
    {
      id: 1,
      require_head: "No Claim Bonus : ",
      require: "No-claim Bonus (NCB) is a discount on the premium to be paid that the insurance company provides for every claim-free year. This bonus is cumulative and can increase every year. The NCB Protection cover protects the NCB. No Claim Bonus becomes void on making a claim and this add on the cover helps you in retaining the No Claim Bonus even after making a claim.",
    },
    {
      id: 2,
      require_head: "Engine Protection Cover : ",
      require: "The Engine Protection add-on provides coverage for any damage the engine sustains as a result of leaks or water intrusion. This add-on cover protects the engine, gearbox and certain other parts of the insured vehicle as per the terms and conditions of the policy.",
    },
    {
      id: 3,
      require_head: "Zero depriciation cover : ",
      require: "The Zero depreciation cover makes up for the car's depreciating value. The policyholder does not have to pay for the car's depreciated value if they have this coverage. This add-on is subject to certain claims. The feature of voluntary deductible remains applicable even with zero depreciation add-on cover.",
    },
    {
      id: 4,
      require_head: "Consumable Cover: ",
      require: "Consumable components, such as nuts, bolts, grease, lubricants, engine oil, brake oil, etc. are usually not covered during claim settlement. The Consumable Cover add-on, covers such costs while settling claims.",
    },
    {
      id: 5,
      require_head: "Key protection cover: ",
      require: "The Key Protection/Replacement cover, is an add-on that helps you cover the expenses incurred for key replacement or repair. The cover pays for replacement of the key and lock in case of thefts and loss.",
    },
    {
      id: 6,
      require_head: "Daily allowance: ",
      require: "In case the car is at the workshop for repairs for more than three days, this coverage offers the benefit of a daily allowance. This allowance is provided for travel by any means other than the insured vehicle.",
    },
    {
      id: 7,
      require_head: "Personal Accident Rider: ",
      require: "This add-on enables you to protect the passengers in case of any misfortune accidents that result in personal injury, death, disability or damage.",
    },
  ]

  const document_data = [
    {
      id: 1,
     
      require: "Driver Licence",
    },
    {
      id: 2,
     
      require: "Car Insurance Policy",
    },
    {
      id: 3,
     
      require: "Car’s Registration Certificate",
    },
    {
      id: 4,
    
      require: "First Information Report (FIR), if required",
    },
    {
      id: 5,
    
      require: "Original car keys",
    },
    {
      id: 6,
    
      require: "Non-traceable Certificate (If required)",
    },
    {
      id: 7,
    
      require: "Proof of identification of the policyholder",
    },
    {
      id: 8,
    
      require: "Fire brigade report (if lodged)",
    },
    {
      id: 9,
    
      require: "Original car purchase invoice (if opted for Return to Invoice add-on cover)",
    },
    {
      id: 10,
    
      require: "Original repair bills",
    },
    {
      id: 11,
    
      require: "Original payment receipts",
    },
  ]


  return (
    <div>
      <PolicyDetails
        head={"Car Insurance"}
        benefit_head = {"Benefits of Car Insurance"}
        key_feature_head = {"Key Features of Car Insurance"}
        subhead={"Buy a Car Insurance Plan in a few simple steps."}
        list1={"Compare Car Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        Ins_Text_1={"Don't be stuck in neutral"}
        Ins_Text_2={"- start your coverage today!"}
        Ins_Text_3={""}
        img={"Car_ins"}
        description_1={`A Car Insurance coverage protects against a variety of risks associated with driving. To obtain a Car Insurance coverage from an insurer, you need to pay an insurance premium. In case your car faces damages or you cause damage to others via the insured car, your insurer will provide financial help, as per the applicable terms and conditions. At Analah Insurance, we have curated different car insurance plans to suit your specific needs. Whether you are looking for a basic Third-party Insurance Policy or Bumper-to-Bumper Car Insurance, you can choose from different types of insurance plans for your car.`}
        description_2={
          "Additionally, if a comprehensive policy is in place, you can customise the Insured Declared Value (IDV) and select from a variety of eligible add-on covers to enhance the coverage. To continue receiving coverage, you must renew your Car Insurance policy within the expiry date. Through our simple and easy-to-use platform, you can easily renew your Car Insurance policy online."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        car={true}
        quotes={"View Car Insurance Quotes"}
        quotes_link ={"https://car.analahinsurance.com/car/lead-page"}
        why={false}
          whyText ={[]}
          isRequired = {true}
          whyRequired_head = {"Why is Car Insurance required?"}
          whyRequired_Text = {whyRequired_Text}

          extra_data = {true}
          add_ons_header = {"Add-ons in a Car Insurance Policy"}
          add_ons_text = { "In addition to the standard Car Insurance coverage, Insurance companies also offer ‘Add-on Covers’, which are additional covers that protect your car and offer extra coverage. By paying an additional premium, which is added to the Car Insurance quotes to determine the final premium payable for the policy, Add-on Covers can be purchased. Comprehensive Car Insurance packages provide Add-ons. Below are some examples of frequent Add-ons:"}
          add_ons_array = {add_ons_array}
          
          document_data = {document_data}
      />
    </div>
  );
}

export default CarInsurance;
