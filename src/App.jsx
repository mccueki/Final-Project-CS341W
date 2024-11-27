import { Link, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { Balance } from "./pages/Balance.jsx"

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/balance">Balance</Link>
        </li>
     </ul>
    </nav>
    <Routes>
       <Route path="/" element={ <Home/>} />
       <Route path="/balance" element={ <Balance/>} />
    </Routes>
  </>
  )
}

export default App
