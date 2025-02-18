import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaYoutube } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpen } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const cacheRes = useSelector((store) => store.search);

  const handleMenu = () => {
    dispatch(isMenuOpen());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestionResult();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestionResult = async () => {
    if (cacheRes[searchText]) {
      setSuggestion(cacheRes[searchText]);
    } else {
      const data = await fetch(YOUTUBE_SEARCH_API + searchText);
      const json = await data.json();
      dispatch(cacheResults({ [searchText]: json[1] }));
      setSuggestion(json[1]);
    }
  };

  return (
    <div className="flex justify-between gap-54 bg-white w-full ">
      <div className="flex items-center gap-1 w-fit p-2 pl-6">
        <div
          className="text-2xl p-2 cursor-pointer rounded-full hover:bg-[#ecebeb]"
          onClick={handleMenu}
        >
          <RxHamburgerMenu />
        </div>
        <div className="text-3xl ml-2 text-red-600">
          <FaYoutube />
        </div>
        <span className="font-bold text-xl">YouTube</span>
      </div>
      <div className="w-full relative">
        <div className="flex grow py-2">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-4 grow p-2 rounded-tl-4xl rounded-bl-4xl border-1 "
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" hover:bg-[#ecebeb] py-2 px-6 text-2xl bg-[#f8f8f8] cursor-pointer inline-flex items-center rounded-br-4xl rounded-tr-4xl border-gray-300 border-1 ">
            <CiSearch />
          </button>
        </div>
        {showSuggestions && suggestion && (
          <div className="absolute w-full bg-white z-10">
            <ul className="flex grow flex-col ">
              {suggestion.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center p-2 font-semibold hover:bg-gray-200 cursor-pointer"
                >
                  <span className="text-xl px-2">
                    <CiSearch />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center pr-8 text-xl gap-6">
        <div className=" p-2 rounded-full cursor-pointer hover:bg-[#ecebeb]">
          <IoIosNotifications />
        </div>
        {/* <IoIosNotificationsOutline /> */}
        <div className=" p-2 rounded-full cursor-pointer hover:bg-[#ecebeb]">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Header;
