'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Selector } from '@/components/ui/Selector'

import { yearsArray } from '@/mockData/yearsArray'

import { SelectedTypes } from '@/types/selectedTypes'

const ChangeCar = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState<SelectedTypes | null>(null)
  const [selectedYear, setSelectedYear] = useState<SelectedTypes | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCarChange = (car) => {
    setSelectedCar(car)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
  }

  const isButtonDisabled = !selectedCar || !selectedYear

  const handleClick = (e) => {
    if (isButtonDisabled) {
      e.preventDefault()
      return
    }

    setIsLoading(true)
  }

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Selector
          title="Select the car brand"
          id="car"
          options={cars}
          onChange={handleCarChange}
        />
        <Selector
          title="Select the year of issue"
          id="year"
          options={yearsArray}
          onChange={handleYearChange}
        />
      </div>

      <Link
        href={
          isButtonDisabled
            ? '#'
            : `/cars/${selectedCar?.id}/${selectedYear?.id}`
        }
        className={`${
          isButtonDisabled
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        } py-2 px-4 rounded-lg transition-all duration-200 w-full text-center`}
        onClick={handleClick}
      >
        {isLoading ? 'Loading ...' : 'Next'}
      </Link>
    </>
  )
}

export default ChangeCar
