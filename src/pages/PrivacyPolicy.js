import React, {useState} from 'react'
import { Helmet } from 'react-helmet'

export default function PrivacyPolicy(){
  return (
    <div className="w-full p-4 flex justify-center text-white">
      <Helmet>
        <title>Detailing Doctors | Privacy Policy</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
            <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">Privacy Policy</h2>
            <p><br />At detailingdoctors.in, we take the privacy and security of our users' data very seriously. This privacy policy outlines the information we collect, how we use it, and how we protect it.
            <br />
            <br /><b>Information We Collect:</b>
            <br />When you visit our website, we may collect certain information automatically, including your IP address, device type, and browser type. We also use cookies to track your activity on our website and personalize your experience.
            <br />
            <br />If you submit a contact form or sign up for our newsletter, we will collect your name, email address, and any other information you provide. We will use this information to communicate with you about our services and promotions.
            <br />
            <br /><b>How We Use Your Information:</b>
            <br />We use the information we collect to improve our website, personalize your experience, and communicate with you about our services and promotions. We will not sell, rent, or share your personal information with third parties without your consent, except as required by law.
            <br />
            <br /><b>Transfers to Third Party Companies:</b>
            <br />We may share your personal information with third party companies that provide services on our behalf, such as website hosting, email delivery, or marketing. We will only share the information necessary to perform these services, and we require these companies to protect your information in the same way we do.
            <br />
            <br /><b>Instructions for Modifying or Deleting Personal Information:</b>
              <br />If you would like to modify or delete your personal information, you can do so by contacting us at <a className="underline" href="mailto:info@detailingdoctors.in">info@detailingdoctors.in</a>. We will make reasonable efforts to respond to your request in a timely manner.
            <br />
            <br /><b>Instructions for Opting-Out of Future Communications:</b>
            <br />If you no longer wish to receive promotional emails from us, you can opt-out by clicking the "unsubscribe" link at the bottom of any email you receive from us.
            <br />
            <br /><b>Effective Date and Notification of Changes:</b>
            <br />This privacy policy is effective as of January 5th, 2023. We may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any material changes to this policy on our website and will provide notice to you in accordance with applicable law. We encourage you to review this policy periodically for any changes.</p>
      </div>
    </div>
  )
}

