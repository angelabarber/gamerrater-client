// import { NavLink, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = () => {
//   const navigate = useNavigate()
//   return (
//     <ul className="navbar pb-10">
//       {localStorage.getItem("rater_token") !== null ? (
//         <>
//           <li className="navbar__item">
//             <NavLink
//               className="text-left underline text-blue-600 hover:text-purple-700"
//               to={"/games/new"}
//             >
//               New Game!
//             </NavLink>
//           </li>
//           <li className="navbar__item">
//             <NavLink
//               className="text-left underline text-blue-600 hover:text-purple-700"
//               to={"/games"}
//             >
//               Games
//             </NavLink>
//           </li>
//           <li className="navbar__item">
//             <button
//               className="underline text-blue-600 hover:text-purple-700"
//               onClick={() => {
//                 localStorage.removeItem("rater_token")
//                 navigate("/login")
//               }}
//             >
//               Logout
//             </button>
//           </li>
//         </>
//       ) : (
//         <>
//           <li className="navbar__item">
//             <NavLink
//               className="text-left underline text-blue-600 hover:text-purple-700"
//               to={"/login"}
//             >
//               Login
//             </NavLink>
//           </li>
//           <li className="navbar__item">
//             <NavLink
//               className="text-left underline text-blue-600 hover:text-purple-700"
//               to={"/register"}
//             >
//               Register
//             </NavLink>
//           </li>
//         </>
//       )}{" "}
//     </ul>
//   )
// }

import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-[#372772] py-4 px-6 text-white flex justify-between items-center">
      <ul className="flex space-x-8">
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E8AF] transition-colors duration-300"
            to={"/games/new"}
          >
            New Game!
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E8AF] transition-colors duration-300"
            to={"/games"}
          >
            Games
          </NavLink>
        </li>
        {localStorage.getItem("rater_token") === null && (
          <>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E8AF] transition-colors duration-300"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E8AF] transition-colors duration-300"
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      {localStorage.getItem("rater_token") !== null && (
        <div>
          <button
            className="hover:text-[#3A2449] transition-colors duration-300"
            onClick={() => {
              localStorage.removeItem("rater_token")
              navigate("/login")
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}
