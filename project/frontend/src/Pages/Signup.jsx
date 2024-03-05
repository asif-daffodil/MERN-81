import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const success = () => toast.success('Account created successfully', {
    position: "top-right",
    duration: 5000,
    style: {
        backgroundColor: '#00f',
        color: '#fff',
        fontSize: '1.5rem'
    }
});

const error = (msg) => toast.error(msg, {
    position: "top-right",
    duration: 5000,
    style: {
        backgroundColor: '#f00',
        color: '#fff',
        fontSize: '1.5rem'
    }
});


const Signup = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'});

    useEffect(() => {
        Cookies.get('fbuserinfo') && navigate('/');
    })

    const onSubmit = async (data) => {
        try {
            const register = await axios.post("http://127.0.0.1:4000/api/register", data);
            register && success();
            reset();
            
        }catch (err) {
            error(err.response.data);
        }   
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Toaster />
            <h1 className="text-3xl font-bold mb-4">Create a New Account</h1>
            <form className="flex flex-col items-center w-96" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="First name"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    {...register('firstName', {
                        required: {
                            value: true,
                            message: 'First name is required'
                        },
                        pattern: {
                            value: /^[A-Za-z. ]*$/,
                            message: 'First name should contain only alphabets'
                        }
                    })}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                <input
                    type="text"
                    placeholder="Last name"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    {...register('lastName', {
                        required: {
                            value: true,
                            message: 'Last name is required'
                        },
                        pattern: {
                            value: /^[A-Za-z. ]*$/,
                            message: 'Last name should contain only alphabets'
                        }
                    })}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                <input
                    type="text"
                    placeholder="Mobile number or email address"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    // register email or mobile
                    {...register('emailOrMobile', {
                        required: {
                            value: true,
                            message: 'Email or mobile is required'
                        },
                        pattern: {
                            value: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[0-9]{10,12})$/,
                            message: 'Invalid email or mobile'
                        }
                    })}
                />
                {errors.emailOrMobile && <p className="text-red-500 text-sm">{errors.emailOrMobile.message}</p>}
                <input
                    type="password"
                    placeholder="New password"
                    id="password"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Password should be at least 6 characters'
                        }
                    })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                {/* confirm password */}
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="border border-gray-400 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    {...register('confirmPassword', {
                        required: {
                            value: true,
                            message: 'Confirm password is required'
                        },
                        validate: value => value === document.getElementById('password').value || 'The passwords do not match'
                    })}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                <label className="text-gray-600 text-sm mb-2">
                    Birthday
                    <input
                        type="date"
                        className="border border-gray-400 rounded-md px-2 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('birthday', {
                            required: {
                                value: true,
                                message: 'Birthday is required'
                            }
                        })}
                    />
                </label>
                {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday.message}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                    Sign Up
                </button>
                <p className="mt-4 mb-4 text-gray-500 text-sm">
                    By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                </p>
            </form>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 " onClick={() => navigate('/login')}>Login</button>
        </div>
    );
};

export default Signup;
