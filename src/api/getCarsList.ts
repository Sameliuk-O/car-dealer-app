import { CarTypes } from '@/types/carTypes'

export const getCarsList = async () => {
  try {
    const res = await fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    )

    const data = await res.json()

    const carMakes: CarTypes[] = data.Results || []

    const simplifiedCars = carMakes.map((car) => ({
      id: car.MakeId,
      name: car.MakeName,
    }))
    return {
      simplifiedCars,
    }
  } catch (error) {
    console.error('Error fetching car makes:', error)
    return {
      simplifiedCars: [],
    }
  }
}
