import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
    console.log('dateString:', dateString); // Log the dateString to see its value
    
    // Optional: Check if dateString is indeed a valid ISO string
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateString)) {
      return <div>Invalid Date</div>;
    }
    
    const date = parseISO(dateString);
    console.log('Parsed date:', date);  // Log the parsed date
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  }
  