import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function GroupInsurance() {
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
      <PolicyDetails
        head={"Group Health Insurance"}
        benefit_head = {"Benefits of Group Health Insurance to the Employer"}
        key_feature_head = {"Key Features of Group Health Insurance"}
        subhead={"Buy a Group Health Insurance Plan in a few simple steps."}
        list1={"Compare Group Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        img={"Group_ins"}
        Ins_Text_1 ={"Get your team's health on lock -"}
        Ins_Text_2 ={"we've got your group health insurance needs covered."}
        Ins_Text_3 = {""}
        description_1={
          "Companies and organizations purchase Group Health Insurance to offer medical coverage to their employees. Employees are covered by the Group Health Insurance starting from the day they join until the day they resign. The employer pays the premium amount of the Group Health Insurance plan on behalf of the employee. Group Health Insurance policies benefit both the employee and the employer in different ways."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        quotes = {"Get Free Quotes"}
        button_overlap = {true}
      />
    </div>
  );
}

export default GroupInsurance;
