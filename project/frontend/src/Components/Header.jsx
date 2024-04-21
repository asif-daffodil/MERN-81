import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faImage,
  faKey,
  faLeftLong,
  faMagnifyingGlass,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchFocus, setSearchFocus] = useState("");
  const [searchLeftArrow, setSearchLeftArrow] = useState("hidden");
  const [dbTop, setDbTop] = useState("mt-16 invisible");

  const handleSearchFocus = () => {
    setSearchFocus("hidden");
    setSearchLeftArrow("");
  };

  const handleSearchBlur = () => {
    setSearchFocus("");
    setSearchLeftArrow("hidden");
  };

  const navigate = useNavigate();

  const handleDbTop = () => {
    dbTop === "mt-0 visible"
      ? setDbTop("mt-16 invisible")
      : setDbTop("mt-0 visible");
  };

  const handleDbTopBlur = () => {
    setDbTop("mt-16 invisible")
  };

  const logout = () => {
    Cookies.remove("fbuserinfo");
    navigate("/login");
  };

  return (
    <div className="bg-black">
      <div className="mx-auto py-1 md:py-3 flex items-center px-4">
        <button className={`${searchLeftArrow} mr-2`}>
          <FontAwesomeIcon icon={faLeftLong} className="text-white" />
        </button>
        <Link
          to="/"
          className={`text-white bg-blue-600 rounded-full w-10 h-10 flex justify-center items-end text-3xl mr-3 ${searchFocus}`}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <form action="">
          <div className="relative">
            <input
              type="search"
              className="h-10 w-56 bg-slate-800 rounded-s-full rounded-e-full pl-9 transition-all text-white focus:pl-3 peer"
              placeholder="Search Facebook"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
            <button className="text-white absolute top-0 left-0 h-full w-10 peer-focus:hidden">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
        <div className="w-max inline-block ml-auto relative">
          <button className="text-white border rounded-full w-9 h-9 mr-2 bg-slate-700">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button
            className="text-white border rounded-full w-9 h-9 bg-slate-700"
            onClick={handleDbTop}
            onBlur={handleDbTopBlur}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div
            className={`w-56 absolute top-[calc(100%+30px)] right-0 bg-white transition-all ${dbTop}`}
            onFocus={handleDbTop}
          >
            <ul className="flex-col ">
              <li>
                <Link
                  to="/updateProfile"
                  className="block px-3 py-2 cursor-pointer border-b-2"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Update Profile
                </Link>
              </li>
              <li>
                <Link to='/changePassword' className="block px-3 py-2 cursor-pointer border-b-2">
                  <FontAwesomeIcon icon={faKey} className="mr-2" />
                  Change Password
                </Link>
              </li>
              <li>
                <Link to='/profileImage' className="block px-3 py-2 cursor-pointer border-b-2">
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Change Profile Image
                </Link>
              </li>
              <li>
                <Link className="block px-3 py-2 cursor-pointer" onClick={logout}>
                  <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          {/* {
          !Cookies.get('fbuserinfo') &&
          <button className="text-white bg-blue-600 rounded-full w-20 h-9 ml-2" onClick={() =>  navigate("/signup")}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
          } */}
        </div>
      </div>
    </div>
  );
};

export default Header;
