import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/Login.jsx"
import App from "../App.jsx"
import { Register } from "./auth/Register.jsx"
import { GameForm } from "./games/GameForm.jsx"
import { GameList } from "./games/GameList.jsx"
import { GameDetails } from "./games/GameDetails.jsx"
import { ReviewForm } from "./reviews/ReviewForm.jsx"

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<App />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/new" element={<GameForm />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/games/:id/edit" element={<GameForm />} />
          <Route path="/games/:id/review" element={<ReviewForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
