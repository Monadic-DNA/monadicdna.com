export default function PhoneMockup({ children, className = "" }) {
    return (
      <div className={`relative w-full aspect-[320/650] rounded-[3rem] border-[14px] border-black bg-white ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[32px] bg-black rounded-b-[1rem]" />
        {children}
      </div>
    )
  }
  
  