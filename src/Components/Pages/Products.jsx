import { useAuth } from "../App/Auth/Auth"
import { Layout } from "../App/Layout/Layout"

export const Products = () => {
    const { loginData } = useAuth();
    return(
        <Layout title="Products" description="Here's a list of our products!">
            {!loginData ? (
                <p>You're not logged in.</p>
            ) : (
                <p>You're logged in as {loginData.username}</p>
            )}
        </Layout>
    )
}