import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameByGameId } from "../services/gameServices.jsx"

export const GameDetails = () => {
  const [game, setGame] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getGameByGameId(id).then(setGame)
  }, [])
  //does id need to be passed in the dependency array? doesn't seem to matter, at least for now

  return (
    <div>
      <h1>{game.title}</h1>
      <div>
        <strong>Designer:</strong> {game.designer}
      </div>
      <div>
        <strong>Year Released:</strong> {game.yearReleased}
      </div>
      <div>
        <strong>Number of Players:</strong> {game.numberOfPlayers}
      </div>
      <div>
        <strong>Estimated Time to Play:</strong> {game.estimatedTimeToPlay}
      </div>
      <div>
        <strong>Age Recommendation:</strong> {game.ageRecommendation}
      </div>
      <div>
        <strong>Categories:</strong>
        <ul>
          {/* {game.categories.map((category) => (
            <li key={category.id}>{category.label}</li>
          ))} */}
        </ul>
      </div>
      <div>
        <strong>Description:</strong>
        <p>{game.description}</p>
      </div>
      {game.imageUrl && (
        <div>
          <img src={game.imageUrl} alt={game.title} />
        </div>
      )}
    </div>
  )
}
