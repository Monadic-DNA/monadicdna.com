export default function ForDevelopersPage(){
    return(
   <main>

  

  <div id="developers">
    <section
      id="developerHero"
      className="bg-neutral-900 pt-24 min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build with Monadic DNA API
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Access powerful genomics tools with our developer-friendly API.
              Build secure, privacy-focused DNA analysis applications with
              enterprise-grade infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apiReference"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View API Documentation
              </a>
              <a
                href="#developerDocs"
                className="px-8 py-3 border border-gray-500 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
              >
                Get Started
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">99.9%</span>
                <span className="text-gray-400">Uptime SLA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">256-bit</span>
                <span className="text-gray-400">Encryption</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-gray-400">Support</span>
              </div>
            </div>
          </div>
          <div className="lg:block hidden animate__animated animate__fadeInRight">
            <img
              src="https://monadic-v0.vercel.app/images/illsutration.svg"
              alt="DNA Analysis Illustration"
              className="w-full max-w-lg mx-auto transition-opacity duration-300 opacity-100"
              width={500}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="root">
    <section id="developerDocs" className="bg-neutral-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Developer Documentation
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to integrate Monadic DNA into your applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate__animated animate__fadeInUp">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Start Guide</h3>
            <p className="text-neutral-600 mb-4">
              Get up and running with Monadic DNA API in minutes with our
              step-by-step guide.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn more →
            </a>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">API Reference</h3>
            <p className="text-neutral-600 mb-4">
              Complete API documentation with examples and use cases for all
              endpoints.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View documentation →
            </a>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">SDK Resources</h3>
            <p className="text-neutral-600 mb-4">
              Download SDKs and tools for your preferred programming language.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Browse SDKs →
            </a>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm animate__animated animate__fadeIn">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Code Example</h3>
              <p className="text-neutral-600 mb-6">
                Simple integration example using our REST API
              </p>
            </div>
            <div className="bg-neutral-900 rounded-lg p-6">
              <pre className="text-green-400 overflow-x-auto">
                <code>
                  {"\n"}curl -X POST https://api.monadic.dna/v1/analyze \{"\n"}
                  {"  "}-H "Authorization: Bearer YOUR_API_KEY" \{"\n"}
                  {"  "}-H "Content-Type: application/json" \{"\n"}
                  {"  "}-d '{"{"}
                  {"\n"}
                  {"    "}"sample_id": "sample_123",{"\n"}
                  {"    "}"analysis_type": "ancestry",{"\n"}
                  {"    "}"parameters": {"{"}
                  {"\n"}
                  {"      "}"population_groups": ["EUR", "AFR", "ASN"]{"\n"}
                  {"    "}
                  {"}"}
                  {"\n"}
                  {"  "}
                  {"}"}'{"\n"}
                </code>
                {"\n"}
                {"            "}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="root">
    <section id="apiReference" className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            API Reference
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive documentation for the Monadic DNA API endpoints
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-neutral-800 rounded-xl p-6 sticky top-24 animate__animated animate__fadeInLeft">
              <h3 className="text-xl font-semibold text-white mb-6">
                API Endpoints
              </h3>
              <nav className="space-y-4">
                <a
                  href="#authentication"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Authentication
                </a>
                <a
                  href="#analysis"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  DNA Analysis
                </a>
                <a
                  href="#reports"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Reports
                </a>
                <a
                  href="#samples"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Sample Management
                </a>
                <a
                  href="#webhooks"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Webhooks
                </a>
              </nav>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8 animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Authentication
              </h3>
              <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                <pre className="text-green-400 overflow-x-auto">
                  <code>
                    {"\n"}POST /v1/auth/token{"\n"}Content-Type:
                    application/json{"\n"}
                    {"\n"}
                    {"{"}
                    {"\n"}
                    {"  "}"api_key": "your_api_key",{"\n"}
                    {"  "}"client_id": "your_client_id"{"\n"}
                    {"}"}
                    {"\n"}
                  </code>
                  {"\n"}
                  {"              "}
                </pre>
              </div>
              <p className="text-gray-300 mb-4">
                Returns an access token for API authentication.
              </p>
              <div className="border-t border-neutral-700 pt-4">
                <h4 className="text-white font-medium mb-2">Response</h4>
                <div className="bg-neutral-900 rounded-lg p-4">
                  <pre className="text-green-400 overflow-x-auto">
                    <code>
                      {"\n"}
                      {"{"}
                      {"\n"}
                      {"  "}"access_token": "eyJhbGciOiJ...",{"\n"}
                      {"  "}"token_type": "Bearer",{"\n"}
                      {"  "}"expires_in": 3600{"\n"}
                      {"}"}
                      {"\n"}
                    </code>
                    {"\n"}
                    {"                "}
                  </pre>
                </div>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                DNA Analysis
              </h3>
              <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                <pre className="text-green-400 overflow-x-auto">
                  <code>
                    {"\n"}POST /v1/analysis{"\n"}Authorization: Bearer {"{"}
                    access_token{"}"}
                    {"\n"}Content-Type: application/json{"\n"}
                    {"\n"}
                    {"{"}
                    {"\n"}
                    {"  "}"sample_id": "sample_123",{"\n"}
                    {"  "}"analysis_type": "ancestry",{"\n"}
                    {"  "}"parameters": {"{"}
                    {"\n"}
                    {"    "}"population_groups": ["EUR", "AFR", "ASN"]{"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    {"}"}
                    {"\n"}
                  </code>
                  {"\n"}
                  {"              "}
                </pre>
              </div>
              <p className="text-gray-300">
                Initiates a DNA analysis request for a specific sample.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Rate Limits
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-4 text-gray-300">API Plan</th>
                    <th className="py-4 text-gray-300">Requests/min</th>
                    <th className="py-4 text-gray-300">Daily Limit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-neutral-700">
                    <td className="py-4">Basic</td>
                    <td className="py-4">60</td>
                    <td className="py-4">10,000</td>
                  </tr>
                  <tr className="border-b border-neutral-700">
                    <td className="py-4">Pro</td>
                    <td className="py-4">120</td>
                    <td className="py-4">50,000</td>
                  </tr>
                  <tr>
                    <td className="py-4">Enterprise</td>
                    <td className="py-4">Unlimited</td>
                    <td className="py-4">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </main>
    )
}