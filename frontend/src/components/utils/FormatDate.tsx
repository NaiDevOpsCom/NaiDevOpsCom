
const FormatDate: React.FC<{ date: Date}> = ({date}) => {
  // Define months array
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get day, month, year, hours, and minutes
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();
  let hours: number = date.getHours();

  // Convert hours to AM/PM format
  const amPm: string = hours >= 12 ? 'pm' : 'am';
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  hours = hours % 12 || 12; // Convert 0 to 12

  // Format the date string
  const formattedDate: string = `${day} ${months[monthIndex]} ${year}, ${hours} ${amPm}`;
  return formattedDate;
}

export default FormatDate;