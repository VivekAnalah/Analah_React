import React from "react";
import PolicyDetails from "../../Components/PolicyDetails";

function RetirementInsurance() {
  const benefits = [
    {
      id: 1,
            desc_head : "Power of compounding: ",

      desc: "By investing in a retirement plan at an earlier stage, you give your money more time to grow. The interest earned over time gets reinvested to generate more returns. This is the power of compounding. This helps you accumulate a larger retirement fund.",
    },
    {
      id: 2,
            desc_head : "Safety net against unforeseen events: ",

      desc: "Retirement plans act as a safety net to protect you from unforeseen circumstances. They not only help you prepare for financial emergencies but also provide a financial support in the event of critical illnesses or permanent disability resulting from an accident.",
    },
    {
      id: 3,
            desc_head : "Assured regular lifelong income: ",

      desc: "Retirement plans offer the option of receiving a regular pension for you and your spouse throughout your lifetime.",
    },
    {
      id: 4,
            desc_head : "Financial security for your children in the event of your absence: ",

      desc: "Certain retirement plans provide a lump-sum amount to your children in the absence of you and your spouse. This enables you to leave behind a legacy for your children.",
    },
  ];
  const why = [
    {
        id: 1,
              desc_head : "Increasing the number of retirement years: ",

        desc: "As the average life expectancy in India continues to rise, it has become crucial to plan for a longer retirement. Life expectancy figures reflect the average lifespan of an individual. In India, the average life expectancy for a 60-year-old is 18.02 years, meaning that the average person lives up to 78 years of age. Therefore, it is essential to start planning well in advance to maintain your lifestyle and cover expenses for this extended period.",
      },
      {
        id: 2,
              desc_head : "Medical Expenditure: ",

        desc: "As you age, one of the most significant concerns is the possibility of unexpected medical expenses. Managing these expenses can be challenging due to the rising costs of healthcare, unless you plan for them in advance.",
      },
      {
        id: 3,
              desc_head : "Financial freedom in post-retirement years: ",

        desc: "Retirement should be a time to live life on your own terms. Unfortunately, over 65%* (As per the ‘Situation Analysis of the Elderly in India’ report of Ministry of Statistics and Programme Implementation), of individuals over the age of 60 depend on others for their daily expenses. This underscores the importance of planning for retirement to achieve financial independence and ensure you can maintain your desired lifestyle.",
      },
      {
        id: 4,
              desc_head : "Continuous Income: ",

        desc: "Pension funds in India can provide a reliable source of income after retirement in the form of an annuity, ensuring that your monthly expenses are taken care of.",
      },

  ]

  const keyTerms = [false];

  return (
    <div>
      <PolicyDetails
        head={"Retirement Plans"}
        benefit_head = {"Benefits of Retirement Plans:"}
       
        subhead={"Attractive returns that will help you retire with dignity."}
        list1={"Reliable Retirement Income"}
        list2={"Tax Free Regular Income"}
        list3={"Compound Interest"}
        list4={"Flexibility to meet Individual Needs and Investment Goals"}
        img={"Retire_ins"}
        Ins_Text_1={" Get retirement ready with our plans and"}
        Ins_Text_2={"start living the dream!"}
        Ins_Text_3={""}
        description_1={
          "Retirement plans fall under the life/annuity category of insurance and are tailored to cater to your post-retirement requirements, including medical and living expenses. It's important to maintain your standard of living after retirement, considering the rising inflation and additional expenses. Retirement also brings dreams of traveling, pursuing hobbies, and starting new ventures. Planning in advance and choosing the right retirement plan can ensure financial preparedness for your golden years. The funds accumulated in a pension plan grow over time, as the investment grows, so does the individual's retirement savings, providing them with a significant sum of money upon retirement."
        }
        benefits={benefits}
        why = {true}
        whyText = {why}
        homeInsurance={true}
        RetirementInsurance={true}
        keyTerms={keyTerms}
        helping_verb = {"are"}
        quotes = {"Get Free Quotes"}
      />
    </div>
  );
}

export default RetirementInsurance;
