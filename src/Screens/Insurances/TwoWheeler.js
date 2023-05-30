import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function TwoWheeler() {
  const benefits = [
    {
      id: 1,
            desc_head : "Tax Benefits: ",

      desc: "Under Section 80D of the Income Tax Act, employers are eligible to avail tax benefits.",
    },
    {
      id: 2,
            desc_head : "Retain & Attract Employees: ",

      desc: "Offering Group Insurance is one of a company's attractive perks; it helps to retain current employees and draw in new ones.",
    },
    {
      id: 3,
            desc_head : "Generates Goodwill: ",

      desc: "Offering employees access to Group Health Insurance fosters goodwill among the office workforce.",
    },
    {
      id: 4,
            desc_head : "Cost-Effective: ",

      desc: "A large number of people can be covered under one insurance policy, making it economical for the employer to purchase the policy.",
    },
    {
      id: 5,
            desc_head : "Corporate Buffer: ",

      desc: "If the existing sum insured exhausts, the employer can choose a corporate buffer only in case of critical illnesses or life-threatening diseases.",
    },
  ];

  const keyTerms = [
    {
      id: 1,
            desc_head : "No Medical Screening: ",

      desc: "The employee is not required to undergo any sort of medical examination before being eligible for coverage under a Group Health Insurance.",
    },
    {
      id: 2,
            desc_head : "Pre & Post-Hospitalisation Coverage: ",

      desc: "The group mediclaim policy for employees covers pre and post-hospitalization expenses to the employees.",
    },
    {
      id: 3,
            desc_head : "Employee, spouse, kids & parents (ESKP): ",

      desc: "Group Health Insurance cover extends to the members in the ESKP.",
    },
    {
      id: 4,
            desc_head : "No Waiting Period: ",

      desc: "There is no waiting period under a Group Health Insurance plan for the listed illnesses, as opposed to Individual Health Insurance plans.",
    },
    {
      id: 5,
            desc_head : "Cashless Claim: ",

      desc: "If the insured employee receives treatment at a network hospital, cashless claim can be processed within 45-60 minutes.",
    },
    {
      id: 6,
            desc_head : "Reimbursement Claim: ",

      desc: "If the insured employee receives treatment at a non-network hospital, reimbursement claim can be processed within 15 working days.",
    },
    {
      id: 7,
            desc_head : "Infant Coverage from Day 1: ",

      desc: "After delivery, the employee gets coverage for the newborn baby.",
    },
    {
      id: 8,
            desc_head : "Room-rent Coverage: ",

      desc: "Normal rooms are covered for 1% of the total amount insured, whereas Intensive Care Units (ICU) are covered for 2% of the total amount insured. Some of the insurers also offer no room rent capping.",
    },
  ];
  return (
    <div>
      {" "}
      <PolicyDetails
        head={"Two-Wheeler Insurance"}
        benefit_head = {"Benefits of Group Health Insurance to the Employer"}
        key_feature_head = {"Benefits of Group Health Insurance to the Employee"}
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
      />
    </div>
  );
}

export default TwoWheeler;
