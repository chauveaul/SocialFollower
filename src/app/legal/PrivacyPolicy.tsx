export default function PrivacyPolicy() {
  return (
    <body className="dark:text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Privacy Policy for SocialFollower
        </h1>
        <p className="text-sm text-slate-300 text-center mb-8">
          Last Updated: February 16, 2025
        </p>

        <div className="dark:!bg-[#232323] !border-[#dddddd]/[0.5] border shadow-lg rounded-lg p-8">
          <p className="mb-6">
            Thank you for using <strong>SocialFollower</strong>! This Privacy
            Policy explains how we collect, use, disclose, and protect your
            information when you use our application. By using SocialFollower,
            you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect the following types of information to provide and improve
            our services:
          </p>

          <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Email Address and Password:</strong> Used to create and
              manage your account.
            </li>
            <li>
              <strong>
                LinkedIn, Instagram, TikTok, and YouTube Account Data:
              </strong>{" "}
              When you connect your social media accounts, we collect data such
              as profile information, follower counts, engagement metrics, and
              other relevant analytics to provide growth insights.
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2">1.2 Usage Data</h3>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Log Data:</strong> We collect information such as your IP
              address, device type, operating system, browser type, and usage
              patterns (e.g., pages visited, features used).
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We may use
              cookies and similar technologies to enhance your experience and
              analyze usage.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-6">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>To create and manage your account.</li>
            <li>
              To provide you with account growth metrics and insights based on
              your connected social media accounts.
            </li>
            <li>To improve and optimize our application.</li>
            <li>
              To communicate with you about updates, security alerts, and
              support.
            </li>
            <li>
              To comply with legal obligations and enforce our terms of service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            3. How We Share Your Information
          </h2>
          <p className="mb-6">
            We do not sell your personal information. However, we may share your
            information in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>With Your Consent:</strong> When you connect your social
              media accounts, we share necessary data with third-party platforms
              (e.g., LinkedIn, Instagram, TikTok, YouTube) to provide our
              services.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share information with
              trusted third-party service providers who assist us in operating
              our application (e.g., hosting, analytics, customer support).
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law or to protect our rights, property,
              or safety.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-6">
            We take reasonable measures to protect your information from
            unauthorized access, alteration, or destruction. These measures
            include encryption, secure servers, and regular security audits.
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            5. Your Rights and Choices
          </h2>
          <p className="mb-6">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Access:</strong> Request a copy of the data we hold about
              you.
            </li>
            <li>
              <strong>Correction:</strong> Update or correct inaccurate
              information.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your data, subject
              to legal obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> Opt out of certain data collection or
              processing activities.
            </li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:privacy@socialfollower.xyz"
              className="text-blue-500 hover:underline"
            >
              privacy@socialfollower.xyz
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            6. Third-Party Services
          </h2>
          <p className="mb-6">
            SocialFollower integrates with third-party platforms (e.g.,
            LinkedIn, Instagram, TikTok, YouTube). These platforms have their
            own privacy policies, and we encourage you to review them before
            connecting your accounts.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Children’s Privacy</h2>
          <p className="mb-6">
            SocialFollower is not intended for users under the age of 13. We do
            not knowingly collect personal information from children. If we
            become aware that a child has provided us with personal information,
            we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. If we make
            significant changes, we will notify you through the application or
            via email. Your continued use of SocialFollower after any changes
            constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-6">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@socialfollower.xyz"
              className="text-blue-500 hover:underline"
            >
              info@socialfollower.xyz
            </a>
          </p>
        </div>
      </div>
    </body>
  );
}
