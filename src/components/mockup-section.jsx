import FeaturesGrid from './features-grid'
import PhoneDisplay from './phone-display'

export default function MockupSection() {
  return (
    <main className="min-h-screen relative bg-white pt-24 px-4 flex items-center justify-center">
    <div className=''>
          <PhoneDisplay />

          </div>

          <div className='w-full absolute  z-10 bottom-0  '>
            <FeaturesGrid/>
          </div>

    </main>
  )
}

