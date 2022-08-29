import { Route, Routes } from "react-router-dom"
import { Login } from "../../Pages/Login"
import { Products } from "../../Pages/Products"
import { Home } from "../../Pages/Home"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}