// import Navbar from '../components/Navbar'

import { useMemo, useState } from "react";
import CalendarComponent from "../components/Calendar"
import Container from "../components/Container"
import Headlines from "../components/Headlines";



export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const Homepage = () => {

  const [value, onChange] = useState(new Date());
  const [headlines, setHeadlines] = useState([])



  useMemo(async () => {
    const date = new Date(value)
    const datePath = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const response = await fetch(`http://localhost:3000/headlines/${datePath}`)
    const data = await response.json()
    setHeadlines(data)
  }, [value])

  

  


  return (
    <Container>
        <div className="py-5 px-3">
            <CalendarComponent value={value} onChange={onChange} />

            
        </div>
        <div>
          <h1>hello world</h1>
          {
            headlines.length > 0 ? <Headlines headlines={headlines} /> : <p>No Headlines Available</p>
          }
          {/* <img src="http://localhost:3000/image/hello" alt="" /> */}
        </div>
    </Container>
  )
}

export default Homepage