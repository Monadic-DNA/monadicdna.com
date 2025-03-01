export const metadata = {
  title: 'Team',
}
export default function TeamPage() {
  const founders = [
    {
      name: "Vishakh",
      role: "Co-founder",
      bio: "Co-founded Cryptonomic with Kapil (instrumental in launching Tezos, did build work for some of the world's largest financial institutions on key efforts such as Project Guardian), 10+ years in derivatives finance (JP Morgan), MS, Computer Science, Columbia University",
      image: "/images/team/vishakh.jpg",
      socials: {
        twitter: "https://x.com/vishakh",
      }
    },
    {
      name: "Jay Meattle",
      role: "Co-founder",
      bio: "Founded Shareaholic (trusted by 200K+ websites reaching over 300 million devices each month), MIT TR35 India honoree, B.S. cum laude, Computer Science, Tufts University",
      image: "/images/team/jay.jpg",
      socials: {
        twitter: "https://x.com/meattle",
      }
    },
    {
      name: "Kapil",
      role: "Co-founder",
      bio: "Co-founded Cryptonomic with Vishakh, AI/ML researcher (10+ years), co-created first financial instrument on Ethereum, PhD, Computer Science, Columbia University",
      useAnonymousImage: true
    }
  ];

  const teamMembers = [
    {
      name: "Bhaskar",
      role: "Software Architect",
      bio: "",
      image: "/images/team/bhaskar.jpg",
    },
    {
      name: "Navi",
      role: "UI/UX Designer",
      bio: "",
      image: "/images/team/navi.jpg",
    },
    {
      name: "Siddharth",
      role: "Full Stack Engineer",
      bio: "",
      image: "/images/team/siddharth.jpg",
    },
    {
      name: "Aisha",
      role: "Mobile Developer",
      bio: "",
      image: "/images/team/aisha.jpg",
    },
    {
      name: "Soumya",
      role: "Smart Contract Engineer",
      bio: "",
      image: "/images/team/soumya.jpg",
    },
    {
      name: "Amardeep",
      role: "DevOps Engineer",
      bio: "",
      image: "/images/team/amardeep.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-16 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Monadic DNA team has been working at the intersection of crypto, encryption, data analytics, and finance since 2020. As early adopters of frontier technologies, we have built products used by millions of consumers around the world as well as some of the largest enterprises.
          </p>
        </div>

        {/* Content Container with max-width */}
        <div className="max-w-[900px] mx-auto">
          {/* Founders Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {founders.map((founder, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6"
              >
                <div className="relative flex flex-col items-center md:items-start">
                  <div className="relative w-1/2 md:w-full mx-auto aspect-square mb-4 overflow-hidden rounded-lg">
                    {/* Replace with actual images when available */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      {founder.image && !founder.useAnonymousImage ? (
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#8a9ca7] to-[#6b7f8a]">
                          <span className="text-4xl font-bold text-white">
                            {founder.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-full mx-auto text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 font-mono tracking-tight uppercase">{founder.name}</h3>
                    <p className="text-[#D782BA] mb-3 font-medium">{founder.role}</p>
                    <p className="text-gray-600 mb-4 text-sm">{founder.bio}</p>
                    
                    {founder.socials && (
                      <div className="flex justify-center md:justify-start space-x-3">
                        {Object.entries(founder.socials).map(([platform, url]) => (
                          <a 
                            key={platform} 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
                          >
                            <span className="sr-only">{platform}</span>
                            {platform === 'twitter' && (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            )}
                            {platform === 'github' && (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            )}
                            {platform === 'linkedin' && (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white text-center p-3"
              >
                <div className="relative">
                  <div className="relative w-1/2 sm:w-3/4 md:w-full mx-auto aspect-square mb-3 overflow-hidden rounded-lg">
                    {/* Replace with actual images when available */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#8a9ca7] to-[#6b7f8a]">
                          <span className="text-2xl font-bold text-white">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold mb-1 text-gray-900 font-mono tracking-tight uppercase">{member.name}</h3>
                  <p className="text-[#D782BA] text-sm font-medium">{member.role}</p>
                  
                  {member.socials && Object.keys(member.socials).length > 0 && (
                    <div className="flex justify-center space-x-3 mt-2">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a 
                          key={platform} 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === 'twitter' && (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          )}
                          {platform === 'github' && (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          )}
                          {platform === 'linkedin' && (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Mission Section */}
      <div className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#D782BA] to-[#9F7AEA] bg-clip-text text-transparent font-mono tracking-tight uppercase">Join Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a future where genomic data remains private, secure, and under individual control.
              If you're passionate about privacy and health tech, we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}