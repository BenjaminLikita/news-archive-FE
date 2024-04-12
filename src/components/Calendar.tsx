import { FC } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css';
import { Value } from '../pages/Homepage';



type CalendarProps = {
  value: Value;
  // onChange: (value: Value, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Dispatch<SetStateAction<Date>>;
  onChange: any;
}

const CalendarComponent: FC<CalendarProps> = ({value, onChange}) => {
  

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default CalendarComponent