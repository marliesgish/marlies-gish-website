import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

const DateFormatter: React.FC<Props> = ({ dateString }) => {
  if (dateString === undefined) return;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL yyyy")}</time>;
};

export default DateFormatter;
