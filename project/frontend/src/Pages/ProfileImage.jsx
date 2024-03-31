import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import DemoProfileImg from "../assets/images/profile.jpg";

const ProfileImage = () => {
    if (!Cookies.get('fbuserinfo')) {
        window.location.href = '/login';
    }
    const fbuserinfo = JSON.parse(Cookies.get('fbuserinfo'));
    console.log(fbuserinfo);
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="border rounded shadow p-6 w-max text-center">
                <h1 className="text-3xl font-bold mb-4">Profile Image</h1>
                {(fbuserinfo.image ? <img src={`http://localhost:4000/${fbuserinfo.image}`} alt={`${fbuserinfo.firstName}`} className="w-80 p-2 border rounded shadow mb-3 mx-auto" /> : <img src={`${DemoProfileImg}`} alt={`${fbuserinfo.firstName}`} className="w-80 p-2 border rounded shadow mb-3 mx-auto" />)}
                <form action="">
                    <input
                        type="file"
                        className="mb-4"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
                </form>
                <Link to="/" className="text-blue-500">Back</Link>
            </div>
        </div>
    );
};

export default ProfileImage;