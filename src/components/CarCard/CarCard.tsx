import { CarCardProps } from '@/components/CarCard/types'

const CarCard = ({ modelId, makeName, modelName, year }: CarCardProps) => {
  return (
    <div
      key={modelId}
      className="m-4 p-5 bg-gray-200 rounded-2xl w-64 sm:w-96 text-center"
    >
      <p>Car Name: {makeName}</p>
      <p>Car Model: {modelName}</p>
      <p>Car Year: {year}</p>
    </div>
  )
}

export default CarCard
