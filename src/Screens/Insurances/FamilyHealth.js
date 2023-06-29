import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function FamilyHealth() {
  const benefits = [
    {
      id: 1,
desc_head : "Medical Bills: ",
      desc: "Coverage for medical expenditures, including those incurred before and after hospitalization coverage for incurred medical expenses.",
    },
    {
      id: 2,
desc_head : "Pre-existing Diseases: ",
      desc: "After a predetermined waiting period, you are given coverage for any pre-existing diseases.",
    },
    {
      id: 3,
desc_head : "Claim Reimbursement: ",
      desc: "Coverage for expenditures incurred for hospitalization brought on by a medical.",
    },
    {
      id: 4,
desc_head : "Tax Rebate: ",
      desc: "The annual premium paid for health coverage are subject to tax exemption under section 80D of the Income Tax Act of 1961 between INR 25,000 to INR 75,000 are exempt from taxes.",
    },
    {
      id: 5,
desc_head : "",
      desc: "Tax benefits are subject to changes in tax laws.",
    },
    {
      id: 6,
desc_head : "Other Benefits: ",
      desc: "OPD expenditures are now covered by a few insurance plans and the claim reimbursement is not dependent on hospitalization for a minimum of 24 hours. Standalone OPD plans are also available in the market. ",
    },
  ];

  const keyTerms = [
    {
      id: 1,
desc_head : "",
      desc: "Sum Insured Amount",
    },
    {
      id: 2,
desc_head : "",
      desc: "Policy premium to be receive the coverage benefits",
    },
    {
      id: 3,
desc_head : "",
      desc: "Sum Insured Amount",
    },
    {
      id: 4,
desc_head : "",
      desc: "List of network hospitals and Claim Settlement Ratio",
    },
    {
      id: 5,
desc_head : "",
      desc: "Sub-limits (if any) and Waiting Period (for PEDs)",
    },
    {
      id: 6,
      desc_head : "",
      desc: "Co-payment clause",
    },
  ];
  return (
    <div>
      {" "}
      <PolicyDetails
        head={"Family Health Insurance"}
        benefit_head = {"Benefits of Family Health Insurance"}
        key_feature_head = {"Key Terms to consider while evaluating Family Health Insurance plans:"}
        subhead={"Buy a Family Health Insurance Plan in a few simple steps."}
        list1={"Compare Family Health Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        img={"Family_ins"}
        Ins_Text_1 ={"Secure your"}
        Ins_Text_2 ={"Family's Future now."}
       
        description_1={
          "Family Health Insurance plans are health care policies that cover the entire family. The Family Health Insurance plans offer coverage to every member of the family on a single premium. This means that you do not need to pay separate premiums for each person, regardless of their age. Most Family Health Insurance plans in India, cover spouses, children, parents and even parents-in-law under a single policy."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        quotes = {"Get Free Quotes"}
      />
    </div>
  );
}

export default FamilyHealth;
