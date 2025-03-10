import React from 'react';

export const metadata = {
  title: 'Lightpaper',
  openGraph: {
    images: [
      {
        url: '/images/social/og-image-logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function LightpaperPage() {
  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk',sans-serif] tracking-wide">
      <div className="container mx-auto px-4 pt-32 md:pt-16 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 tracking-wider">
              <div className="text-5xl md:text-6xl font-black text-darkMain mb-2 tracking-tight relative">
                <span className="relative inline-block">
                  <span className="relative z-10">MONADIC DNA</span>
                </span>
              </div>
              <div className="text-2xl md:text-3xl text-[#4B5563] font-light tracking-[0.2em] mt-3 flex items-center justify-center">
                OPEN, SECURE GENOMICS FOR ALL
              </div>
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto tracking-widest uppercase text-sm">
              Lightpaper &#8226; February 2025
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                Introduction
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                Genetic data is becoming increasingly important in healthcare with CAR-T
                cell therapy, CRISPR and personalized medicine already enjoying early
                successes. The costs of genetic sequencing are declining at a Moore's
                law rate<sup><a href="#reference-1" id="ref-1" className="text-[#af4a8c]">[1]</a></sup>. Newborns across the world are being genetically tested by
                law<sup><a href="#reference-2" id="ref-2" className="text-[#af4a8c]">[2]</a></sup>. The stage is set for pervasive sequencing for public health and
                medical care. Yet, not only is there a paucity of genetic data available
                for research purposes<sup><a href="#reference-3" id="ref-3" className="text-[#af4a8c]">[3]</a></sup> but the existing personal genomics services
                with the largest datasets have failed to open and monetize their
                data<sup><a href="#reference-4" id="ref-4" className="text-[#af4a8c]">[4]</a></sup>.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                The Monadic DNA project, consisting of two apps for bootstrapping an
                ecosystem and an open, decentralized protocol for sustaining it, seeks
                to revolutionize the genomics space by immediately unlocking the latent
                value of genomic data for personal genomics enthusiasts, patients, study
                participants, academic researchers, pharmaceutical companies, citizen
                science projects and biohackers. By following a bottom up approach with
                strong, well-placed incentives and frontier privacy-enhancing
                technologies such as FHE and MPC, we aim to make millions of new genetic
                sequences available for analysis and prepare the ground for the secure
                storage and processing of billions in the future. This will unlock a
                range of transformative applications in medicine, lifestyle
                optimization, healthspan extension and unforeseen disruptive
                applications that emerge from the open and decentralized nature of the
                platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                Exemplar Applications
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Personal genomics has immediate and practical utility for people so
                there is no solution looking for a problem. We therefore start with
                useful applications to deliver value to users with a strong product
                focus and then back out the technology and underlying protocol
                accordingly.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-darkMain">
                Monadic DNA Mobile App (Code Name: Monadic Vault)
              </h3>
              
              <div className="mb-8 flex flex-col items-center">
                <img 
                  src="/images/lightpaper/monadic-dna-mobile-app.jpg" 
                  alt="Monadic DNA Mobile App Screenshots" 
                  className="rounded-t-lg max-w-full border border-b-0 border-[#af4a8c]/10"
                  width={800}
                  height={400}
                />
                <div className="w-full max-w-[800px] bg-[#af4a8c]/5 py-2 px-4 text-center text-[#4B5563] text-sm italic rounded-b-lg border-t border-[#af4a8c]/10">
                  Prototype of the Monadic DNA Mobile App
                </div>
              </div>

              <p className="text-[#4B5563] leading-relaxed mb-4">
                Monadic Vault is meant for regular users who have been underserved by
                incumbents such as 23andMe. The app allows users to either bring their
                existing data from other genomics services or get freshly sequenced by
                Monadic DNA, store their data securely, get health, ancestry and
                lifestyle insights and monetize their data.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                The app uses fully homomorphic encryption (FHE) to encrypt the user's
                data and uploads it to our servers for now and, eventually, to a
                decentralized store such as nilDB. Using FHE, we can run computations on
                the server side without ever needing to decrypt the data. The results
                are sent back to the users' app where only the user is able to look at
                or share the results.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                As 23andMe with its 16 million users has a doubtful future<sup><a href="#reference-5" id="ref-5" className="text-[#af4a8c]">[5]</a></sup>, both our
                marketing and onboarding experience will focus on acquiring these users
                with strong messaging and hand holding through the data migration
                process. Users may be given five free insights upon onboarding and could
                then receive a new insight through a mobile notification every two weeks
                to maintain engagement. A marketplace of insights will also allow third
                parties to bring in and monetize their expertise. Finally, other apps,
                especially in health and fitness, will be able to connect their accounts
                to their users' Monadic DNA account to combine DNA insights with other
                datasets. For example, Whoop could recommend either sprinting or jogging
                to their users depending on their genetic profiles.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-darkMain">
                Monadic Pools <sup><a href="#reference-6" id="ref-6" className="text-[#af4a8c]">[6]</a></sup>
              </h3>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Monadic Pools is targeted towards more savvy users who have experience
                with DeFi apps, NFT marketplaces and memecoin platforms.
                On this platform, people such as researchers and biohackers create
                funded research pools into which users deposit their genomes in return
                for token rewards. The app emphasizes virality and engagement. For
                gamification, participants earn points for various activities on
                incentivized leaderboards.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                The primary participants are:
              </p>
              <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                <li>Pool creators who want to run a study or analysis</li>
                <li>Users who want to monetize their genomic data through pool rewards</li>
                <li>Funders such as disease communities, biohacking groups or social media groups who want to fund pools</li>
                <li>Delegators who act on users' behalf to enroll them into pools</li>
              </ul>
              
              <div className="mb-8 flex flex-col items-center">
                <img 
                  src="/images/lightpaper/monadic-dna-monadic-pools-app.jpg" 
                  alt="Monadic Pools Application" 
                  className="rounded-t-lg max-w-full border border-b-0 border-[#af4a8c]/10"
                  width={800}
                  height={400}
                />
                <div className="w-full max-w-[800px] bg-[#af4a8c]/5 py-2 px-4 text-center text-[#4B5563] text-sm italic rounded-b-lg border-t border-[#af4a8c]/10">
                  Rough sketch of the Monadic Pools Application - Incentivized Research pools
                </div>
              </div>
              
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Pool creators specify the name of a pool, along with a funding amount, required attestations (for gating), premium attestations (for extra rewards), number of genomes needed, the code to be run and the visibility of the results. The creator can wholly fund the pool themselves or appeal to the community to fund it. The latter might be useful for, say, the active community of patients of the rare disease Ehlers-Danlos syndrome (EDS) where a researcher creates the pool and asks on the community forum for funding. Required attestations can be used to gate the pool to attested participants from a specific region or those with specific traits or NFTs. Premium attestations multiply rewards for holders of specified traits or NFTs so that an EDS pool can, for example, incentivize sufficient participation by actual EDS patients. The research pool's visibility controls whether the results of the research pool are public, gated or private.  When users sign up, they may be required to fill in a questionnaire to provide metadata for research purposes. Once a pool is fully funded and the required number of genomes is locked in, the code is executed, the results are attested and tokens are paid out to the pool creator, participants and the token holders of the underlying protocol.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                This app will use various technologies provided by the Nillion project.
                nilDB, a decentralized encrypted database using multiparty compute
                (MPC), will be used to store and secure the data. nilQL, a query
                language, will be used to securely extract the required subsets of
                users' genomic data which is then deposited into trusted execution
                environments (TEE), where the code for pools will be run. nilAI, which
                integrates nilDB and TEEs out of the box, will be used for research
                pools which need to use AI foundation models.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                To prevent drop offs in engagement and reduce friction, we are introducing the concept of genomic delegation. While the default path is for the user to maintain complete confidentiality and control over their data, we offer those users who trust us (or any other entity within the ecosystem) the ability to delegate their data, i.e., upload a copy of their data under the control of an account controlled by the delegate. This lets the delegate find suitable pools for users and auto enroll them, thus ensuring constant rewards for users without their constant active participation. In return, the delegates earn a fraction of the rewards as a fee. Delegates compete for users based on their reputations, costs and missions.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Once Monadic Pools is fully implemented, the marketplace and monetization features of Monadic Vault simply become a curated frontend for Monadic Pools functionality, especially delegation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                Ikai Protocol
              </h2>

              <div className="mb-8 flex flex-col items-center">
                <img 
                  src="/images/lightpaper/monadic-dna-ikai-protocol.jpg" 
                  alt="Monadic DNA Ikai Protocol Diagram" 
                  className="rounded-t-lg max-w-full border border-b-0 border-[#af4a8c]/10"
                  width={800}
                  height={400}
                />
                <div className="w-full max-w-[800px] bg-[#af4a8c]/5 py-2 px-4 text-center text-[#4B5563] text-sm italic rounded-b-lg border-t border-[#af4a8c]/10">
                  Ikai DAO serves as the trust anchor of the ecosystem
                </div>
              </div>
              
              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                The objectives of the Ikai protocol are to create a decentralized chain
                of trust, prevent data falsification and duplication and ensure accuracy
                of all insights and computations. The protocol achieves this with a
                combination of onchain attestations, smart contracts and use of Nillion
                blind computing technology. $IKAI, the token for the protocol, serves as
                the utility and governance token for the ecosystem.
              </p>
              
              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                Just as root certificate authorities anchor trust for SSL certificates,
                the Ikai DAO serves as the trust anchor for all verified entities in the
                ecosystem. Using onchain attestations, the DAO certifies labs, genomic
                data, institutions, apps, pool creators, programs, etc. as verified. All
                ecosystem apps can use these attestations to operate on vetted data and
                provide only vetted information to users. Attested entities can
                themselves attest their findings, certifications, etc. and users and
                apps can follow the chain of attestations all the way up to the DAO
                itself. In return for its attestation services, the DAO receives
                payments in $IKAI tokens. Therefore, the DAO has a rational long term
                interest to perform attestations with integrity and accuracy. Attested
                parties also have to perform with integrity or else they might lose
                their attestation and all their own products will become invalidated.
              </p>
              
              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                In addition to decentralized trust, the DAO can also provide dynamic incentives to ecosystem players with $IKAI tokens. These include the usual allocations to app builders and ecosystem entrants of all kinds and community allocations to users and other participants. The DAO can also authorize token allocations to individual apps such as Monadic<sub>Pools</sub><sup><a href="#reference-6" id="ref-6" className="text-[#af4a8c]">[6]</a></sup> to sustain their growth by, say, rewarding the first 10,000 users or the users on various leaderboards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                Data Flow
              </h2>

              <div className="mb-8 flex flex-col items-center">
                <img 
                  src="/images/lightpaper/monadic-dna-data-flow.jpg" 
                  alt="Monadic DNA Data Flow Diagram" 
                  className="rounded-t-lg max-w-full border border-b-0 border-[#af4a8c]/10"
                  width={800}
                  height={400}
                />
                <div className="w-full max-w-[800px] bg-[#af4a8c]/5 py-2 px-4 text-center text-[#4B5563] text-sm italic rounded-b-lg border-t border-[#af4a8c]/10">
                  Ikai DAO is a gatekeeper which accrues value from genomic storage and compute
                </div>
              </div>

              <p className="text-[#4B5563] leading-relaxed mb-4">
                Once a user provides a saliva sample and sends it in by mail, a verified
                lab sequences their DNA and posts it to the API of a verified app, e.g.
                Monadic Vault. Most labs allow only anonymous identifiers to be provided
                and convey the sequenced data to the apps accordingly. Thus, while the
                data is not encrypted at source, it is private and anonymous. In the
                future, Monadic DNA may operate its own labs to provide encryption from
                source.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Apps allow users to claim their data using a predetermined claim code,
                upon which the data is downloaded to the user's device to be encrypted
                and stored on a nilDB cluster. Such clusters, built using Nillion blind
                computing technology, allow data to be stored encrypted over multiple
                database nodes using MPC technology so the security and integrity of the
                data is maintained even if only a single node on the cluster is honest.
                As a risk mitigation measure, Monadic Vault will retain a compressed and
                encrypted copy of the DNA data within app storage as a fallback in case
                the data needs to be migrated to later versions of the technology.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                The Ikai DAO controls which queries can be run on the cluster and by
                whom. Thus, any app which wants to operate on users' secure genetic data
                will have to make a proposal to the DAO to be attested and, further,
                have their template queries for fetching data attested as well. This
                ensures only the minimal set of required data is shared and only
                authorized people have access after paying the protocol. nilDB clusters
                are queried using nilQL and access is controlled using industry standard
                JSON web tokens (JWTs), which the Ikai DAO will incorporate into its
                governance process using onchain attestations.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Credentialed apps such as Monadic Pools can query out the subsets of users' data that they need for processing in pools or gating access to apps, etc. For example, a research pool studying athletic performance may only need a few genetic markers. Before querying, however, apps have to reserve a trusted execution environment (TEE) which allows code to be run on data inside a secure enclave in the cloud. Once an app reserves a TEE, it gets a JWT to query out the users' data as authorized. After receiving all the data it needs for any activity, e.g. a research pool on Monadic Pools, the app executes the code inside the TEE and fetches the result. If the result is a genetic trait for a user, then the app can write it into the nilDB cluster and create a corresponding onchain attestation to validate the stored trait for other actors of the protocol.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                A similar mechanism holds for delegation. If a user chooses an authorized delegate, their app records this onchain which enables the DAO to give carte blanche permissions for the users' nilDB data and traits to the delegate who can then use it for ecosystem actions, e.g., auto-enrolling the user in research pools on Monadic Pools.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Nillion's upcoming nilAI product will combine nilDB and TEEs to offer scalable and secure AI processing of encrypted data.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                There is an alternate data flow using fully homomorphic encryption and decentralized storage for the Monadic Vault rollout but, for the sake of simplicity, this information is being omitted. Note that the Monadic Vault app will be using the alternate flow until the Ikai protocol is ready.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                General Prospects
              </h2>
              <h3 className="text-xl font-semibold mb-4 text-darkMain">
                App Ecosystem
              </h3>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                While Monadic Vault and Monadic Pools will bootstrap the ecosystem and
                demonstrate the latent value of genomic data, we expect fresh,
                unprecedented apps by developers, biohackers, academics and major
                companies to grow the ecosystem in unexpected ways. As an indication,
                these might include:
              </p>
              <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                <li>Apps that combine genetic insights with other biomarkers to provide holistic advice</li>
                <li>Dating apps which match people based on compatible fun traits</li>
                <li>Video games in which a gamer's character is based on their traits</li>
                <li>Music generation based on people's genetic sequences</li>
                <li>AI agents that use genetic traits and other health data to offer custom insights to users</li>
              </ul>
              
              <div className="mb-8"></div>
              
              <h3 className="text-xl font-semibold mb-4 text-darkMain">
                Enterprise
              </h3>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                As mentioned above, newborn children in all fifty US states are now
                required by law to be genetically tested. This is also true in many
                other industrialized nations and will soon also be true in populous
                countries such as India and China as sequencing costs fall. Not only are
                millions of children now being sequenced but this data is required to be
                held by the state well into these children's adulthoods. It is only a
                matter of time before state-run data stores are breached amidst public
                uproar. The end-to-end encryption flow pioneered by Monadic DNA will
                then be adopted to minimize these breaches and keep the data secure
                while still facilitating public health research.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Likewise, medical systems, pharmaceutical companies, IVF clinics,
                insurance companies and genomics providers will have increasingly large
                exposure to the sensitivity of genetic data, especially as it becomes a
                standard part of healthcare and therapeutics through CAR-T, CRISPR,
                personalized medicine and other pioneering technologies. While
                individuals are not significantly privacy-conscious, at the societal
                level there are large penalties for breaches and great reputational
                loss. Just last year, the CEO of United Healthcare was brought before
                Congress<sup><a href="#reference-7" id="ref-7" className="text-[#af4a8c]">[7]</a></sup> to answer for a major breach. 23andMe was also hacked
                recently<sup><a href="#reference-8" id="ref-8" className="text-[#af4a8c]">[8]</a></sup>, leading to great user unease and reluctance by many to use
                their services. Once again, our protocols, technology and expertise will
                facilitate the storage, sharing and processing of genetic data within
                and between enterprise players.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase">
                Conclusion
              </h2>
              <p className="text-[#4B5563] leading-relaxed">
                For far too long, genomic data has been jealously guarded from users by
                floundering companies with no security or privacy guardrails. Monadic
                DNA seeks to create a data governance DAO and enhance it with
                cutting-edge encryption to create an open protocol which can unlock the
                latent potential of sensitive genomic data. We aim to facilitate an app
                ecosystem consisting of two-sided marketplaces, user-friendly personal
                genomics apps and many other novel applications we can't yet conceive
                of. The success of the protocol can come from the general utility of the
                ecosystem, the success of a single successful application or the
                development of novel IP which enables outsized returns from billions
                getting sequenced over the coming decade.
              </p>
            </section>

            <div className="flex items-center justify-center my-16">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#af4a8c]/20 to-transparent" />
              <img
                src="/images/MonadicDNA-icon-sparkle-light.svg"
                alt="Monadic DNA Icon"
                className="mx-8 w-10 h-10"
              />
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#af4a8c]/20 to-transparent" />
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider uppercase flex items-center before:content-['//'] before:mr-2 before:text-[#af4a8c]/70 before:font-mono">
                References
              </h2>
              <div className="space-y-2 text-[#4B5563] text-sm tracking-wide">
                <p id="reference-1" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[01]</span>
                  <a href="https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    The Cost of Sequencing a Human Genome
                  </a>
                  <a href="#ref-1" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-2" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[02]</span>
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK132148/" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    Newborn Screening: An Overview
                  </a>
                  <a href="#ref-2" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-3" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[03]</span>
                  <a href="https://www.ga4gh.org/news_item/future-of-genomic-research-at-risk-without-greater-public-trust-in-how-genetic-data-is-shared-survey-finds/" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    Future of genomic research at risk without greater public trust
                  </a>
                  <a href="#ref-3" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-4" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[04]</span>
                  <a href="https://www.nature.com/articles/d41586-025-00118-y" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    Nature: Genetic data sharing
                  </a>
                  <a href="#ref-4" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-5" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[05]</span>
                  <a href="https://investors.23andme.com/news-releases/news-release-details/23andme-reports-fy2023-fourth-quarter-and-full-year-financial" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    23andMe Reports FY2023 Fourth Quarter and Full Year Financial Results
                  </a>
                  <a href="#ref-5" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-6" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[06]</span>
                  This is a code name for conveying the spirit of the app. It will be replaced with something more appropriate.
                  <a href="#ref-6" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-7" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[07]</span>
                  <a href="https://www.c-span.org/program/public-affairs-event/unitedhealth-ceo-testifies-before-senate-on-cyber-attack-against-change-healthcare/641625" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    UnitedHealth CEO Testifies Before Senate on Cyber Attack
                  </a>
                  <a href="#ref-7" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
                <p id="reference-8" className="flex">
                  <span className="text-[#af4a8c] font-mono mr-2">[08]</span>
                  <a href="https://en.wikipedia.org/wiki/23andMe_data_leak" target="_blank" rel="noopener noreferrer" className="hover:text-[#af4a8c]">
                    23andMe data leak
                  </a>
                  <a href="#ref-8" className="ml-2 text-[#af4a8c]">↩</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 