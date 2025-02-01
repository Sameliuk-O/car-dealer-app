'use client'

import { ChangeEvent, useState } from 'react'

import { SelectorProps } from '@/components/ui/selector/types'
import { SelectedTypes } from '@/types/selectedTypes'

const Selector = ({ title, id, options, onChange }: SelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectedTypes | null>(
    null
  )

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value
    const selectedItem = options.find((el) => String(el.id) === selectedId)

    if (selectedItem) {
      setSelectedOption(selectedItem)
      onChange(selectedItem)
    }
  }

  return (
    <div className="w-64 mx-auto sm:w-96">
      <label
        htmlFor={id}
        className="block text-lg font-semibold text-gray-800 mb-2"
      >
        {title}
      </label>

      <select
        id={id}
        value={selectedOption?.id || ''}
        onChange={handleChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white transition duration-200 ease-in-out hover:border-indigo-400"
      >
        <option value="" disabled className="text-gray-500">
          Choose an option
        </option>
        {options?.map((el) => (
          <option value={el.id} key={el.id} className="text-gray-700">
            {el.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selector
