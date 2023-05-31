import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";



function Travel() {
  
  const whatText = [
    {
        id: 1,
              desc_head : "International Travel Insurance Plans : ",

        desc: "International travel insurance plans cater to trips taken outside of your home country. These plans can be categorized based on the countries they cover, such as plans that cover all countries except the USA and Canada, and plans that cover all countries including the USA and Canada. Additionally, there are specific plans available for regions like Asia, Japan, and Schengen countries."
      },
      {
        id: 2,
              desc_head : "Domestic Travel Insurance Plans : ",

        desc: "Unlike international travel insurance plans, domestic travel insurance plans provide coverage for trips taken within India. Whether you're traveling to any destination within the country, you can purchase a domestic travel insurance plan to protect yourself against travel-related risks.",
      },
      {
        id: 3,
              desc_head : "Student Travel Insurance Plans : ",

        desc: "Student travel insurance plans are designed to provide coverage for students who are undertaking overseas travel for higher education purposes. These plans offer specific coverage benefits tailored to the needs of students traveling abroad.",
      },
      {
        id: 4,
              desc_head : "Senior Travel Insurance Plans : ",

        desc: "Senior citizen travel insurance plans are specifically designed to provide coverage for individuals aged 60 years and above when they embark on a trip. These plans cater to the unique needs and potential risks faced by senior citizens during their travels.",
      },
      {
        id: 5,
              desc_head : "Single Trip Insurance Plans : ",

        desc: "Single trip travel insurance plans are designed to provide coverage for a specific journey, typically for a designated duration of days.",
      },
      {
        id: 6,
              desc_head : "Annual Multi-trip Travel Insurance Plans : ",

        desc: "Annual multi-trip travel insurance plans are designed to provide coverage for multiple trips taken within a year. These plans are suitable for frequent travelers who may find it costly and inconvenient to purchase separate single trip insurance plans for each journey. By opting for an annual multi-trip plan, you can ensure that all your trips within a year are covered under a single policy.",
      },
      {
        id: 7,
              desc_head : "Individual Travel Insurance Plans : ",

        desc: "Individual travel insurance plans are specifically designed to provide coverage for a single individual during their trip, as well as for their accompanying family members.",
      },
      {
        id: 8,
              desc_head : "Group Travel Insurance Plans : ",

        desc: "Group travel insurance plans provide coverage for a collective group of individuals under a single policy. These plans are suitable for companies whose employees engage in frequent business travel or for tour operators organizing package trips for a group of people. By obtaining a group travel insurance plan, companies and tour operators can ensure that all members of the group are adequately covered and protected during their travels.",
      },

  ]
  const gridText = [
    
    
    {
      id : 2,
      title : "Emergency medical expenses",
      desc : "In the event of an injury or illness during your travel that requires hospitalization, the travel insurance plan will provide coverage for the associated expenses and medical bills."

    },
    {
      id : 3,
      title : "Repatriation of mortal remains",
      desc : "In the unfortunate event of the insured's demise during the trip, the travel insurance covers the expenses associated with repatriating the deceased person's remains."

    },
    {
      id : 4,
      title : "Loss of baggage",
      desc : "In the event of your checked-in baggage being misplaced or lost by the airline, the policy provides coverage for the financial loss you may incur."

    },
    {
      id : 5,
      title : "Checked-in baggage delay",
      desc : "In the event of a delay in receiving your checked-in baggage, the travel insurance policy will provide a claim payout to cover the purchase of essential personal items that were contained in your bag."

    },
    {
      id : 6,
      title : "Liability to third parties",
      desc : "During your trip, if you cause damage to someone's property or inflict physical harm on an individual, you may be liable to provide financial compensation for the resulting damages. The travel insurance policy also covers the payment of such compensation."

    },
    {
      id : 7,
      title : "Passport Loss",
      desc : "In the event of losing your passport during the trip, the policy will reimburse you for the expenses incurred in obtaining a duplicate passport."

    },
    {
      id : 8,
      title : "Compensation for distress during hijacking",
      desc : "If a hijack occurs, the policy provides a benefit to compensate for the distress experienced during the incident."

    },
    {
      id : 9,
      title : "Cancellation of trip",
      desc : "If your trip is canceled due to circumstances beyond your control, the policy will reimburse the costs associated with pre-booking hotels and travel tickets."

    },
    {
      id : 10,
      title : "Accidental death or disability",
      desc : "In the event of accidental death or disability while traveling by air or during your trip, the policy provides a lump sum benefit payment."

    }
  ]
  return (
    <div>
      <PolicyDetails
        head={"Travel Insurance"}
      
        subhead={"Secure your travels effortlessly with a Travel Insurance Plan in just a few easy clicks!"}
        list1={"Compare Travel Insurance plans "}
        list2={"Instant policy issuance "}
        list3={"Free claims assistance "}
        list4={"Get plan recommendation in seconds"}
        img={"Travel_ins"}
        Ins_Text_1 ={"Secure your adventures, protect your peace of mind"}
        Ins_Text_2 ={"- Get travel insurance and let worries take a vacation!"}
        Ins_Text_3 = {""}
        description_1={
          "Traveling is a source of joy and relaxation, allowing us to break free from our routines and create precious memories with loved ones. However, unexpected emergencies can disrupt even the most well-planned trips, leading to both mental and financial stress. Navigating unfamiliar territories during such times can be challenging, and the additional expenses can strain your budget. To mitigate the risks associated with travel, it is highly recommended to have a comprehensive travel insurance plan. Whether you're planning to travel for business or leisure and seeking the top travel insurance options in India, continue reading to discover detailed information about leading travel insurance companies and the various plans they provide."
        }
        no_benefit = {true}
        homeInsurance = {true}
        benefits={[]}
        keyTerms={[]}
        quotes = {"Get Free Quotes"}
        quotes_link = {""}
        why={false}
        whyText ={[]} 
        isRequired = {false}
          whyRequired_head = {""}
          whyRequired_Text = {[]}  
          what={true}
          whatText = {whatText}
          whatHeadingText = {"A travel insurance policy provides coverage for potential financial losses during your travel, offering protection throughout your trip and assisting you in dealing with any unexpected financial emergencies that may arise."}
          whatDefinition = {"A travel insurance policy provides coverage for potential financial losses during your travel, offering protection throughout your trip and assisting you in dealing with any unexpected financial emergencies that may arise."}
          gridTopLeft = {"Coverage Benefit"}
        gridTopRight = {"Meaning"}
          gridHeader={"What is covered in Travel Insurance?"}
          gridText={gridText}
          />
    </div>
  );
}

export default Travel;

