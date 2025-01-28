import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">404 - Not Found</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          Oops! The page you're looking for doesn't exist in this DNA sequence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/">
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-white text-gray-800 border-gray-300 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Return Home
            </Button>
          </Link>
          <Link href="/waitlist">
            <Button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

