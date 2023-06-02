import { Grid, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link, useLocation } from "react-router-dom";
import { Cheacked_Context } from "../Context/Cheacked_Context";


function Disclaimer() {
  const {cheacked_disclaimer,cheacked_T_C,cheacked_privacy,Set_T_C } = useContext(Cheacked_Context);
  const matches = useMediaQuery("(max-width:500px)");
  

  return (
    <div>
      <Header raiseClaim={true} />

      <div className=" ml-[5%] mr-[5%] mx-auto">
        <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
        <div className="tab_container" id="privacy">
          <input id="tab1" type="radio" name="tabs" defaultChecked={false} />
          <label for="tab1" className="tab1 ">
          <Link to={"/privacy-policy"} >Privacy Policy</Link>
          </label>

          <input id="tab2" type="radio" name="tabs" defaultChecked={true}/>
          <label for="tab2" className="tab2">
          <Link to={"/disclaimer"} > Disclaimer </Link>
          </label>

          <input id="tab3" type="radio" name="tabs" defaultChecked={false}/>
          <label for="tab3" className="tab3">
          <Link to={"/term-condition"} >Terms & Conditions </Link>
          </label>

          <section id="content1" className="tab-content">
            <p className="text-justify">
              {" "}
              We, Analah Insurance Broking Private Limited, its partners,
              directors, employees (hereafter jointly and severally referred to
              as “We”) maintain, operate and own the website accessible at the
              URL www.analahinsurance.com, including online platform(s) (the
              “Website).
              <p>
                We recognize the importance of maintaining Your privacy and are
                committed to maintain the confidentiality, integrity and
                security of all information of our Users.
              </p>
              <p>
                The term "User" for the purposes of this Privacy Policy shall
                mean You, in the capacity of an individual, a guest user,
                browser and/ or representative of an entity, who visits,
                accesses, uses, downloads, deals with, avails Products &
                Services and/ or transacts through and/or a client registered
                with completion of the KYC process. For the purpose of this
                Policy, wherever the context so requires "You" or "Your" shall
                mean User and the term "We", "Us", "Our" shall mean Company.
                This Privacy Policy is applicable to You as a User of the Analah
                Insurance Products and Services on the Platform.
              </p>
              <p>
                This Privacy Policy describes how We collect and handle certain
                information it may collect and/or receive from You via the use
                of this Website. Please see below for details on what type of
                information We may collect from You, how that information is
                used in connection with the services offered through our Website
                and relevant information shared with our authorized business
                partners only for the purpose of policy solicitation process,
                pre/post-sale servicing, claim servicing and providing You any
                other services as permissible under applicable laws. This
                Privacy Policy applies to current and former visitors to our
                Website and our customers. By visiting and/or using our Website,
                You agree to this Privacy Policy.
              </p>
              <p>
                By using the Website and/or registering yourself at
                www.analahinsurance.com, You authorize Analah Insurance Broking
                Private Limited (including its authorized representatives and
                its business partners) (Analah Insurance/Company) to contact You
                via email or phone call or sms and offer You our services for
                the product You have opted for, imparting product knowledge,
                offer promotional offers running on the Website and offers by
                its authorized business partners and associated third parties
                (to the extent permissible), for which reasons Your information
                may be collected in the manner as detailed under this Policy.
                You hereby agree that you authorize Us to contact You for the
                above mentioned purposes even if You have registered yourself
                under DND or DNC or NCPR service(s). Your authorization, in this
                regard, shall be valid as long as Your account is not
                deactivated by either You or Us.
              </p>
              <p>
                <b>Controllers of Personal Information</b>
              </p>
              <p>
                Your personal data will be stored and collected by Analah
                Insurance Broking Private Limited.
              </p>
              <p>
                <b>Purposes of collection of Your Data</b>
              </p>
              <p>
                The Website collects Your information when You register for an
                account, when You use its products or services, visit its
                Website's pages or when an employer organization shares its
                employee information. When You register on the Website, you are
                asked to submit certain information which may be personal to You
                such as first name, last name, state and city of residence,
                email address, mobile number, date of birth, financials, know
                your customer and medical records etc. Once You register on the
                Website and sign in You are not anonymous to Us. Also, You are
                asked for your contact number during registration and may be
                sent SMSs, notifications about our services to your wireless
                device. Hence, by registering You authorize Us to send texts and
                email alerts to You with your login details and any other
                service requirements, including promotional emails and SMSs.
              </p>
              <p>
                <b>We use Your information in order to:</b>
              </p>
              <p>
                <b>Respond to queries or requests submitted by You.</b>
              </p>
              <ul>
                <li>Process orders or applications submitted by You.</li>
                <li>
                  Administer or otherwise carry out our obligations in relation
                  to any agreement with Our authorized business partners in
                  connection with Our business operations and functions for the
                  purpose of insurance solicitation, providing pre/post sale
                  services, claims servicing and providing You any other
                  services as permissible under applicable laws.
                </li>
                <li>
                  Anticipate and resolve problems with any services supplied to
                  You.
                </li>
                <li>
                  Offer group insurance cover and wellness corner
                  offerings/health and wellness related information to Your
                  employer organization.
                </li>
                <li>
                  To send You information about promotions or offers from
                  Insurance Companies to the extent permissible under applicable
                  laws. We might also tell You about new features or products.
                </li>
                <li>
                  To make our Website and the services offered better. We may
                  combine information we get from You with information about You
                  we get from our business partners or third parties as
                  permissible under applicable laws.
                </li>
                <li>
                  To send you notices, communications, offer alerts relevant to
                  Your use of the Services offered on this Website.
                </li>
                <li>
                  Third parties and outsourced entities for the reasons
                  consistent with the purposes for which the information was
                  collected and/or other purposes as per applicable law.
                </li>
                <li>
                  Where we need to comply with a legal obligation as per
                  applicable legal and regulatory framework.
                </li>
                <li>As otherwise provided in this Privacy Policy.</li>
              </ul>
              <p>
                Some features of this Website or our Services will require you
                to furnish Your personally identifiable information as provided
                by You under your account section on our Website.
              </p>
              <p>
                <b>Information Sharing and Disclosure</b>
              </p>
              <p>
                <b>
                  We may share Information submitted by You on the Website to
                  any third party/service provider/business partner without
                  obtaining Your prior consent in the following limited
                  circumstances:
                </b>
              </p>
              <ul>
                <li>
                  When it is requested or required by law or by any court or
                  governmental agency or authority to disclose, for the purpose
                  of verification of identity, or for the prevention, detection,
                  investigation including cyber incidents, or for prosecution
                  and punishment of offenses. These disclosures are made in good
                  faith and belief that such disclosure is reasonably necessary
                  for enforcing these Terms and Conditions; for complying with
                  the applicable laws and regulations.
                </li>
                <li>
                  Analah Insurance shall transfer information about You in case
                  Analah Insurance is acquired by or merged with another
                  company.
                </li>
                <li>
                  Where We need to comply with a legal obligation as per
                  applicable legal and regulatory framework.
                </li>
                <li>
                  We may share your information with Service Providers to
                  monitor and analyze the use of our Service, to show
                  advertisements to You to help support and maintain our
                  Website, to contact You, to advertise on third party websites
                  to You after You visited the Website or for payment
                  processing.
                </li>
                <li>
                  We may share your information with our affiliates, in which
                  case we will require those affiliates to honor this Privacy
                  Policy. Affiliates include our parent company and any other
                  subsidiaries, joint venture partners or other companies that
                  we control or that are under common control with us.
                </li>
              </ul>
              <p>
                <b>We Collect Cookies</b>
              </p>
              <p>
                A cookie is a piece of data stored on the User's computer tied
                to information about the User. We may use both session ID
                cookies and persistent cookies. For session ID cookies, once You
                close Your browser or log out, the cookie terminates and is
                erased. A persistent cookie is a small text file stored on Your
                computer’s hard drive for an extended period of time. Session ID
                cookies may be used by PRP to track User preferences while the
                User is visiting the Website. They also help to minimize load
                times and save on server processing. Persistent cookies may be
                used by PRP to store whether, for example, You want your
                password remembered or not, and other information. Cookies used
                on the PRP website do not contain personally identifiable
                information.
              </p>
              <p>
                <b>Log Files</b>
              </p>
              Like most standard websites, We use log files. This information
              may include internet protocol (IP) addresses, browser type,
              internet service provider (ISP), referring/exit pages, platform
              type, date/time stamp, and number of clicks to analyze trends,
              administer the site, track User's movement in the aggregate, and
              gather broad demographic information for aggregate use. We may
              combine this automatically collected log information with other
              information We collect about You. We do this to improve services
              We offer to You, to improve marketing, analytics or site
              functionality.
              <p>
                <b>Opt Out</b>
              </p>
              <p>
                Please note that in the event You do not agree to any or all the
                clauses of the Privacy Policy and other Policies or in case You
                do not wish to provide any information, including personal or
                personally identifiable information, then We may not be in a
                position to offer You all or some of the products/services,
                including without limitation, certain features of the Website,
                and may even restrict You (partially or fully) from accessing
                the Website. Further, if You do not agree to this Privacy Policy
                and other Policies, and/ or product specific Terms and
                Conditions, You may also not register on the Website, not avail
                Our services and kindly deregister from the Website and stop
                using Our products/services. We shall not be held responsible
                and/ or liable for any denial of service due to the User not
                providing the required information.
              </p>
              <p>
                <b>Email Opt Out</b>
              </p>
              <p>
                If You are no longer interested in receiving email announcements
                and other marketing information from Us, please email your
                request at: <a href="mailto:contactus@analahinsurance.com"  className="text-[#2A44A9] underline decoration-1">contactus@analahinsurance.com</a>. Please note that it
                may take about 10 days to process Your request.
              </p>
              <p>
                <b>Security</b>
              </p>
              <p>
                We employ appropriate technical and organizational security
                measures at all times to protect the information We collect from
                You. We use multiple electronic, procedural, and physical
                security measures to protect against unauthorized or unlawful
                use or alteration of information, and against any accidental
                loss, destruction, or damage to information. However, no method
                of transmission over the Internet, or method of electronic
                storage, is 100% secure. Therefore, We cannot guarantee its
                absolute security. Further, You are responsible for maintaining
                the confidentiality and security of Your login id and password,
                and may not provide these credentials to any third party.
              </p>
              <p>
                <b>Retention of Your Personal Data</b>
              </p>
              <p>
                We will retain Your personal data only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your personal data to the extent necessary
                to comply with our legal obligations (for example, if We are
                required to retain Your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
                We will also retain usage data for internal analysis purposes.
                Usage data is generally retained for a shorter period of time,
                except when this data is used to strengthen the security or to
                improve the functionality of our service, or We are legally
                obligated to retain this data for longer time periods.
              </p>
              <p>
                <b>Links to Other Websites</b>
              </p>
              <p>
                There might be other sites linked to www.analahinsurance.com.
                Personal information that You provide to those sites are not our
                property. These affiliated sites may have different privacy
                practices and we encourage You to read the privacy policies of
                these websites when you visit them.
              </p>
              <p>
                <b>Minimum Age</b>
              </p>
              <p>
                You must be a natural person who is at least 18 (eighteen) years
                of age. You must not misrepresent Your identity. The right to
                use the Website is personal to the User and is not transferable
                to any other person or entity. We presume adequate and lawful
                parental consent in case the Personal Information is shared by a
                User under the age of 18 years.
              </p>
              <p>
                <b>Changes in this Privacy Policy</b>
              </p>
              <p>
                We reserve the right to change this policy from time to time, at
                Our sole discretion. We may update this Privacy Policy to
                reflect changes to Our information practices. We encourage You
                to periodically review.
              </p>
              <p>
                <b>Data Grievance Officer</b>
              </p>
              <p>
                In case You have any grievances with respect to in accordance
                with applicable law on Information Technology and rules made
                there under, the name and contact details of the Grievance
                Officer are provided below: (name)
              </p>
              <p>
                <b>Contact Us</b>
              </p>
              <p>
                <b>Address:</b> 1407, B wing, Parinee Crescenzo, G Block BKC,
                Mumbai, Maharashtra - 400051
              </p>
              <p>
                <b>Mobile:</b> <a href="tel:+91 99208 78181" className="text-[#2A44A9] underline decoration-1">+91 99208 78181</a>
              </p>
              <p>
                <b>Email:</b>  <a href="mailto:contactus@analahinsurance.com" className="text-[#2A44A9] underline decoration-1">contactus@analahinsurance.com</a>
              </p>
            </p>
            <p>
              If You have questions, concerns, or suggestions regarding our
              Privacy Policy, please feel free to reach out to Us at <a href="mailto:contactus@analahinsurance.com"  className="text-[#2A44A9] underline decoration-1">  contactus@analahinsurance.com</a>.
            </p>
            <b>Last updated on: 26th December 2022</b>
          </section>

          <section id="content2" className="tab-content text-justify">
            <p>
              Analah Insurance aims to offer transparent and unbiased
              information regarding our insurance products and services. All the
              information provided is generic in nature. We strive to provide
              accurate, correct and unbiased information to the best of our
              ability. We disclaim all liability for any discrepancies or
              omissions in the data published or presented on our website or
              platform.
            </p>
            <p>
              We do not intend to violate any ancillary or intellectual property
              rights. Information provided on our website or platform is subject
              to change at any time without any prior notice. However, any
              modifications to public utilities will be announced on our website
              or platform.
            </p>
            <p>
              Despite our best efforts, the content uploaded on the website may
              not always meet our high standards for quality, clarity, and
              accuracy. Analah Insurance is not legally responsible for the same
              in any matter whatsoever.
            </p>
            <p>
              Any loss, harm, or damage resulting from the use of information
              from the website is not the responsibility of Analah Insurance’s
              employees, partners, group entities or affiliates. Customers
              should not rely solely on the information published or presented
              and should perform personal due diligence or consult with an
              independent professional third-party advisor prior to making any
              decisions.
            </p>
            <p>
              Insurance products are subject matter of solicitation and market
              risks. It is solely the responsibility of the customer to
              understand the risks and limitations of insurance policies. Analah
              Insurance under no circumstance, form or manner, takes any
              liability in such cases. We strongly recommend you to read the
              subject and offer documents carefully.
            </p>
            <p>
              It is agreed upon by both parties that customers' use of the
              website or platform is done solely at the discretion and risk of
              the customer.
            </p>
            <p>
              You hereby acknowledge and agree that you shall be solely
              responsible for the authenticity of the documents you have
              uploaded on the website. Analah Insurance is acting only as a
              facilitator and the acceptance or rejection of a claim is the sole
              discretion of the insurer.
            </p>
            <p>
              Users of this website or platform and every third party is hereby
              informed that the owners of this website, viz., Analah Insurance
              Broking Private Limited, are not the agents, corporate agents,
              related party or intermediaries of the insurers, whose products
              are dealt with on this website. We are also not the sub-agents or
              sub-intermediaries of the agents and intermediaries of the
              respective insurers.
            </p>
            <p>
              We make every effort to ensure complete accuracy about
              product/policy comparisons, quotes, features etc. based on the
              information provided by insurers. Analah Insurance Broking Private
              Limited, its group companies, directors, shareholders, officers,
              partners, employees and analahinsurance.com are in no way
              responsible or liable for one for his/her investment decision, and
              every prospect/investor/policyholder shall be solely responsible
              for the consequences of his/her decision.
            </p>
            <p> <b>Last updated on: 26th December 2022</b> </p>
          </section>

          <section id="content3" className="tab-content text-justify">
            <p>
              Welcome to www.analahinsurance.com website (the "Website"). Analah
              Insurance provides its products and services to you subject to the
              following conditions. Before you may use the Website, you must
              read and accept all of the terms and conditions in, and linked to,
              these Terms & Conditions, the linked Privacy Policy and other
              Legal and Admin Policies.
            </p>
            <p>
              All users should read the Terms & Conditions and also access and
              read the linked information, incorporated and made part of these
              Terms & Conditions. The use of any functionality of the Website
              constitutes acceptance of these Terms & Conditions. If you do not
              agree to be bound by these Terms & Conditions and other policies,
              then you are not permitted to use the Website in any way.
            </p>
            <p>
              We reserve the right, at any time, at our sole discretion, to
              change or otherwise amend the Terms & Conditions and other
              policies without prior notice. By continuing to access or use this
              Website, you signify your acceptance of the updated or amended
              Terms & Conditions.
            </p>
            <p>
              You acknowledge that Analah Insurance reserves the right to
              terminate your access to the Website and/or your account
              ("collectively referred to as Access") in the event that you fail
              to comply (intentionally or unintentionally) with the Privacy
              Policy, Terms of Conditions, and other Legal and Admin Policies
              for access or usage of the Website.
            </p>
            <p>
              By accepting these Terms & Conditions, you formally authorize
              Analah Insurance to act on your behalf while dealing with the
              insurer and to inform you of the grant of a cover once the
              insurance has been implemented. Unless you and Analah Insurance
              agree differently, this mandate will be in effect for a period of
              12 months. Please note that no mandate is required for individual
              policies or pre-underwritten policies.
            </p>
            <p>
              <b>1. Products & Services</b>{" "}
            </p>
            Analah Insurance provides users with access to information primarily
            regarding Financial and Insurance products and services, including
            but not limited to General Insurance, Life Insurance products and
            related services (including but not limited to renewals) (the
            “Service”). It is your responsibility to gain access to the Website,
            and doing so can require paying third-party fees (such as internet
            service provider or airtime charges). Additionally, you are in
            charge of providing and maintaining all equipment needed to access
            the Website.
            <p></p>
            <p>
              You hereby agree that you are interested in using and/or
              purchasing the Service(s) that you have chosen by using this
              Website and providing your personal/contact information. You
              hereby consent to Analah Insurance contacting you by phone or
              electronic means in order to ascertain your interest in the chosen
              product(s) and service(s) (such as renewals, reminders, etc.) and
              to meet your needs. You also consent to Analah Insurance’s right
              to provide your contact information to its affiliates and
              partners, who may then get in touch with you via email, phone, or
              SMS for information or to make a sale. You consent to receiving
              email or SMS messages from Analah Insurance with promotional
              content and/or exclusive offers.
            </p>
            <p>
              <b>2. License & Website Access</b>
            </p>
            <p>
              {" "}
              You are given a limited license by Analah Insurance to use the
              Website and Service for your own personal use. This license does
              not include copying or downloading any content of the Website for
              the benefit of another person, vendor or any third party; caching,
              unauthorized hypertext links to the Website and the uploading,
              posting or transmitting any content that you do not have the right
              to make available; uploading, posting, or transmitting any
              material that contains software viruses or any other computer
              code, files or programs designed to interrupt, destroy or limit
              the functionality of any computer software or hardware or
              telecommunications equipment; any action that imposes or may
              impose (in Analah Insurance’s sole discretion) an unreasonable or
              disproportionately large load on Analah Insurance’s
              infrastructure; or any use of data mining, robots, or similar data
              gathering and extraction tools.
            </p>
            <p>
              {" "}
              Any unauthorized or unlawful use by you shall terminate the
              permission or license granted to you by Analah Insurance. By using
              or continuing to use the Website, you agree not to:
              <ul>
                <ol>
                  (i) use the information on this Website for any kind of
                  commercial purpose;
                </ol>

                <ol>
                  (ii) make any transaction that is speculative, deceptive or
                  fraudulent in nature;
                </ol>

                <ol>
                  (iii) access, monitor, or copy any material or information
                  from the Website using any robot, spider, scraper, or other
                  automated device without our express written permission;
                </ol>

                <ol>
                  (iv) disregard any robot exclusion headers on the Website that
                  include limitations, or skip over or work around any other
                  security or access control measures put in place;
                </ol>

                <ol>
                  (v) take any action that places, or could place, in our
                  opinion, an unreasonably high or unreasonable burden on our
                  infrastructure;
                </ol>

                <ol>
                  (vi) without our prior written consent, deep-link to any area
                  of the Website (including, but not limited to, the purchase
                  path for any service) for any purpose; or
                </ol>

                <ol>
                  (vii) without our prior written consent, you may not "frame,"
                  "mirror," or otherwise integrate any of this Website into
                  another website.
                </ol>
              </ul>
            </p>
            <p>
              {" "}
              <b>3. Minimum Age</b>
            </p>
            <p>
              {" "}
              Minors under the age of 18 are not permitted to use the Service,
              and Analah Insurance reserves the right to suspend or remove any
              user from the system for any reason. Users can only have one
              active account at a time. Users are also forbidden from trading,
              selling, or otherwise transferring their accounts to another
              person. You cannot use the Website if you do not meet the
              requirements.
            </p>
            <p>
              {" "}
              <b>4. Account</b>
            </p>
            <p>
              {" "}
              In exchange for using the Website, you represent that you are of
              legal age to form a contract, are not a person barred from
              receiving services under the laws of India or another applicable
              jurisdiction, and will only use the Website to make lawful
              purchases for you or another person on whose behalf you are
              legally able to act (and will make sure they are aware of the
              Terms & Conditions and other Legal & Admin Policies that apply to
              them) (including all rules and restrictions applicable thereto).
              As requested by the Website, you also agree to give information
              about yourself that is truthful, accurate, current, and complete.
              If Analah Insurance has reasonable grounds to suspect that any
              information provided by you is false, inaccurate, out-of-date, or
              incomplete, or if it becomes false, inaccurate, out-of-date, or
              incomplete, Analah Insurance has the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Website (or any portion thereof). If you use the Website, you are
              in charge of protecting the privacy of your password and account
              information as well as limiting access to your computer. You agree
              to being held accountable for all actions taken using your account
              or password. As a result, we urge you to log out of your account
              at the conclusion of each session. You agree to immediately alert
              Analah Insurance of any unauthorized use of your account or any
              other breach of security. In its sole discretion, Analah Insurance
              maintains the right to deny service, delete or edit content, and
              cancel accounts. Despite the foregoing, we reserve the right to
              refuse access to the Website and the services we provide to
              anybody at any time for any reason, including but not limited to a
              violation of the Terms & Conditions, Privacy Policy, or other
              Legal & Admin Policies, without prior notice. You will be subject
              to additional terms and conditions when you purchase the Services
              you select. Please read these additional terms and conditions
              carefully. You agree to abide by the terms and conditions of any
              service provider you choose to do business with, including, but
              not limited to, paying all amounts when they are due and abiding
              by the service provider's guidelines and limitations on the use of
              its goods and/or services. You acknowledge that violating any of
              these service providers' policies could lead to the cancellation
              of your purchase(s), denial of access to the relevant service(s),
              forfeiture of any payments made for those services, and/or a
              charge to your account for any expenses we incur as a result of
              such violation.
            </p>
            <p>
              <b>5. Material Submitted</b>
            </p>
            <p>
              Any materials you make available through the Website do not belong
              to Analah Insurance. Such materials may be included in the Service
              in whole, in part, or in a modified manner, at Analah Insurance’s
              sole discretion. You grant Analah Insurance a perpetual,
              irrevocable, non-terminable, worldwide, royalty-free, and
              non-exclusive license to use, copy, distribute, publicly display,
              modify, create derivative works from, and sub license such
              materials or any portion of such materials with respect to the
              materials you submit or make available for inclusion on the
              Website (as well as use the name that you submit in connection
              with such submitted content). You hereby represent, guarantee, and
              covenant that any of the materials you provide do not contain
              (including, but not limited to, text, images, music or video) to
              which you do not fully own the authority to grant the license set
              out in this Section 4. Any content posted or submitted by you is
              at your own risk, for which we neither accept responsibility nor
              obligation. We have no obligation to post your comments; we
              reserve the right in our absolute discretion to determine which
              comments are published on the Website. Please do not provide us
              with any submitted content if you do not agree to these terms and
              conditions. You agree that the content you submit or upload is
              solely your responsibility.
            </p>
            <p>
              {" "}
              You are prohibited from posting or transmitting to or from this
              Website:
            </p>
            <p>
              <ul>
                <ol>
                  {" "}
                  (i) any prohibited, threatening, libelous, defamatory,
                  obscene, pornographic, or otherwise objectionable information
                  or anything that would violate one's right to privacy or
                  publicity or violate any law;
                </ol>
                <ol>
                  {" "}
                  (ii) any commercial material or content (including, but not
                  limited to, solicitation of funds, advertising, or marketing
                  of any good or services); and
                </ol>
                <ol>
                  {" "}
                  (iii) any material or content that violates any copyright,
                  trademark, patent, or other proprietary rights by
                  infringement, misappropriation, or other means. Any violations
                  of the aforementioned limits or any other harm brought on by
                  your posting of content to this Website will be solely your
                  responsibility.
                </ol>
              </ul>
            </p>
            <p>
              <b>6. Disclaimer of Warranty and Liability</b>
            </p>
            <p>
              There may be errors, inconsistencies or pricing errors in the
              Products and Services, and content published on the Website. We
              expressly reserve the right to correct any pricing errors on the
              Site/Mobile Application and/or on pending reservations made under
              an incorrect price. We do not guarantee the accuracy of and
              disclaim all liability for any errors or other inaccuracies
              relating to the information and description of the content,
              products, and services. Analah Insurance reserves the right to
              correct any pricing errors or other information on the Website on
              pending reservations made under an incorrect price.
            </p>
            <p>
              The inclusion or offering of any Products or Services on the
              Website does not constitute any endorsement or recommendation of
              those Products or Services by Analah Insurance, and makes no
              representation regarding the suitability of the information,
              Software, Products, and Services contained on the Website for any
              purpose. All such information, Software, Products and Services are
              all provided "AS IS" and without any kind of warranty.
            </p>
            <p>
              Analah Insurance makes no assurances regarding the absence of
              viruses or other harmful components on this Website, in its
              services, or in any email sent by Analah Insurance, its
              affiliates, or their respective or connected service providers.
              Analah Insurance hereby disclaims all warranties and conditions
              with regard to this information, software, products, and services,
              including all implied warranties and conditions of
              merchantability, fitness for a particular purpose, title, and no
              infringement.
            </p>
            <p>
              {" "}
              The service providers offering services on the Website are
              independent affiliates, and Analah Insurance is not responsible
              for any negligent or breaches committed by any such service
              providers, or for any resulting property damage, personal injury,
              wrongful death, or other costs or damages. In the event of any
              delay, cancellation, strike, force majeure, or other circumstances
              beyond our direct control, Analah Insurance and its affiliates
              shall have no liability and shall not be obligated to provide a
              refund. We shall also have no liability for any additional
              expenses, delays, or omissions of any governmental or other
              authority.
            </p>
            <p>
              {" "}
              In no event will Analah Insurance and/or its affiliates be liable
              for any direct, indirect, punitive, incidental, special, or
              consequential damages arising out of, or in any way associated
              with your use of this Website, or with any delay or inability to
              access this Website (including, but not limited to, your reliance
              upon opinions appearing on this Website; any computer viruses,
              information, software, linked sites, products, and services
              obtained through this Website; or otherwise arising out of the
              access to, display of or use of this Website) whether based on a
              theory of negligence, contract, tort, strict liability, or
              otherwise, and even if Analah Insurance and/or its affiliates
              their respective service providers have been advised of the
              possibility of such damages.
            </p>
            <p>
              <b>
                {" "}
                7. Online Impressions, Availability, and Click-through
                Disclaimer
              </b>
            </p>
            <p>
              {" "}
              There are no guarantees and no warranties regarding the online
              accessibility, impressions, and click-through of
              www.analahinsurance.com, its web pages, and any materials,
              information, links, or content presented on the web pages at
              www.analahinsurance.com, in addition to the other disclaimers and
              limitations discussed in this notice. Online access to
              analahinsurance.com, its web pages, and any information, links, or
              content provided on those web pages may be unavailable for online
              access at any time. Before posting any advertising-related
              information, links, content, banners, or graphics on
              www.analahinsurance.com, Analah Insurance must first approve the
              sponsors and advertising, if any and if permitted. Analah
              Insurance reserves the right to approve or disapprove any sponsor
              for advertising or any advertising for any reason.
            </p>
            <p>
              <b>8. Refund & Cancellation Terms</b>
            </p>
            <p> <b>(a) Cancellation and Chargebacks - Free look period</b> </p>
            <p>
              {" "}
              You have the right to cancel your insurance policy in accordance
              with IRDAI rules and regulations within 15 (fifteen) days of the
              date of (online) receipt of the insurance policy (referred to as
              the "Free look period"), and your premium payment will be refunded
              in accordance with the applicable process and procedures followed
              by the insurer. Only Life and Health Insurance plans are eligible
              for this Free look feature, and only under particular
              IRDAI-specified terms and conditions. All of our customers are
              urged to thoroughly read the insurance policy document and use the
              Free look feature in case the terms and conditions don't align
              with their insurance requirements.
            </p>
            <p>
              {" "}
              Further, you understand that if you request a cancellation within
              the Free look period, the policy is canceled and your entire
              premium is refunded to you, subject to deduction of:
              <ul>
                <ol>(i) fees of any medical tests you had done; </ol>
                <ol>
                  {" "}
                  (ii) fees for administrative and service costs, such as stamp
                  duty etc. and;
                </ol>
                <ol>
                  {" "}
                  (iii) charges for mortality for the time period the policy was
                  in effect. Please note that it is the sole discretion of the
                  insurer to make such a deduction.
                </ol>
                <ol> </ol>
              </ul>
            </p>
            <p>
              {" "}
              According to the IRDAI's rules and regulations, the insurer is
              solely responsible for making all payments related to refunds as
              described in this paragraph 1. You are aware that Analah Insurance
              is merely serving as a facilitator and helping its clients receive
              prompt refunds.
            </p>
            <p>
              <b>(b) Chargebacks</b>
            </p>
            <p>
              {" "}
              You (cardholder) have the right to dispute a transaction made
              through the Website and submit a Chargeback to your issuing bank
              to have that transaction reversed. Chargeback permits transactions
              to be reversed by you under specific conditions, such as:
              <ul>
                <ol>
                  (i) alleged forgery of the card number, bank account, or other
                  details{" "}
                </ol>
                <ol>
                  {" "}
                  (ii) any charge or debit made on a card that has been listed
                  as a hot card or otherwise listed on the card association
                  warning bulletins (Visa, MasterCard, etc.)
                </ol>
                <ol> (iii) duplicate processing of the transaction; or</ol>
                <ol>
                  {" "}
                  (iv) for any other reasons in accordance with applicable rules
                  and guidelines issued by RBI, and card associations.
                </ol>
              </ul>
              <p>
                {" "}
                However, we reserve the right to refuse a Chargeback, including
                but not limited to, under the following circumstances:
              </p>
              <ul>
                <ol>
                  {" "}
                  (a) If your medical examinations or underwriting is ongoing
                  with your chosen insurer, not exceeding a period of 3 months
                  from the date of your insurance policy application.
                </ol>
                <ol>
                  {" "}
                  (b) In the event there is any delay caused on the part of the
                  insurer in conducting medical tests or during the process of
                  medical underwriting or issuance of insurance policy or any
                  service provided by the insurer in connection with the
                  insurance policy issuance, not exceeding a period of 3 months
                  from the date of your insurance policy application.
                </ol>
                <ol>
                  {" "}
                  (c) If the insurer rejects your application for insurance
                  coverage after your medical examination.
                </ol>
              </ul>
            </p>
            <p>
              {" "}
              For any claims, disputes, or proceedings that may arise in
              connection with Chargebacks that you initiate in the situations
              described in (a), (b), and (c) above, Analah Insurance shall not
              be liable to you in any form or manner whatsoever.
            </p>
            <p>
              <b>
                {" "}
                9. Proposal Form Terms (applicable for Health Insurance products
                only)
              </b>
            </p>
            <p>
              <ul>
                <ol>
                  {" "}
                  (i) You hereby declare, on your behalf and on behalf of all
                  persons proposed to be insured, that the statements, answers
                  and/ or particulars given by you are true and complete in all
                  respects to the best of your knowledge and that you are
                  authorized to propose on behalf of these other persons.
                </ol>
                <ol>
                  {" "}
                  (ii) You are aware that the information you submit will serve
                  as the foundation for the insurance policy, is subject to the
                  insurer’s board approved underwriting policy, and that the
                  policy wont go into effect until the entire amount of the
                  applicable premium has been paid.
                </ol>
                <ol>
                  {" "}
                  (iii) You further declare that you will notify in writing the
                  insurance company of any change occurring in the occupation or
                  general health of the person to be insured after the proposal
                  has been submitted but before the insurance company notifies
                  you of the risk acceptance.
                </ol>
                <ol>
                  {" "}
                  (iv) You agree that you consent that the insurance company may
                  obtain medical information about the person to be insured or
                  proposed from any doctor or hospital who / which has treated
                  the person at any time, as well as from any past or present
                  employer, if the information relates to anything that could
                  have an impact on the person's physical or mental health. The
                  insurance company may also obtain information from any insurer
                  to whom an application for insurance on the person to be
                  insured has been made for the purpose of underwriting the
                  proposal and / or claim settlement.
                </ol>
                <ol>
                  {" "}
                  (v) You permit Analah Insurance / insurance company permission
                  to share information about your proposal, including the
                  insured's medical data, with any Government or Regulatory
                  authority for the sole purpose of underwriting the proposal
                  and/or claims settlement.
                </ol>
                <ol>
                  {" "}
                  (vi) You agree and authorize the insurance company's
                  authorized representatives the right to speak with any
                  hospital or doctor you or any person who is or may be proposed
                  to be insured/insured has visited or may visit in the future
                  regarding any disease, illness, or injury in order to obtain
                  the medical information necessary for the policy's issuance or
                  claim settlement under this policy.
                </ol>
                <ol> </ol>
              </ul>
            </p>
            <p>
              <b> 10. You acknowledge and agree that:</b>
            </p>
            <p>
              {" "}
              As per section 41 of Insurance Act
              <ul>
                <ol>
                  {" "}
                  (i) No person shall allow or offer to allow, either directly
                  or indirectly, as an inducement to any person to take out or
                  renew or continue an insurance in respect of any kind of risk
                  relating to lives or property in India, any rebate of the
                  whole or part of the commission payable or any rebate of the
                  premium shown on the policy, nor shall any person taking out
                  or renewing or continuing a Policy accept any rebate, except
                  such rebate as may be allowed in accordance with the published
                  prospectuses or tables of the insurers.
                </ol>
                <ol>
                  {" "}
                  (ii) Provided that acceptance by an insurance agent of
                  commission in connection with a policy of life insurance taken
                  out by himself on his own life shall not be deemed to be
                  acceptance of a rebate of premium within the meaning of this
                  sub‑section if at the time of such acceptance the insurance
                  agent satisfies the prescribed conditions establishing that he
                  is a bona fide insurance agent employed by the insurer.
                </ol>
                <ol>
                  {" "}
                  (ii) Any person who fails to comply with the above
                  requirements, will be subject to a penalty which may extend to
                  rupees five hundred.
                </ol>
              </ul>
              <p></p>
            </p>
            <p> Refer:<a href="https://irdai.gov.in/document-detail?documentId=399200" target="blank" className="text-[#2A44A9] underline decoration-1" > https://irdai.gov.in/document-detail?documentId=399200</a>  </p>
            <p>
              <b>11. Customer Due Diligence (CDD)</b>
            </p>
            <p>
              You acknowledge and agree that before conducting any financial
              transaction through the Website, we may undertake client/customer
              due diligence measures and seek the mandatory information for KYC
              that you are required to provide as a customer, while facilitating
              your request for insurance requirements with the insurance
              company(ies), in accordance with applicable laws and rules.
            </p>
            <p>
              You hereby give your permission and authorize us to contact
              authorized entities to get your credit information as needed. We
              may also obtain sufficient information to establish, to our
              satisfaction or the insurance company’s satisfaction, any
              information on the identity of each new customer, and the nature
              of the intention of the insurance relationship between you and the
              insurance company(ies).
            </p>
            <p>
              You acknowledge and accept that you are responsible for ensuring
              that any payments for insurance premiums is remitted only from
              your bank account or a joint bank account in which you are a joint
              holder. You further acknowledge and accept that we can take
              enhanced due diligence measures (including any documentation) to
              satisfy us in regard to customer due diligence requirements in the
              event that payment for insurance premium is remitted through a
              bank account opened in the name of a third party (i.e., not being
              in your name).
            </p>
            <p>
              You further agree and acknowledge that all refunds will be
              processed by the insurance company(ies) to the bank account that
              was used to remit payment of the insurance premium in accordance
              with the demands and duties under the PMLA Act and Rules.
            </p>
            <p>
              <b>12. Laws</b>
            </p>
            <p>
              Analah Insurance is compliant as per the local, state and central
              laws. We aim to provide information under its control or
              possession or assistance to any Government authority that is
              legally authorized to investigate or protect cybersecurity
              activities, for the purposes of identity verification, or for the
              prevention, detection or prosecution or investigation of offenses
              under any law for the time being in force, or for cyber security
              incidents as soon as possible, but not later than 72 hours of the
              receipt of an order or as per the timelines specified by any
              government or regulatory order.
            </p>
            <p>
              Therefore, any order, notice, or direction issued by the
              Government, any competent authority, or a court of competent
              jurisdiction may be received and acknowledged by our Grievance
              Officer and our legal team. Analah Insurance does not represent
              that the contents of the Website are appropriate or readily
              available for use in other locations apart from its headquarters
              in Mumbai, India, where it manages and maintains the website. If
              you access the Website from another place, you are in charge of
              adhering to all local laws that may apply, including but not
              limited to export and import regulations of other nations.
            </p>
            <p>
              Unless otherwise specified, any marketing or promotional materials
              on this Website are only intended for use by individuals,
              companies, or other organizations based in India and adhere to all
              applicable laws at the time of use in India. Disputes if any shall
              be subject to the exclusive jurisdiction of Courts at Mumbai.
            </p>
            <p>
              {" "}
              <b>13. Limitation of Liability</b>
            </p>
            <p>
              You acknowledge and accept that Analah Insurance and its
              subsidiaries, affiliates, officers, employees, agents, partners,
              and licensors are not responsible for any direct, indirect,
              incidental, special, consequential, or exemplary damages that may
              result from the use of the Website, including but not limited to
              damages for loss of profits, goodwill, use, data, or other
              intangible losses (even if Analah Insurance has been advised of
              the possibility of such damages).
            </p>
            <p>
              If Analah Insurance or its affiliates are found liable for any
              loss or damage arising from or associated with any of the
              occurrences listed above, then Analah Insurance’s liability will
              never exceed the greater of
              <ul>
                <ol>
                  (i) the service fees you paid to Analah Insurance in
                  connection with such transaction(s) on this Website, or
                </ol>
                <ol>
                  (ii) INR 100 (Rupees One Hundred only), the limitation of
                  liability indicates how the risk has been allocated between
                  the parties.
                </ol>
              </ul>
            </p>
            <p>
              The restrictions outlined in this section will remain in effect
              even if it is determined that any limited remedy has failed of its
              essential purpose. The limitations of liability provided in these
              terms insure to the benefit of Analah Insurance, Its affiliates,
              and/or their respective service providers.
            </p>
            <p>
              <b>14. Indemnity</b>
            </p>
            <p>
              You accept to indemnify, and hold harmless Analah Insurance (and
              its officers, directors, agents, subsidiaries, joint ventures,
              employees, service providers and suppliers) from and against any
              and all claims, causes of action, demands, recoveries, losses,
              damages, fines, penalties, or other costs or expenses of any kind
              or nature, including reasonable attorneys' fees & court costs,
              resulting from or connected to your violation of these Terms &
              Conditions, breach by the user or any of the representations and
              warranties herein, your violation of any law or the rights of a
              third party, or your use of this Website.
            </p>
            <p>
              <b>15. Communication</b>
            </p>
            <p>
              When you use the Website or send emails to Analah Insurance, you
              are communicating electronically with Analah Insurance. You give
              permission to Analah Insurance to send you communications
              electronically. Analah Insurance may contact you via phone, email,
              publishing notifications on the Website, or another normally
              accepted method of communication. You agree that all agreements,
              notifications, disclosures, and other communications we deliver to
              you electronically satisfy any legal requirement that such
              communication be in writing.
            </p>
            <p>
              <b>16. Site-Provided Email and Postings </b>
            </p>
            <p>
              The Site / Mobile Application may provide users with the ability
              to send email messages to other users and non-users and to post
              messages on the Site / Mobile Application. Policybazaar is under
              no obligation to review any messages, information or content
              ("Postings") posted on the Site / Mobile Application by users and
              assumes no responsibility or liability relating to any such
              Postings.
            </p>
            <p>
              Notwithstanding the above, Policybazaar may from time to time
              monitor the Postings on the Site / Mobile Application and may
              decline to accept and/or remove any email or Postings. You
              understand and agree that you shall not to use any functionality
              provided by the Site / Mobile Application to post content or
              initiate communications or host, display, upload, modify, publish,
              transmit, store, update or share any information that contain: (i)
              Any unlawful, harmful, threatening, abusive, harassing,
              defamatory, vulgar, obscene, profane, hateful, racially,
              ethnically or otherwise objectionable material of any kind,
              including, but not limited to, any material which encourages
              conduct that would constitute a criminal offense, give rise to
              civil liability or otherwise violate any applicable local, state,
              national or international law for the time being in force or is
              defamatory, obscene, pornographic, paedophilic, invasive of
              another privacy including bodily privacy, insulting or harassing
              on the basis of gender, libelous, racially or ethnically
              objectionable, relating or encouraging money laundering or
              gambling, or otherwise inconsistent with or contrary to the laws
              in force; (ii) Advertisements or solicitations of any kind; (iii)
              Impersonate others or provide any kind of false information or
              belongs to another person and to which the user does not have any
              right; (iv) Personal information such as messages which state
              phone numbers, account numbers, addresses, or employer
              references.; (v) Messages by non-spokesperson employees of
              Policybazaar purporting to speak on behalf of Policybazaar or
              containing confidential information or expressing opinions
              concerning Policybazaar; (vi) Messages that offer unauthorized
              downloads of any copyrighted or private information or infringes
              any patent, trademark, copyright or other proprietary rights;
              (vii) Multiple messages placed within individual folders by the
              same user restating the same point; (viii) Chain letters of any
              kind; (ix) Identical (or substantially similar) messages to
              multiple recipients advertising any product or service, expressing
              a political or other similar message, or any other type of
              unsolicited commercial message; (x) is harmful to child; (xi)
              deceives or misleads the addressee about the origin of the message
              or knowingly and intentionally communicates any information which
              is patently false or misleading in nature but may reasonably be
              perceived as a fact; (xii) impersonates another person; (xiii)
              threatens the unity, integrity, defence, security or sovereignty
              of India, friendly relations with foreign States, or public order,
              or causes incitement to the commission of any cognisable offence
              or prevents investigation of any offence or is insulting other
              nation; (xiv) contains software virus or any other computer code,
              file or program designed to interrupt, destroy or limit the
              functionality of any computer resource; or (xv) is patently false
              and untrue, and is written or published in any form, with the
              intent to mislead or harass a person, entity or agency for
              financial gain or to cause any injury to any person. This
              prohibition includes but is not limited to a) Using Policybazaar
              to send messages to people who don't know you or who are unlikely
              to recognize you as a known contact; b) Using Policybazaar to
              connect to people who don't know you and then sending unsolicited
              promotional messages to those direct connections without their
              permission; and c) Sending messages to distribution lists,
              newsgroup aliases, or group aliases.
            </p>
            <p>
              <b>17. Links</b>
            </p>
            <p>
              Links to other World Wide Web sites or resources may be provided
              by the Website or by third parties. You acknowledge and agree that
              Analah Insurance is not responsible for the availability of any
              such external sites or resources, and does not endorse and is not
              responsible or liable for any content, advertising, products, or
              other materials on or available from such sites or resources.
              Additionally, you acknowledge and agree that Analah Insurance will
              not be held responsible, directly or indirectly, for any harm or
              loss caused by or alleged to have been caused by, use of, or
              reliance on any such content, goods, or services made available on
              or through any such site, mobile application or resource.
            </p>
            <p>
              <b>18. Accessibility to a Secure/Password Protected Area</b>
            </p>
            <p>
              Only authorized users are allowed access to and usage of the
              password-protected and/or secure portions of the Website.
              Unauthorized users who try to access these portions of the Website
              risk legal action.
            </p>
            <p>
              <b>19. Modification & Notification of Changes</b>
            </p>
            <p>
              The Website, associated policies and agreements, these Terms &
              Conditions, and the Privacy Policy are all subject to modification
              at any time, and Analah Insurance maintains the right to do so. If
              Analah Insurance modifies these Terms of Conditions materially, it
              may let you know by:
              <ul>
                <ol>
                  (i) Post a prominent notification/announcement above or below
                  the text of these Terms & Conditions or any other policy for
                  30 days, as applicable, is considered sufficient notice of
                  such changes. The notification/announcement will be taken down
                  30 days after it has been placed informing users of a change
                  to these Terms & Conditions or any other policy. In case you
                  have not used the Website for more than 30 days, you should
                  check the Terms & Conditions or any other Policy, prior to the
                  further use of the Website.
                </ol>
              </ul>
            </p>
            <p>
              If you wish to terminate your account due to any modification or
              change in the Terms & Conditions or any other Policy, you may
              write to us at <a href="mailto:contactus@analahinsurance.com" target="blank" className="text-[#2A44A9] underline decoration-1">contactus@analahinsurance.com</a>. If you continue to
              use the Website, you understand that by doing so you will be
              deemed to accept the new Terms & Conditions and other policies.
            </p>
            <p>
              <b>20. Trademarks</b>
            </p>
            <p>
              The trademarks, logos, and service marks (collectively, "Marks")
              displayed on the Website belong to Analah Insurance, and other
              associated parties and service providers. Users are prohibited
              from using any Marks for any purpose including, but not limited to
              use as metatags on other pages or sites on the World Wide Web
              without the written permission of Analah Insurance or such third
              party which may own the Marks. All information and content
              including any software programs available on or through the
              Website (collectively “Content”) is protected by copyright. Any
              Content made accessible on or through the Website may not be
              changed, copied, distributed, transmitted, displayed, published,
              sold, licenced, turned into creative works, or used for any public
              or commercial gain by Users.
            </p>
            <p>
              <b>21. Continuation of Terms After Agreement Ends</b>
            </p>
            <p>
              Any clause in these Terms & Conditions, that places or anticipates
              continuing obligations on a party will survive its expiration or
              termination, regardless of any other clauses or general legal
              principles to the contrary.
            </p>
            <p>
              <b>22. General Terms & Conditions</b>
            </p>
            <p>
              The parties agree that the court should endeavor to give effect to
              the parties' intentions as expressed in the provision if any of
              these conditions are found to be invalid, void, or otherwise
              unenforceable. The unenforceable condition will be deemed
              severable and will not affect the validity and enforceability of
              any remaining condition. The scope and extent of a section are not
              limited by the headings, which are merely there for reference.
            </p>
            Without respect to its rules on conflicts of law, the laws of India
            shall govern this Terms and conditions and your relationship with
            Analah Insurance. Regarding any legal actions that may be related to
            these Terms of Service, you and Analah Insurance concur to submit to
            the personal jurisdiction of the Mumbai courts. Analah Insurance's
            right to take legal action in response to subsequent or similar
            breaches is not waived by its failure to respond to a violation by
            you or others.
            <p>
              These Terms & Conditions and the relationship between you and
              Analah Insurance will be governed by the laws of India without
              regard to its conflict of law provisions. Regarding any legal
              actions that may be related to these Terms of Conditions, you and
              Analah Insurance concur to submit to the personal jurisdiction of
              the Mumbai courts.
            </p>
            <p>
              The failure of Analah Insurance to act with respect to a breach by
              you or others does not waive its right to act with respect to
              subsequent or similar breaches.
            </p>
            <p>
              Analah Insurance does not assure that it will enforce these Terms
              & Conditions against all breaches. There shall be no third-party
              beneficiaries to these Terms & Conditions unless expressly
              stipulated otherwise in these Terms & Conditions. These Terms &
              Conditions supersede any earlier agreements between you and Analah
              Insurance with regard to the Website and sets forth the terms and
              conditions for your use of the Website.
            </p>
          </section>
        </div>

        <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
      </div>

      <Footer />
    </div>
  );
}

export default Disclaimer;
