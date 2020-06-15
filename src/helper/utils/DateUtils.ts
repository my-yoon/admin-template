/**
   * YYYY-MM-DD 날짜를 리턴
   */
export const getDate = (addDay: number = 0) => {
  const date = new Date()
  const year = date.getFullYear()
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate() + addDay}`
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  return `${year}-${month}-${day}`
}
