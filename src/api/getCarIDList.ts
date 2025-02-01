import { GetCarIdListProps } from '@/types/getCarIdListProps'

export const getCarIdList = async ({
  selectedCar,
  selectedYear,
}: GetCarIdListProps) => {
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${selectedCar}/modelyear/${selectedYear}?format=json`
    )

    const data = await res.json()

    const car = data.Results || []

    return {
      car,
    }
  } catch (error) {
    console.error('Error fetching car makes:', error)
    return {
      car: [],
    }
  }
}
