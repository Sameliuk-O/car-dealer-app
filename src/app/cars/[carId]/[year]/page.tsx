import { CarPageProps } from '@/types/carPageProps'
import { notFound } from 'next/navigation'

import { CarCard } from '@/components/CarCard'
import { BackButton } from '@/components/ui/BackButton'

import { getCarIdList } from '@/api/getCarIDList'

const CarPage = async ({ params }: CarPageProps) => {
  const { carId, year } = params

  if (!carId || !year) {
    notFound()
    return
  }

  const { car } = await getCarIdList({ selectedCar: carId, selectedYear: year })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <h1>Cars List</h1>
        <div className="flex flex-wrap justify-center">
          {car.map((el) => (
            <CarCard
              makeName={el.Make_Name}
              modelName={el.Model_Name}
              modelId={el.Model_ID}
              year={year}
            />
          ))}
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default CarPage
