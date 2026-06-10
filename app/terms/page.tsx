import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | WorkInt",
  description:
    "Read WorkInt's Terms of Service and understand your rights, responsibilities, and platform usage guidelines.",
};

const sections = [
  {
    id: "acceptance-of-terms",
    heading: "Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing or using WorkInt (&ldquo;the Platform&rdquo;,
          &ldquo;WorkInt&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;us&rdquo;), you agree to be bound by these Terms of Service.
        </p>
        <p>If you do not agree with these Terms, please do not use the Platform.</p>
      </>
    ),
  },
  {
    id: "about-workint",
    heading: "About WorkInt",
    body: (
      <>
        <p>
          WorkInt is a social networking platform designed to help individuals
          connect based on their skills, services, interests, experience, and
          work opportunities.
        </p>
        <p>
          WorkInt does not directly provide employment, jobs, contracts, or
          guaranteed work opportunities. The Platform only facilitates
          connections and communication between users.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    body: (
      <>
        <p>You must be at least 18 years old to use WorkInt.</p>
        <p>
          By using the Platform, you represent and warrant that you meet this
          requirement and have the legal capacity to enter into these Terms.
        </p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    heading: "User Responsibilities",
    body: (
      <>
        <p>By using WorkInt, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information.</li>
          <li>Maintain the security of your account.</li>
          <li>Use the Platform in a lawful and respectful manner.</li>
          <li>Respect the rights and privacy of other users.</li>
          <li>Keep your profile information reasonably up to date.</li>
        </ul>
        <p>You agree not to:</p>
        <ul>
          <li>Impersonate another person or organization.</li>
          <li>Provide false, misleading, or fraudulent information.</li>
          <li>Harass, threaten, abuse, or harm other users.</li>
          <li>Upload malicious software, viruses, or harmful code.</li>
          <li>Use the Platform for illegal activities.</li>
          <li>Attempt unauthorized access to WorkInt systems.</li>
          <li>Collect, scrape, or misuse user information without permission.</li>
          <li>Create fake or deceptive accounts.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-profiles-and-content",
    heading: "User Profiles and Content",
    body: (
      <>
        <p>
          Users may create profiles and share information including, but not
          limited to:
        </p>
        <ul>
          <li>Skills</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio information</li>
          <li>Profile images</li>
          <li>Business information</li>
        </ul>
        <p>You remain the owner of the content you submit.</p>
        <p>
          By posting content on WorkInt, you grant WorkInt a limited,
          non-exclusive, worldwide license to store, display, distribute, and
          use such content solely for operating and improving the Platform.
        </p>
        <p>You are solely responsible for any content you publish.</p>
        <p>
          WorkInt reserves the right to remove content that violates these
          Terms or applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "user-interactions-and-work-agreements",
    heading: "User Interactions and Work Agreements",
    body: (
      <>
        <p>
          WorkInt only facilitates introductions and communication between
          users.
        </p>
        <p>
          Any agreement, project, collaboration, work arrangement, service
          engagement, payment arrangement, or business relationship is solely
          between the involved users.
        </p>
        <p>WorkInt:</p>
        <ul>
          <li>Is not a party to any agreement between users.</li>
          <li>Does not guarantee the completion of work.</li>
          <li>Does not guarantee payment.</li>
          <li>Does not guarantee the quality of services offered.</li>
          <li>Does not guarantee the reliability or accuracy of user information.</li>
        </ul>
        <p>
          Users are responsible for conducting their own due diligence before
          entering into any arrangement.
        </p>
      </>
    ),
  },
  {
    id: "no-verification-or-endorsement",
    heading: "No Verification or Endorsement",
    body: (
      <>
        <p>Unless explicitly stated otherwise, WorkInt does not verify:</p>
        <ul>
          <li>User identities</li>
          <li>Skills</li>
          <li>Qualifications</li>
          <li>Certifications</li>
          <li>Employment history</li>
          <li>Background information</li>
        </ul>
        <p>
          The presence of a profile, service listing, or user on WorkInt does
          not constitute endorsement, recommendation, certification, or
          approval by WorkInt.
        </p>
      </>
    ),
  },
  {
    id: "payments-and-financial-transactions",
    heading: "Payments and Financial Transactions",
    body: (
      <>
        <p>
          WorkInt does not currently process, hold, guarantee, or mediate
          payments between users.
        </p>
        <p>
          Any financial transaction conducted between users is entirely at
          their own risk and responsibility.
        </p>
        <p>
          WorkInt shall not be responsible for payment disputes, unpaid
          invoices, chargebacks, fraud, or financial losses arising from user
          interactions.
        </p>
      </>
    ),
  },
  {
    id: "account-suspension-and-termination",
    heading: "Account Suspension and Termination",
    body: (
      <>
        <p>We may suspend, restrict, or terminate accounts that:</p>
        <ul>
          <li>Violate these Terms.</li>
          <li>Engage in fraudulent activity.</li>
          <li>Harm other users.</li>
          <li>Misuse the Platform.</li>
          <li>Create legal or security risks.</li>
        </ul>
        <p>
          Users may delete their accounts at any time through available account
          management features.
        </p>
      </>
    ),
  },
  {
    id: "platform-availability",
    heading: "Platform Availability",
    body: (
      <>
        <p>
          WorkInt is provided on an &ldquo;as-is&rdquo; and
          &ldquo;as-available&rdquo; basis.
        </p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>The Platform will always be available.</li>
          <li>The Platform will be uninterrupted.</li>
          <li>The Platform will be error-free.</li>
          <li>All features will remain available indefinitely.</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, discontinue, or update any
          feature of the Platform at any time.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, WorkInt and its operators
          shall not be liable for:
        </p>
        <ul>
          <li>Disputes between users.</li>
          <li>Financial losses.</li>
          <li>Business losses.</li>
          <li>Lost profits.</li>
          <li>Service interruptions.</li>
          <li>Data loss.</li>
          <li>Work outcomes.</li>
          <li>User-generated content.</li>
        </ul>
        <p>Your use of the Platform is at your own risk.</p>
      </>
    ),
  },
  {
    id: "changes-to-these-terms",
    heading: "Changes to These Terms",
    body: (
      <>
        <p>We may update these Terms of Service from time to time.</p>
        <p>
          Updated versions will be posted on the Platform and will become
          effective upon publication.
        </p>
        <p>
          Your continued use of WorkInt after changes are posted constitutes
          acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance with
          the laws of India.
        </p>
        <p>
          Any disputes arising from the use of WorkInt shall be subject to the
          jurisdiction of the courts located in Maharashtra, India.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    body: (
      <p>
        If you have questions regarding these Terms of Service, you may contact
        us at:{" "}
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

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="10 June 2026"
      sections={sections}
    />
  );
}
