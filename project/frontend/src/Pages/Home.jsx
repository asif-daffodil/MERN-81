import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";


const Home = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        duration: 5000,
        style: {
            backgroundColor: '#f00',
            color: '#fff',
            fontSize: '1.5rem'
        }
    });

    const onSubmit = async (data) => {
        try {
            let userInfo = Cookies.get('fbuserinfo');
            let user_id = JSON.parse(userInfo)._id;
            let userPost = data.newPost;
            let addPost = await axios.post("http://localhost:4000/post/create", {user_id, userPost});
            if(addPost.data.message === "Post created successfully"){
                toast.success(addPost.data.message, {
                    position: "top-right",
                    duration: 5000,
                    style: {
                        backgroundColor: '#00f',
                        color: '#fff',
                        fontSize: '1.5rem'
                    }
                });
                reset();
            }
        } catch (err) {
            error(err.response.data);
        }
    }
    return (
        <div className="w-full p-4">
            <Toaster />
            {/* Add post form  */}
            <div className="mt-4 w-full">
                <form action="" className="w-full flex border rounded shadow p-4" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="border p-2 w-full focus:outline-none" placeholder="What is in your mind?" {...register("newPost", {required: {
                        value: true,
                        message: "Post is required"
                    }})} />
                    <button className="bg-blue-500 text-white px-4 py-2">Post</button>
                </form>
                {errors.newPost && <p className="text-red-500">{errors.newPost.message}</p>}
            </div>
        </div>
    );
};

export default Home;