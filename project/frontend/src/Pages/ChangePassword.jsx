import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };

    const { register, handleSubmit, formState: {errors}, getValues } = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="w-full h-screen grid place-items-center">
            {/* password Change from */}
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