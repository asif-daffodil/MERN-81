import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const ChangePassword = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };

    const success = (msg) => toast.success(msg, {
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

    const { register, handleSubmit, formState: {errors}, getValues } = useForm({ mode: "onChange" });
    const onSubmit = async (data) => {
        // console.log(data);
        // get _id from fbuserinfo cookie
        const fbUserInfo = JSON.parse(Cookies.get("fbuserinfo"));
        const _id = fbUserInfo._id;
        // send data to server
        try {
            const response = await axios.put(`http://localhost:4000/api/change-password/${_id}`, data);
            if (response.status === 200) {
                // show success message
                success(response.data.message);

                // navigate to home page
                setTimeout(() => navigate("/"), 3000);
            }
        }catch (err) {
            // show error message
            error(err.response.data);
        }
    }

    return (
        <div className="w-full h-screen grid place-items-center">
            {/* password Change from */}
            <Toaster />
            <div className="w-80 border rounded shadow p-4 relative">
                <button onClick={goToHome}>
                    <FontAwesomeIcon icon={faTimes} className="absolute top-2 right-2 text-gray-500" />
                </button>
                <h2 className="text-blue-600 text-4xl text-center font-bold mb-3">Facebook</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("currentPassword", {
                            required: {
                                value: true,
                                message: "Current password is required",
                            },
                        })
                        }
                    />
                    {errors.currentPassword && (
                        <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>
                    )}
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("newPassword", {
                            required: {
                                value: true,
                                message: "New password is required",
                            },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                    message: "Please provide an strong password",
                                },
                        })
                        }
                    />
                    {errors.newPassword && (
                        <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
                    )}
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("confirmNewPassword", {
                            required: {
                                value: true,
                                message: "Confirm new password is required",
                            },
                            validate: (value) => value === getValues("newPassword") || "The passwords do not match"
                        })
                        }
                    />
                    {errors.confirmNewPassword && (
                        <p className="text-red-500 text-sm">{errors.confirmNewPassword.message}</p>
                    )}
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        type="submit"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;