import axios from "axios";
import Cookies from "js-cookie";
import { set, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const userInfo = JSON.parse(Cookies.get("fbuserinfo"));

  const success = (msg) => toast.success(msg, {
    position: "top-right",
    duration: 5000,
    style: {
        backgroundColor: '#00f',
        color: '#fff',
        fontSize: '1.5rem'
    }
  });

const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`http://127.0.0.1:4000/api/update/` + data.id, data);
      console.log(res.data);
      if (res.data.message === "User updated") {
        Cookies.set("fbuserinfo", JSON.stringify(res.data.data), { expires: 1 });
        success(res.data.message);
        setTimeout(() => navigate("/"), 3000);
      }
    }catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container mx-auto grid place-items-center min-h-screen">
      <Toaster />
      <form action="" className="max-w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
        <input type="hidden" {...register("id")} value={userInfo._id} />
        <div className="mb-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstName", {
              required: {
                value: true,
                message: "First name is required",
              },
            })}
            defaultValue={userInfo.firstName}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        {/* lastName */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Last Name"
            defaultValue={userInfo.lastName}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last name is required",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
        {/* email */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            defaultValue={userInfo.email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* mobile */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Mobile"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mobile", {
              required: {
                value: true,
                message: "Mobile is required",
              },
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Invalid mobile number",
              },
            })}
            defaultValue={userInfo.mobile}
          />
            {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
        </div>

        {/* Submit button */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
