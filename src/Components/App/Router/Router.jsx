import { Route, Routes } from "react-router-dom"
import { Login } from "../../Pages/Login"
import { Products } from "../../Pages/Products"
import { Home } from "../../Pages/Home"
import { Search } from "../../Pages/Search/Search"
import { ProductList } from "../../Pages/ProductList"

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>

            <Route path="/products">
                <Route index element={<ProductList />}></Route>
                <Route path=":group_id" element={<ProductList />}>
                    <Route path=":product_id" element={<></>}></Route>
                </Route>
            </Route>

            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}