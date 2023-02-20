import React, {useState} from 'react'
import { Helmet } from 'react-helmet'

export default function PrivacyPolicy(){
  return (
    <div className="w-full p-4 flex justify-center text-white">
      <Helmet>
        <title>Detailing Doctors | Contact Us</title>
        <meta name="description" content="The premium car detailing studio"/>
      </Helmet>
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
            <h2 className="text-4xl font-medium font-chakra uppercase decoration-secondary decoration-4 underline underline-offset-8">Privacy Policy</h2>
            <p><br />At detailingdoctors.in, we take the privacy and security of our users' data very seriously. This privacy policy outlines the information we collect, how we use it, and how we protect it.
            <br />
            <br />Information We Collect:
            <br />When you visit our website, we may collect certain information automatically, including your IP address, device type, and br /owser type. We also use cookies to track your activity on our website and personalize your experience.
            <br />
            <br />If you submit a contact form or sign up for our newsletter, we will collect your name, email address, and any other information you provide. We will use this information to communicate with you about our services and promotions.
            <br />
            <br />How We Use Your Information:
            <br />We use the information we collect to improve our website, personalize your experience, and communicate with you about our services and promotions. We will not sell, rent, or share your personal information with third parties without your consent, except as required by law.
            <br />
            <br />Transfers to Third Party Companies:
            <br />We may share your personal information with third party companies that provide services on our behalf, such as website hosting, email delivery, or marketing. We will only share the information necessary to perform these services, and we require these companies to protect your information in the same way we do.
            <br />
            <br />Instructions for Modifying or Deleting Personal Information:
            <br />If you would like to modify or delete your personal information, you can do so by contacting us at info@detailingdoctors.in. We will make reasonable efforts to respond to your request in a timely manner.
            <br />
            <br />Instructions for Opting-Out of Future Communications:
            <br />If you no longer wish to receive promotional emails from us, you can opt-out by clicking the "unsubscribe" link at the bottom of any email you receive from us.
            <br />
            <br />Effective Date and Notification of Changes:
            <br />This privacy policy is effective as of January 5th, 2023. We may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any material changes to this policy on our website and will provide notice to you in accordance with applicable law. We encourage you to review this policy periodically for any changes.</p>
      </div>
    </div>
  )
}

