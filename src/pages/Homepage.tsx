// import Navbar from '../components/Navbar'

import CalendarComponent from "../components/Calendar"
import Container from "../components/Container"

const Homepage = () => {
  return (
    <Container>
        <div className="py-5 px-3">
            <CalendarComponent />

            <form action="http://localhost:3000/upload" encType="multipart/form-data" method="post">
              <input type="file" name="file" id="" />
              <button>Submit</button>
            </form>
        </div>
        <div>
          <h1>hello world</h1>
        </div>
    </Container>
  )
}

export default Homepage