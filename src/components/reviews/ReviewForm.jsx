import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createReview } from "../services/reviewService.jsx"

export const ReviewForm = () => {
  const [review, setReview] = useState({
    gameId: 0,
    text: "",
  })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setReview({
      ...review,
      gameId: parseInt(id),
    })
  }, [id])

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    createReview(review).then(() => {
      navigate(`/games/${id}`)
    })
  }

  return (
    <>
      {/* <div>
            <div>
                <label htmlFor="reviewText">Review:</label>
                <input type="textarea" id="reviewText" name="text" value={review.text} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleSubmit}>
            Save Game
            </button>
        </div> */}

      {/* Can we set up the styling on review form similarly to the rest? Here's the jsx. */}

      <div className="mb-4">
        <label
          htmlFor="reviewText"
          className="block text-gray-700 font-semibold mb-2"
        >
          Review:
        </label>
        <textarea
          id="reviewText"
          name="text"
          value={review.text}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 p-2"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Review
      </button>
    </>
  )
}
