const formatShortDate = (date) => date.toISOString().split('T')[0].substring(2);

const getShortDate = (plusDays = 0) => {
  const today = new Date();
  today.setDate(today.getDate() + plusDays);
  return formatShortDate(today);
};

export default getShortDate;
