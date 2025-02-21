/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";

const Comments = ({user, comment}) => {
    return (
        <div className="flex items-center gap-1">
            <span className="text-2xl"><FaUserCircle/></span><span className="font-semibold">{user}</span><span> {comment}</span>
        </div>
    )
}

export default Comments;