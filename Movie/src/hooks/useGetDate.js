const useGetDate = () => {

const currentDate = new Date();

let sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  return day + '.' + month + '.' + year;
}

const nowDate = formatDate(currentDate);
const startDate = formatDate(sixMonthsAgo);
return [startDate, nowDate]
}

export default useGetDate
