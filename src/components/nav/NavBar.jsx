import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <ul className="navbar pb-10">
      {localStorage.getItem("rater_token") !== null ? (
        <>
          <li className="navbar__item">
            <NavLink
              className="text-left underline text-blue-600 hover:text-purple-700"
              to={"/games/new"}
            >
              New Game!
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="text-left underline text-blue-600 hover:text-purple-700"
              to={"/games"}
            >
              Games
            </NavLink>
          </li>
          <li className="navbar__item">
            <button
              className="underline text-blue-600 hover:text-purple-700"
              onClick={() => {
                localStorage.removeItem("rater_token")
                navigate("/login")
              }}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="navbar__item">
            <NavLink
              className="text-left underline text-blue-600 hover:text-purple-700"
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="text-left underline text-blue-600 hover:text-purple-700"
              to={"/register"}
            >
              Register
            </NavLink>
          </li>
        </>
      )}{" "}
    </ul>
  )
}
