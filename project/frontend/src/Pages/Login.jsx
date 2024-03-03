import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response  = await axios.post("http://localhost:4000/api/login", data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg md:w-2/6">
                <h1 className="text-3xl font-bold mb-4">Facebook</h1>
                <p className="text-gray-600 mb-8">
                    Facebook helps you connect and share with the people in your life.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Email or Phone Number"
                        {...register("emailOrMobile", {
                            required: {
                                value: true,
                                message: 'Email or mobile is required'
                            },
                            pattern: {
                                value: /^(?:\w+@\w+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?|\d{10,12})$/,
                                message: 'Invalid email address or Mobile number'
                            }
                        })}
                    />
                    {errors.emailOrMobile && <p className="text-red-500">{errors.emailOrMobile.message}</p>}

                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password should be at least 6 characters long'
                            }
                        })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message} </p>}
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        type="submit"
                    >
                        Log In
                    </button>
                    <a className="text-blue-500 hover:underline" href="#">
                        Forgotten password?
                    </a>
                    <hr className="border-gray-300" />
                </form>
                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                        type="button"
                        onClick={()=> navigate('/signup')}
                    >
                        Create New Account
                    </button>
            </div>
        </div>
    );
};

export default Login;