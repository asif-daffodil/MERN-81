import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBell, faLeftLong, faMagnifyingGlass, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [searchFocus, setSearchFocus] = useState("");
    const [searchLeftArrow, setSearchLeftArrow] = useState("hidden");
    const handleSearchFocus = () => {
        setSearchFocus("hidden");
        setSearchLeftArrow("")
    };

    const handleSearchBlur = () => {
        setSearchFocus("");
        setSearchLeftArrow("hidden");
    };

    const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="mx-auto py-1 md:py-3 flex items-center px-4">
        <button className={`${searchLeftArrow} mr-2`}>
          <FontAwesomeIcon icon={faLeftLong} className="text-white" />
        </button>
        <Link to="/" className={`text-white bg-blue-600 rounded-full w-10 h-10 flex justify-center items-end text-3xl mr-3 ${searchFocus}`}>
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <form action="">
            <div className="relative">
                <input type="search" className="h-10 w-56 bg-slate-800 rounded-s-full rounded-e-full pl-9 transition-all text-white focus:pl-3 peer" placeholder="Search Facebook" onFocus={handleSearchFocus} onBlur={ handleSearchBlur} />
                <button className="text-white absolute top-0 left-0 h-full w-10 peer-focus:hidden">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </form>
        <div className="w-max inline-block ml-auto">
          <button className="text-white border rounded-full w-9 h-9 mr-2 bg-slate-700">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button
            to="/"
            className="text-white border rounded-full w-9 h-9 bg-slate-700"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>

          <button className="text-white bg-blue-600 rounded-full w-20 h-9 ml-2" onClick={() =>  navigate("/signup")}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
