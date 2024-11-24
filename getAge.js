function getAge(day, month, year) {
  const data = `${year}-${month}-${day}`
  let inputDate = new Date(data)
  let presentDate = new Date()


  let years = presentDate.getFullYear() - inputDate.getFullYear();
  let months = presentDate.getMonth() - inputDate.getMonth();
  let days = presentDate.getDate() - inputDate.getDate();

  if (days < 0) {
    months--
    const lastMonth = new Date(presentDate.getFullYear(), presentDate
      .getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--
    months += 12
  }

  return { years, months, days }

}

export default getAge