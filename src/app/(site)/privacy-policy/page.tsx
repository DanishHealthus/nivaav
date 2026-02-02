import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import PolicySection from '@/components/PolicySection'
import { privacyPolicySections } from '@/data/privacyPolicyData'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Privacy Policy | Nivaan Care – Patient Data Protection",
  description:
    "Read the Nivaan Care Privacy Policy to understand how we collect, use, and protect your personal information. Your data privacy and security matter to us.",
  alternates: {
    canonical: "https://nivaancare.com/privacy-policy",
  },
};
const page = () => {
  return (
    <>
      <PageBreadcrumb title="Privacy Policy" />
      <div className="pb-10">
        {privacyPolicySections.map((section) => (
          <PolicySection
            key={section.number}
            number={section.number}
            heading={section.heading}
            intro={section.intro}
            items={section.items}
          />
        ))}
      </div>
    </>
  )
}

export default page
