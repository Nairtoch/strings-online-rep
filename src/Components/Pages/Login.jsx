import { Layout } from "../App/Layout/Layout";
import { useForm } from 'react-hook-form';
import { useAuth } from "../App/Auth/Auth";
import axios from 'axios';

export const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const {loginData, setLoginData } = useAuth()

    const sendLoginRequest = async (data) => {
        const formData = new FormData();
        formData.append("username", data.username)
        formData.append("password", data.password)
        const result = await axios.post('https://api.mediehuset.net/token', formData)
        handleSessionData(result.data);
    }

    const handleSessionData = data => {
        if(data){
            sessionStorage.setItem("token", JSON.stringify(data));
            setLoginData(data)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }

    return(
        <Layout title="Login to your StringsOnline" description="Your StringsOnline">
            {!loginData && !loginData.username ? (
            <form onSubmit={handleSubmit(sendLoginRequest)}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter username"
                        {...register("username", { required: true })} />
                    {errors.username && (
                        <span>Please enter your username.</span>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter password"
                        {...register("password", { required: true })} />
                    {errors.password && (
                        <span>Please enter your password.</span>
                    )}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            ) : (
                <div>
                    <p>You're logged in as {loginData.username}</p>
                    <button onClick={logOut}>Logout</button>
                </div>
            )}
        </Layout>
    )
}