const dateParse = (str, separator = "-") => {
  var [month, date, year] = str.split(separator);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date = parseInt(date);
  month = months[parseInt(month) - 1];
  year = parseInt(year);
  return { date, month, year };
};
export { dateParse };
