import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | WorkInt",
  description:
    "Learn how WorkInt collects, uses, stores, and protects your information.",
};

const sections = [
  {
    id: "introduction",
    heading: "Introduction",
    body: (
      <>
        <p>
          WorkInt (&ldquo;WorkInt&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
          or &ldquo;us&rdquo;) respects your privacy and is committed to
          protecting your personal information.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect
          information when you use the WorkInt mobile application and related
          services.
        </p>
        <p>
          WorkInt is a social networking platform designed to help people
          showcase their skills, services, interests, and experience while
          connecting with others for potential work opportunities.
        </p>
        <p>
          By using WorkInt, you agree to the practices described in this
          Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: (
      <>
        <h3 className="font-display font-semibold text-white text-base">
          A. Information You Provide
        </h3>
        <p>
          When creating or managing your account, you may provide information
          such as:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Profile photo</li>
          <li>Profile description</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Interests</li>
          <li>Work-related information</li>
          <li>Other profile details you choose to share</li>
        </ul>

        <h3 className="font-display font-semibold text-white text-base">
          B. Authentication Information
        </h3>
        <p>
          If you sign in using Google Sign-In, we may receive information from
          Google including:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Profile picture</li>
        </ul>
        <p>
          We only receive information that is made available through the
          authentication process.
        </p>

        <h3 className="font-display font-semibold text-white text-base">
          C. Location Information
        </h3>
        <p>
          With your permission, WorkInt may collect your location information
          to support location-based features and improve relevant networking
          and work opportunity discovery.
        </p>
        <p>
          You can disable location access at any time through your device
          settings.
        </p>

        <h3 className="font-display font-semibold text-white text-base">
          D. Device and Technical Information
        </h3>
        <p>We may collect limited technical information including:</p>
        <ul>
          <li>Device type</li>
          <li>Operating system version</li>
          <li>App version</li>
          <li>Device identifiers necessary for platform functionality</li>
          <li>Crash and diagnostic information</li>
        </ul>

        <h3 className="font-display font-semibold text-white text-base">
          E. Notification Information
        </h3>
        <p>
          To deliver notifications, we may collect and store notification
          tokens provided by services such as Firebase Cloud Messaging (FCM).
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    heading: "How We Use Your Information",
    body: (
      <>
        <p>We use collected information to:</p>
        <ul>
          <li>Create and manage user accounts</li>
          <li>Authenticate users</li>
          <li>Display user profiles</li>
          <li>Enable connections between users</li>
          <li>Provide location-based functionality</li>
          <li>Deliver notifications</li>
          <li>Improve platform performance and reliability</li>
          <li>Monitor and prevent abuse, fraud, and security threats</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "profile-visibility",
    heading: "Profile Visibility",
    body: (
      <>
        <p>WorkInt is a social networking platform.</p>
        <p>
          Information that you choose to include in your profile may be visible
          to other users of the platform, including:
        </p>
        <ul>
          <li>Name</li>
          <li>Profile photo</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Interests</li>
          <li>Public profile information</li>
        </ul>
        <p>
          You are responsible for deciding what information you choose to
          share.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    heading: "Data Sharing",
    body: (
      <>
        <p>We do not sell your personal information.</p>
        <p>We may share information only in the following circumstances:</p>

        <h3 className="font-display font-semibold text-white text-base">
          With Other Users
        </h3>
        <p>
          Information you choose to make visible on your profile may be viewed
          by other users.
        </p>

        <h3 className="font-display font-semibold text-white text-base">
          Service Providers
        </h3>
        <p>
          We may share information with trusted third-party service providers
          that help operate the platform, including:
        </p>
        <ul>
          <li>Authentication providers</li>
          <li>Cloud hosting providers</li>
          <li>Database providers</li>
          <li>Notification providers</li>
        </ul>
        <p>
          These providers may access information only as necessary to perform
          services on our behalf.
        </p>

        <h3 className="font-display font-semibold text-white text-base">
          Legal Requirements
        </h3>
        <p>
          We may disclose information if required by law, regulation, court
          order, or legal process.
        </p>
      </>
    ),
  },
  {
    id: "data-storage-and-security",
    heading: "Data Storage and Security",
    body: (
      <>
        <p>
          We implement reasonable administrative, technical, and organizational
          measures to protect user information from unauthorized access,
          misuse, alteration, or disclosure.
        </p>
        <p>
          However, no method of electronic storage or internet transmission is
          completely secure. We cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: (
      <>
        <p>We retain information only for as long as necessary to:</p>
        <ul>
          <li>Provide our services</li>
          <li>Maintain platform functionality</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          When accounts are deleted, information may be removed, anonymized, or
          retained where legally required.
        </p>
      </>
    ),
  },
  {
    id: "your-rights-and-choices",
    heading: "Your Rights and Choices",
    body: (
      <>
        <p>You may:</p>
        <ul>
          <li>Access and update your profile information</li>
          <li>Control what information is displayed on your profile</li>
          <li>Disable location permissions through your device settings</li>
          <li>Delete your account through available account management features</li>
        </ul>
        <p>
          Account deletion requests may require limited retention of certain
          records where required by law or for legitimate operational purposes.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    body: (
      <>
        <p>
          WorkInt relies on third-party services to provide certain
          functionality.
        </p>
        <p>These services may include:</p>
        <ul>
          <li>Google Sign-In</li>
          <li>Firebase services</li>
          <li>Cloud infrastructure providers</li>
        </ul>
        <p>
          These providers operate under their own privacy policies and terms.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    body: (
      <>
        <p>WorkInt is intended for users who are at least 18 years old.</p>
        <p>
          We do not knowingly collect personal information from individuals
          under the age of 18.
        </p>
        <p>
          If we become aware that such information has been collected, we will
          take reasonable steps to remove it.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-this-privacy-policy",
    heading: "Changes to This Privacy Policy",
    body: (
      <>
        <p>We may update this Privacy Policy from time to time.</p>
        <p>
          Any updates will be posted within the platform and reflected by the
          updated &ldquo;Last Updated&rdquo; date at the top of this document.
        </p>
        <p>
          Your continued use of WorkInt after changes become effective
          constitutes acceptance of the updated Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    body: (
      <p>
        If you have questions, concerns, or requests regarding this Privacy
        Policy, you may contact us at:{" "}
        <a
          href="mailto:support@workint.com"
          className="text-brand-teal hover:underline"
        >
          support@workint.com
        </a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="10 June 2026"
      sections={sections}
    />
  );
}
