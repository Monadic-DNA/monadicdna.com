import ContactUsCard from '@/components/ContactUsCard';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen font-inter pt-24 md:pt-0">
      <header className="bg-offWhite shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold font-bricolage text-absoluteDark">
            Terms of Service
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
                  Welcome to <span className="font-semibold"> Monadic DNA, </span> a platform
                  offering secure, user-controlled personal genomics services. These Terms of
                  Service ("Terms") govern your use of our applications, protocols, and associated
                  services, including Monadic Vault, Monadic Pools, and the IKAI Protocol.
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  {tos.map((section, idx) => (
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
            <ContactUsCard title="If you have any questions about these Terms of Service, please contact us." />

            <p className="py-8 text-lg">
              {' '}
              Thank you for choosing Monadic DNA. Empower your genome. Protect your future.{' '}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

const tos = [
  {
    title: 'Acceptance of Terms',
    content:
      'By creating an account, accessing, or using any part of Monadic DNA, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use our services.',
  },
  {
    title: 'Services Provided',
    content: (
      <>
        <h3> Monadic DNA offers: </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>Encrypted storage and computation over personal genomic data.</li>
          <li>Personalized insights derived from your genomic data.</li>
          <li>A marketplace for third-party applications and insights.</li>
          <li>Participation in research pools for token-based rewards.</li>
          <li>Delegation of data usage to trusted third parties.</li>
        </ul>
        <p>
          All computations are done under encryption (via FHE, MPC, TEEs, or ZKPs) and data remains
          under your control at all times.
        </p>
      </>
    ),
  },
  {
    title: 'User Data and Ownership',
    content: (
      <>
        <h3> You retain full ownership and control of your genetic and health data. You may: </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> Upload data from other genomics providers (e.g., 23andMe). </li>
          <li>Receive data from partner labs.</li>
          <li> Store your data encrypted in our infrastructure or export it at any time. </li>
        </ul>
        <p>We do not sell your data. All sharing is opt-in and governed by smart contracts.</p>
      </>
    ),
  },
  {
    title: 'User Responsibilities',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li> You must provide accurate information. </li>
          <li> You are responsible for safeguarding access credentials. </li>
          <li> You agree to only use Monadic DNA for lawful, ethical purposes. </li>
        </ul>
        <p> You may not: </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li> Misrepresent your identity or data. </li>
          <li> Use the platform to conduct or facilitate unauthorized analysis. </li>
          <li> Violate the rights of others or attempt to subvert the protocol. </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Delegation and Attestations',
    content:
      ' You may optionally assign a Delegate to act on your behalf. Delegates are attested entities within the ecosystem who may enroll your data in pools or monetize it under rules set by the IKAI DAO. You may revoke delegation at any time.',
  },
  {
    title: 'IKAI Protocol and Governance',
    content: (
      <>
        <h3>
          {' '}
          The IKAI Protocol governs access, rewards, and identity within the ecosystem. Key
          features:{' '}
        </h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>$IKAI token is used for access and governance.</li>
          <li>Attestations ensure the authenticity of labs, apps, and data.</li>
          <li>All access and computation proposals must be reviewed and approved by the DAO.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Security and Privacy',
    content: (
      <>
        <h3> We employ advanced encryption technologies including: </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>Fully Homomorphic Encryption (FHE)</li>
          <li>Multiparty Computation (MPC)</li>
          <li>Trusted Execution Environments (TEEs)</li>
          <li>Zero-Knowledge Proofs (ZKPs)</li>
        </ul>
        <p> Your data is never decrypted by us and only you can view or share your results. </p>
      </>
    ),
  },
  {
    title: 'Third-Party Applications',
    content: (
      <>
        <h3> Third-party apps may integrate with Monadic DNA. These apps must: </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li>Be attested by the IKAI DAO.</li>
          <li>Specify clearly what data they access and how it will be used.</li>
        </ul>
        <p> Use of such apps is at your discretion and governed by their own terms. </p>
      </>
    ),
  },
  {
    title: 'Disclaimers',
    content: (
      <>
        <p>
          {' '}
          Monadic DNA is not a medical service. Insights provided are for informational purposes
          only and not a substitute for professional healthcare.{' '}
        </p>
        <h3 className=" my-4"> We are not liable for: </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Inaccurate or incomplete data from third-party providers.</li>
          <li>Decisions made based on insights or analytics.</li>
          <li> Any direct or indirect damage from use of our services. </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Termination',
    content:
      'You may terminate your account at any time. We reserve the right to suspend or terminate access for violation of these Terms or for malicious behavior within the protocol.',
  },
  {
    title: 'Modifications',
    content:
      'We may revise these Terms occasionally. Continued use constitutes acceptance of the latest version. We will notify users of material changes via email or app notification.',
  },
  {
    title: 'Governing Law',
    content:
      'These Terms are governed by and construed under the laws of the State of New York, without regard to conflict of law principles.',
  },
  {
    title: 'Data Protection and Privacy Laws',
    content: (
      <>
        <p>
          Monadic DNA is committed to respecting and complying with applicable data privacy
          regulations, including the
          <span className="font-bold"> California Consumer Privacy Act (CCPA) </span> and the
          <span className="font-bold"> General Data Protection Regulation (GDPR). </span>
        </p>
        <h3 className="font-bold my-4"> For California Residents (CCPA): </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You have the right to know what personal information we collect, use, disclose, or sell.{' '}
          </li>
          <li> You may request deletion of your data at any time. </li>
          <li>
            We do not sell personal data. Sharing for processing or attested third-party access is
            always opt-in.{' '}
          </li>
          <li>
            To exercise your CCPA rights, contact us at{' '}
            <a href="mailto:hello@monadicdna.com">hello@monadicdna.com</a>
          </li>
        </ul>
        <h3 className="font-bold my-4"> For EU/EEA Residents (GDPR): </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> You have the right to access, rectify, or erase your personal data. </li>
          <li> You may withdraw consent or object to data processing at any time </li>
          <li> Data is encrypted, anonymized, and stored with privacy-by-design principles </li>
          <li>
            {' '}
            We have appointed a Data Protection Officer (DPO) and comply with cross-border transfer
            rules via standard contractual clauses{' '}
          </li>
        </ul>
        <p>
          For more details, please refer to our{' '}
          <Link className="font-bold" href="/privacy">
            Privacy Policy.
          </Link>
        </p>
      </>
    ),
  },
  {
    title: 'Warranties and Disclaimers',
    content: (
      <>
        <h3>
          {' '}
          The Monadic DNA services are provided "as is" and "as available" without warranties of any
          kind. We disclaim all warranties, express or implied, including but not limited to:{' '}
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> Fitness for a particular purpose. </li>
          <li> Non-infringement. </li>
          <li> Accuracy or reliability of results </li>
        </ul>
        <p>
          {' '}
          We do not guarantee uninterrupted, error-free service or that defects will be corrected.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <h3>
          To the fullest extent permitted by law, Monadic DNA, its affiliates, and partners shall
          not be liable for any indirect, incidental, special, consequential or punitive damages, or
          any loss of profits or revenues, whether incurred directly or indirectly, arising from:
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> Your use or inability to use the service. </li>
          <li> Unauthorized access or use of your data. </li>
          <li> Statements or conduct of any third party on the platform </li>
        </ul>
        <p>
          {' '}
          Our total liability for all claims under these Terms shall not exceed the amount you paid
          to use our services in the twelve (12) months preceding the claim.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Indemnification',
    content: (
      <>
        <h3>
          You agree to indemnify, defend and hold harmless Monadic DNA and its affiliates, officers,
          agents, partners, and employees from any claim or demand, including reasonable attorneys'
          fees, arising out of:
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> Your use of the services. </li>
          <li>Your violation of these Terms. </li>
          <li> Your violation of any rights of another party or applicable law. </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Arbitration and Dispute Resolution',
    content: (
      <>
        <h3>
          Any dispute, claim or controversy arising out of or relating to these Terms or the use of
          our services shall be resolved by final and binding arbitration administered by the
          American Arbitration Association under its Commercial Arbitration Rules.
        </h3>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li> The arbitration will be held in New York City, NY. </li>
          <li> Each party shall bear its own costs unless otherwise awarded by the arbitrator. </li>
          <li>
            {' '}
            You agree to waive any right to a jury trial or to participate in a class action
            lawsuit.{' '}
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Force Majeure',
    content:
      'Monadic DNA shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including but not limited to acts of God, labor disputes, governmental action, war, terrorism, pandemics, utility failures, or internet service interruptions.',
  },
  {
    title: 'Severability',
    content:
      'If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary or severed to the extent necessary so that the remaining provisions of these Terms will remain in full force and effect.',
  },
  {
    title: 'Assignment',
    content:
      'You may not assign or transfer your rights or obligations under these Terms without prior written consent. Monadic DNA may freely assign or transfer these Terms without restriction.',
  },
];
