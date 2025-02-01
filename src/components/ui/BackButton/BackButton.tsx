'use client'

import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <button
      onClick={handleBack}
      className="fixed bottom-4 left-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
    >
      Go Back
    </button>
  )
}

export default BackButton
