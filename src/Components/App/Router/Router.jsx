import { Route, Routes } from "react-router-dom"
import { Login } from "../../Pages/Login"
import { Products } from "../../Pages/Products"
import { Home } from "../../Pages/Home"
import { Search } from "../../Pages/Search/Search"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}