import { Route, Routes } from "react-router-dom"

/* Component */
import CustomerRouters from "./Routers/CustomerRouters"
import AdminRouters from "./Routers/AdminRouter"

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/*' element={<CustomerRouters />}></Route>
          <Route path='/admin/*' element={<AdminRouters />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
