const currentYear = new Date().getFullYear()

export const yearsArray = Array.from(
  { length: currentYear - 2015 + 1 },
  (_, index) => {
    const year = String(2015 + index)
    return { id: year, name: year }
  }
)
