import { ChangeCar } from '@/components/forms/ChangeCar'

import { getCarsList } from '@/api/getCarsList'

export default async function Home() {
  const { simplifiedCars } = await getCarsList()

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center bg-gray-200 rounded-2xl p-10">
        <ChangeCar cars={simplifiedCars} />
      </div>
    </main>
  )
}
