
import { format, parseISO } from "date-fns";


export default function formatingData(date?: string) {
  if (date) {
    const dateObj = parseISO(date);
    return format(dateObj, 'dd.MM.yyyy');
  }
  return '';
}