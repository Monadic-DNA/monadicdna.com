export default function SecurityPage(){
    return(
        <main>

     
    <div >
      <section
        id="securityOverview"
        className="bg-neutral-900 pt-24 min-h-[70vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Industry-Leading Security Standards
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Your genetic data deserves the highest level of protection. Our
                security infrastructure is built with multiple layers of
                encryption and privacy-preserving technologies.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-neutral-700 rounded-lg p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    256-bit
                  </div>
                  <p className="text-gray-400">
                    Military-grade encryption for all genetic data
                  </p>
                </div>
                <div className="border border-neutral-700 rounded-lg p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    SOC 2
                  </div>
                  <p className="text-gray-400">
                    Certified security controls and processes
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#securityFeatures"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium animate__animated animate__pulse animate__infinite animate__slower"
                >
                  Explore Security Features
                </a>
                <a
                  href="#"
                  className="px-8 py-3 border border-gray-500 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                >
                  Download Security Whitepaper
                </a>
              </div>
            </div>
            <div className="lg:block animate__animated animate__fadeInRight">
              <div className="bg-neutral-800 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <h3 className="text-white font-semibold">
                      End-to-End Encryption
                    </h3>
                  </div>
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="text-white font-semibold">
                      Advanced Protection
                    </h3>
                  </div>
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                    <h3 className="text-white font-semibold">Biometric Auth</h3>
                  </div>
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                    <h3 className="text-white font-semibold">Audit Logs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  
    <div >
      <section id="securityFeatures" className="bg-neutral-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Multiple layers of security to protect sensitive genetic data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                End-to-End Encryption
              </h3>
              <p className="text-neutral-600">
                256-bit AES encryption for data at rest and TLS 1.3 for data in
                transit. Your genetic data is always encrypted.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-14 w-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Access Control</h3>
              <p className="text-neutral-600">
                Role-based access control (RBAC) with granular permissions and
                multi-factor authentication.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Isolation</h3>
              <p className="text-neutral-600">
                Complete data isolation with dedicated infrastructure and
                private cloud deployment options.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="h-14 w-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Audit Logging</h3>
              <p className="text-neutral-600">
                Comprehensive audit trails for all data access and system
                changes with real-time alerts.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-14 w-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <p className="text-neutral-600">
                GDPR, HIPAA, and SOC 2 Type II compliant infrastructure and
                processes.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Backups</h3>
              <p className="text-neutral-600">
                Automated encrypted backups with geo-redundancy and
                point-in-time recovery options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>

    )
}