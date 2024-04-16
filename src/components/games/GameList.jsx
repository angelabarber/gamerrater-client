import { useEffect, useState } from "react"
import { getGames } from "../services/gameServices.jsx"
import { Link } from "react-router-dom"

export const GameList = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    getGames().then(setGames)
  }, [])

  return (
    <>
      <section>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
