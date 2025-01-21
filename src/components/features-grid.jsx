import { Card } from "@/components/ui/card";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Free secure storage & insights",
    },
    {
      title: "Bring your data from services like 23&Me and Ancestry DNA",
    },
    {
      title: "Share or delete your data at any time",
    },
  ];

  return (
    <section className="w-full md:py-16 py-16 bg-[#F6F6F6] border-y border-y-black">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`flex w-[280px] sm:w-auto bg-gradient-to-tr rounded-none border border-black items-start gap-2 px-3 py-2 sm:px-3 sm:py-2 ${
                index === 0
                  ? "from-[#FCFFD7] to-[#EAF9FF]"
                  : index === 1
                  ? "from-[#DDE4FF] to-[#EAF9FF]"
                  : "from-[#FFFEF9] to-[#FFE5D7]"
              }`}
            >
              <svg
                className="h-4 w-4 flex-shrink-0 mt-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                fill="none"
                viewBox="0 0 16 17"
              >
                <path
                  stroke="#1A1A1A"
                  d="M1.493 8.515C3.3 7.802 4.53 6.899 5.505 5.763c.994-1.16 1.707-2.553 2.5-4.149 1.053 2.046 1.979 3.581 3.07 4.73.917.966 1.94 1.647 3.222 2.146a12.7 12.7 0 0 0-3.361 1.934c-1.307 1.055-2.48 2.477-3.07 4.294-.64-1.502-1.396-2.706-2.387-3.697C4.425 9.967 3.13 9.178 1.493 8.515Z"
                ></path>
                <circle
                  cx="8"
                  cy="8.5"
                  r="1.75"
                  fill="#000"
                  stroke="#1A1A1A"
                  strokeWidth="0.5"
                ></circle>
              </svg>
              <p className="text-sm text-black font-semibold text-left flex-1 leading-tight">
                {feature.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}