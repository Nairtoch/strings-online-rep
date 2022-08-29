import { Route, Routes } from "react-router-dom"
import { Products } from "../../Pages/Products"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element="Home"></Route>
            <Route path="/products" element={<Products />}></Route>
        </Routes>
    )
}