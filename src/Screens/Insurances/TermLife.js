import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function TermLife() {
  const benefits = [
    {
      id: 1,
      desc_head : "Death Benefit: ",
      desc: "When an insured person passes away during the policy's term, the nominee will receive the total payout as either a lump sum amount or a combination of a lump sum and monthly payments.",
    },
    {
      id: 2,
      desc_head : "",
      desc: "Lump sum amount to cover all immediate financial obligations.",
    },
    {
      id: 3,
      desc_head : "Tax Benefit: ",
      desc: "The premiums paid for Term Life Insurance are tax free under section 80(C), up to an amount of INR 150,000. Claim Reimbursement: Coverage for expenditures incurred for hospitalization brought on by a medical.",
    },
    {
      id: 4,
      desc_head : "Rider Benefits: ",
      desc: "Rider Benefits: Riders are a crucial addition to the basic plan offering and a choice to customize the coverage to the life insured as per their needs.",
    },
    {
      id: 5,
      desc_head : "Accidental Death Benefit rider: ",
      desc: "In the event that a death is caused by an accident, the accidental death benefit rider provides an additional amount assured over the base plan offering.",
    },
    {
      id: 6,
      desc_head : "Accidental Disability rider: ",
      desc: "When any disability occurs due to an accident, the Accidental Disability rider offers an immediate lump sum payment. ",
    },
    {
      id: 7,
      desc_head : "Critical Illness rider: ",
      desc: "If the life insured is diagnosed with one of the critical illnesses mentioned in the rider, the Critical Illness rider offers an additional sum assured over what the base plan offers.",
    },
    {
      id: 8,
      desc_head : "Waiver of Premium rider: ",
      desc: "In the event that the life insured is diagnosed with a critical illness or a permanent disability, the Waiver of Premium rider offers a waiver of all policy premiums.",
    },
    {
      id: 9,
      desc_head : "Option to increase Death Benefit: ",
      desc: "Certain plans feature provisions where the life insured can extend the life cover at important events in life such as marriage, birth of a child etc.",
    },
  ];

  const keyTerms = [
    {
      id: 1,
      desc_head : "",
      desc: "Total Payout of each plan",
    },
    {
      id: 2,
      desc_head : "",
      desc: "Premium amount paid for desired Total Payout",
    },
    {
      id: 3,
      desc_head : "",
      desc: "Policy term offered",
    },
    {
      id: 4,
      desc_head : "",
      desc: "High claim settlement ratio",
    },
    {
      id: 5,
      desc_head : "",
      desc: "Riders offered with the plan",
    },
  ];
  return (
    <div>
      <PolicyDetails
        head={"Term Life Insurance"}
        benefit_head = {"Benefits of Term Life Insurance"}
        key_feature_head = {"Key Terms to consider while evaluating Term Life Insurance plans:"}
        subhead={"Buy a Term Life Insurance Plan in a few simple steps."}
        list1={"Compare Term Life Insurance plans"}
        list2={"Instant policy issuance"}
        list3={"Free claims assistance"}
        list4={"Get plan recommendation in seconds"}
        img={"Term_ins"}
        Ins_Text_1 ={"Don't Wait,"}
        Ins_Text_2 ={"Get Insured Now!"}
        Ins_Text_3 = {""}
        description_1={
          "Term Insurance, commonly known as a Term Life Insurance plan, offers high life cover for a relatively low premium. For a set amount of premium throughout the course of the policys Term, a Term Plan provides financial coverage to the policyholders family. The chosen cover amount is paid to the nominee as a death benefit in the unfortunate event that the insured person passes away during this period."
        }
        benefits={benefits}
        keyTerms={keyTerms}
        quotes = {"Get Free Quotes"}
        quotes_link = {"https://term.analahinsurance.com/"}
      />
    </div>
  );
}

export default TermLife;
