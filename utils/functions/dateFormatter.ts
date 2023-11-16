import moment from 'moment';

export const dateFormatter = (start: Date, end: Date): string => {
  const startDate = moment(start).format('DD.MM');
  const endDate = moment(end).format('DD.MM');

  return `${startDate} - ${endDate}`;
};

export const formatDate = (inputDateStr: string) => {
  const inputDate = moment(inputDateStr);

  const formattedDate = inputDate.format('MM / DD / YYYY HH:mm');

  return formattedDate;
};
