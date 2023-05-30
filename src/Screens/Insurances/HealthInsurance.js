import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function HealthInsurance() {
  const benefits = [
    {
      id: 1,
      desc_head: "Medical Bills: ",

      desc: "Coverage for medical expenditures, including those incurred before and after hospitalization coverage for incurred medical expenses.",
    },
    {
      id: 2,
      desc_head: "Pre-existing Diseases: ",

      desc: "After a predetermined waiting period, you are given coverage for any pre-existing diseases.",
    },
    {
      id: 3,
      desc_head: "Tax Benefit: ",

      desc: "The premiums paid for Term Life Insurance are tax free under section 80(C), up to an amount of INR 150,000.",
    },
    {
      id: 4,
      desc_head: "Claim Reimbursement: ",

      desc: "Coverage for expenditures incurred for hospitalization brought on by a medical.",
    },
    {
      id: 5,
      desc_head: "Tax Rebate: ",

      desc: "The annual premium paid for health coverage are subject to tax exemption under section 80D of the Income Tax Act of 1961 between INR 25,000 to INR 75,000 are exempt from taxes.",
    },
    {
      id: 6,
      desc_head: "",

      desc: "Tax benefits are subject to changes in tax laws.",
    },
    {
      id: 7,
      desc_head: "Other Benefits: ",

      desc: "OPD expenditures are now covered by a few insurance plans and the claim reimbursement is not dependent on hospitalization for a minimum of 24 hours. Standalone OPD plans are also available in the market.",
    },
  ];

  const keyTerms = [
    {
      id: 1,
      desc_head: "",

      desc: "Sum Insured Amount",
    },
    {
      id: 2,
      desc_head: "",

      desc: "Policy premium to be receive the coverage benefits",
    },
    {
      id: 3,
      desc_head: "",

      desc: "Sum Insured Amount",
    },
    {
      id: 4,
      desc_head: "",

      desc: "List of network hospitals and Claim Settlement Ratio",
    },
    {
      id: 5,
      desc_head: "",

      desc: "Sub-limits (if any) and Waiting Period (for PEDs)",
    },
    {
      id: 6,
      desc_head: "",

      desc: "Co-payment clause",
    },
  ];
  return (
    <div>
      <PolicyDetails
        head={"Health Insurance"}
        benefit_head = {"Benefits of Health Insurance"}
        key_feature_head = {"Key Terms to consider while evaluating Health Insurance plans:"}
        subhead={"Buying a Health Insurance Plan has never been easier."}
        list1={"Compare Health Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        img={"Health_ins"}
        Ins_Text_1={"Discover the best"}
        Ins_Text_2={"Health Insurance Plans."}
        Ins_Text_3={""}
        description_1={
          "Health insurance, also called Mediclaim, is a way to pay for advanced medical treatments that typically require you to be in hospital overnight. It also covers certain other day care procedures like cataract surgery, etc. that don't require you to be hospitalized but are expensive nevertheless. Thus, a health insurance policy covers your medical expenses and gives you financial relief."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        quotes={"Get Free Quotes"}
        quotes_link = {"https://health.analahinsurance.com/input/basic-details"}
      />
    </div>
  );
}

export default HealthInsurance;
