import { useEffect, useState, React } from "react"
import { createGame } from "../services/gameServices.jsx"
import { CategoryCheckbox } from "../categories/CategoryCheckbox.jsx"

export const GameForm = () => {
  //   const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    designer: "",
    yearReleased: "",
    numberOfPlayers: "",
    estimatedTimeToPlay: "",
    ageRecommendation: "",
    imageUrl: "",
    categories: [],
  })

  useEffect(() => {}, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    createGame(formData)
  }

  return (
    <div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="designer">Designer:</label>
        <input
          type="text"
          id="designer"
          name="designer"
          value={formData.designer}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="yearReleased">Year Released:</label>
        <input
          type="date"
          id="yearReleased"
          name="yearReleased"
          value={formData.yearReleased}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfPlayers">Number of Players:</label>
        <input
          type="number"
          id="numberOfPlayers"
          name="numberOfPlayers"
          value={formData.numberOfPlayers}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="estimatedTimeToPlay">Estimated Time to Play:</label>
        <input
          type="text"
          id="estimatedTimeToPlay"
          name="estimatedTimeToPlay"
          value={formData.estimatedTimeToPlay}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ageRecommendation">Age Recommendation:</label>
        <input
          type="number"
          id="ageRecommendation"
          name="ageRecommendation"
          value={formData.ageRecommendation}
          onChange={handleChange}
        />
      </div>
      <CategoryCheckbox formData={formData} setFormData={setFormData} />
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Save Game
      </button>
    </div>
  )
}
