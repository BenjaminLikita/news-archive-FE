import { useMemo, useState } from 'react'
import Calendar from 'react-calendar'
import '../Calendar.css';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {

  const [value, onChange] = useState<Value>(new Date());
  

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default CalendarComponent