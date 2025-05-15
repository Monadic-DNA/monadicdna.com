import ContactUsCard from '@/components/ContactUsCard';

export const metadata = {
  title: 'Privacy',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-poppins pt-24 md:pt-0">
      <header className="bg-offWhite shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold font-bricolage text-absoluteDark">
            Privacy Policy
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-stone">Effective Date: April 1, 2025</p>
          <p className="mt-1 max-w-2xl text-sm text-stone">Last updated: April 1, 2025</p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 text-primary">
                  Welcome to <span className="font-semibold"> Monadic DNA.</span> We are committed
                  to protecting your privacy and ensuring that your personal data is handled in a
                  safe and responsible manner. This Privacy Policy describes the types of personal
                  information we collect, how we use and share it, and the steps we take to protect
                  your privacy.
                </h2>
                <p className="mt-4">
                  {' '}
                  By using Monadic DNA services, you agree to the collection and use of information
                  in accordance with this policy.{' '}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  {privacyPolicy.map((section, idx) => (
                    <div key={idx} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-900">{section.title}</dt>
                      <dd className="mt-1 text-gray-500 sm:mt-0 sm:col-span-2">
                        {section.content}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <ContactUsCard
              title="If you have any questions about this Privacy Policy or our practices, or if you
                  wish to exercise any of your rights, please contact us."
            />
            <p className="py-8 text-lg">
              Thank you for trusting Monadic DNA with your genomic data. We are committed to
              providing you with a safe, secure, and privacy-conscious platform.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

const privacyPolicy = [
  {
    title: 'Information We Collect',
    content: (
      <>
        <h3>
          {' '}
          We collect several types of information to provide and improve our services, including:{' '}
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>
            <span className="font-semibold"> Apple ID Authentication: </span>
            When signing in, users have the option to authenticate using their Apple ID. Apple
            offers an option to mask the user's email address, so no direct personal information
            (PII) such as email addresses is collected from you unless you choose to share it.
          </li>
          <li>
            <span className="font-semibold"> Genomic Data: </span> This includes DNA sequencing data
            that you upload or receive through our platform.
          </li>
          <li>
            <span className="font-semibold"> Health and Lifestyle Information: </span> If you choose
            to provide additional health, fitness, or lifestyle data to enhance the data to enhance
            the insights we provide.
          </li>
          <li>
            <span className="font-semibold"> Usage Data: </span> Information on how you use our
            platform, including access times, features used, and other diagnostic data.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <>
        <h3> We use the data we collect for the following purposes: </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>
            <span className="font-semibold"> To provide and maintain our services: </span> This
            includes processing your genomic data and providing personalized insights.
          </li>
          <li>
            <span className="font-semibold"> To improve our platform: </span> Usage data helps us
            identify areas for improvement and to enhance user experience.
          </li>
          <li>
            <span className="font-semibold"> To comply with legal obligations: </span> We may need
            to use your data to comply with relevant regulations.
          </li>
          <li>
            <span className="font-semibold"> For marketing and communications: </span> We may send
            you notifications about updates or features unless you opt-out.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Data Storage and Security',
    content: (
      <>
        <p>
          Your data is stored securely using advanced encryption technologies, including{' '}
          <span className="font-semibold">
            {' '}
            Fully Homomorphic Encryption (FHE), Multiparty Computation (MPC),{' '}
          </span>{' '}
          and <span className="font-semibold"> Trusted Execution Environments (TEEs).</span> We take
          reasonable precautions to protect your data, but no system is completely immune to
          security risks. Your data will remain encrypted, and we will never decrypt or expose it
          without your permission.{' '}
          <span className="font-semibold"> We cannot look at your data,</span> not even when we
          calculate insights for you.
        </p>

        <p className="mt-4">
          <span className="font-semibold"> Encryption Keys: </span> As detailed in our Terms of
          Service, you are solely responsible for safeguarding your encryption keys, which are
          essential for accessing and decrypting your data. If you lose your keys, Monadic DNA
          cannot recover or regenerate them, and you will be locked out of your data.
        </p>
      </>
    ),
  },
  {
    title: 'Data Sharing and Third-Party Access',
    content: (
      <>
        <h3>
          We respect your privacy and do not sell your personal information. We only share your data
          with trusted third parties in the following scenarios:
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>
            <span className="font-semibold"> With your consent: </span> We may share your data if
            you opt-in or grant us permission to share it with third-party applications (such as
            health apps).
          </li>
          <li>
            <span className="font-semibold"> To comply with legal obligations: </span> We may
            disclose your data if required by law or if we believe such action is necessary to
            comply with a legal process.
          </li>
          <li>
            <span className="font-semibold"> Third-Party Service Providers: </span> We may share
            your information with service providers who assist in the operation of our platform, but
            they are bound by confidentiality agreements and are prohibited from using your data for
            their own purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'User Rights and Control',
    content: (
      <>
        <h3>
          Depending on your jurisdiction, you may have the following rights regarding your personal
          data:
        </h3>
        <p className="font-semibold my-2"> For California Residents (CCPA): </p>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>
            <span className="font-semibold"> Right to Know: </span> You may request to know what
            personal information we collect, use, or disclose.
          </li>
          <li>
            <span className="font-semibold"> Right to Delete: </span> You can request deletion of
            your personal information, subject to certain exceptions.
          </li>
          <li>
            <span className="font-semibold"> Right to Opt-Out: </span> You may opt-out of the sale
            of your personal information, though Monadic DNA does not engage in the sale of personal
            data.
          </li>
        </ul>
        <p className="font-semibold my-2"> For EU/EEA Residents (GDPR): </p>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>
            <span className="font-semibold"> Right to Access: </span> You have the right to request
            access to your personal data.
          </li>
          <li>
            <span className="font-semibold"> Right to Rectification: </span> You may request
            correction of inaccurate data.
          </li>
          <li>
            <span className="font-semibold"> Right to Erasure: </span> You can request deletion of
            your personal data, subject to retention requirements.
          </li>
          <li>
            <span className="font-semibold"> Right to Restrict Processing: </span> You may request
            restriction of processing in certain circumstances.
          </li>
          <li>
            <span className="font-semibold"> Right to Data Portability: </span> You can request your
            data in a structured, commonly used, and machine-readable format.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a className="font-semibold" href="mailto:hello@monadicdna.com">
            hello@monadicdna.com{' '}
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <p>
        We will retain your personal data for as long as necessary to provide our services or comply
        with legal obligations. If you wish to delete your data, you can request it by contacting us
        directly at{' '}
        <a className="font-semibold" href="mailto:hello@monadicdna.com">
          hello@monadicdna.com
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Security Breach Notifications',
    content: (
      <p>
        In the event of a security breach involving your personal data, we will promptly notify you.
        Our notification will include details on the breach, the actions we have taken, and how you
        can protect yourself. For any security-related inquiries, please contact our support team at{' '}
        <a className="font-semibold" href="mailto:hello@monadicdna.com">
          hello@monadicdna.com
        </a>
        .
      </p>
    ),
  },
  {
    title: 'International Transfers',
    content: (
      <p>
        Your personal data may be transferred to and stored on servers located outside your country
        of residence. By using our services, you consent to the transfer of your data to these
        locations, subject to the security measures described in this Privacy Policy.
      </p>
    ),
  },
  {
    title: ' Changes to This Privacy Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be communicated to you
        through email or app notification. We will also update the{' '}
        <span className="font-semibold"> Last Updated </span> date at the top of this policy.
      </p>
    ),
  },
];
