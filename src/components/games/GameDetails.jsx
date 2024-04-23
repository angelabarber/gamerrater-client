import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getGameByGameId, deleteGame } from "../services/gameServices.jsx"
import { getCurrentUser } from "../services/userService.jsx"

export const GameDetails = () => {
  const [game, setGame] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getGameByGameId(id).then(setGame)
  }, [])
  //does id need to be passed in the dependency array? doesn't seem to matter, at least for now

  useEffect(() => {
    getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteGame(id).then(() => {
      navigate("/games")
    })
  }

  return (
    <div className="container mx-auto my-8 max-w-4xl text-[#372772]">
      <h1 className="title text-3xl font-bold mb-4">{game.title}</h1>
      <div className="flex flex-row">
        {game.imageUrl && (
          <div className="image w-2/5 mr-8">
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="details flex-1">
          <div className="mb-4">
            <strong className="font-bold">Designer:</strong> {game.designer}
          </div>
          <div className="mb-4">
            <strong className="font-bold">Year Released:</strong>{" "}
            {game.yearReleased}
          </div>
          <div className="mb-4">
            <strong className="font-bold">Number of Players:</strong>{" "}
            {game.numberOfPlayers}
          </div>
          <div className="mb-4">
            <strong className="font-bold">Estimated Time to Play:</strong>{" "}
            {game.estimatedTimeToPlay}
          </div>
          <div className="mb-4">
            <strong className="font-bold">Age Recommendation:</strong>{" "}
            {game.ageRecommendation}
          </div>
          <div className="categories mb-4">
            <strong className="font-bold">Categories:</strong>
            <ul className="list-disc pl-4 text-[#3A2449]">
              {game.categories ? (
                game.categories.map((category) => (
                  <li key={category.id}>{category.label}</li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="description mb-4">
            <strong className="font-bold">Description:</strong>
            <p>{game.description}</p>
          </div>{" "}
          <div>
            {" "}
            <button type="button">
              <Link to={`/games/${game.id}/review`}>Review Game </Link>{" "}
            </button>{" "}
          </div>{" "}
          <div>
            {game.title} Reviews:{" "}
            <ul>
              {" "}
              {game.reviews ? (
                game.reviews.map((review) => (
                  <li key={review.id}>
                    {review.text}
                    <p>
                      ~{review.user.firstName} {review.user.lastName}
                    </p>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="buttons">
            {currentUser?.id === game.user?.id && (
              <>
                <button
                  type="button"
                  className="bg-[#94C595] hover:bg-[#A1E8AF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all mr-2"
                >
                  <Link to={`/games/${game.id}/edit`}>Edit Game</Link>
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-[#3A2449] hover:bg-[#747C92] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Delete Game
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
