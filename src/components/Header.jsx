import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaYoutube } from "react-icons/fa";
import { IoIosNotifications} from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <div className="flex justify-between gap-54">
            <div className="flex items-center gap-1 w-fit p-2 pl-6">
                <div className="text-2xl p-2 cursor-pointer"><RxHamburgerMenu /></div>
                <div className="text-3xl ml-2 text-red-600"><FaYoutube /></div>
                <span className="font-bold text-xl">YouTube</span>
            </div>
            <div className="flex grow py-2">
                <input type="text" placeholder="Search" className="pl-4 grow p-2 rounded-tl-4xl rounded-bl-4xl border-1 " />
                <button className="py-2 px-6 text-2xl bg-[#f8f8f8] cursor-pointer  inline-flex items-center rounded-br-4xl rounded-tr-4xl border-gray-300 border-1 "><CiSearch /></button>
            </div>
            <div className="flex pr-8 text-2xl gap-2">
                <div className="p-4 rounded-full cursor-pointer hover:bg-[#ecebeb]"><IoIosNotifications /></div>
                {/* <IoIosNotificationsOutline /> */}
                <div className="p-4 rounded-full cursor-pointer"><FaUserAlt /></div>
            </div>
        </div>
    )
}

export default Header;