export default function PhoneMockup({ children, className = "" }) {
    return (
      <div className={`relative w-full aspect-[320/650] rounded-[3rem] border-[14px] border-black bg-white ${className}`}>
        {children}
      </div>
    )
  }
  
  