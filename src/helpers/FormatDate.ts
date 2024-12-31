export const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  let month = (date.getMonth() + 1).toString();
  if (month.length === 1) month = "0" + month;

  let day = date.getDate().toString();
  if (day.length === 1) day = "0" + day;

  return year + "-" + month + "-" + day;
};
