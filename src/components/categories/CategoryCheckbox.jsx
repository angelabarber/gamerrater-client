import { useEffect, useState } from "react"
import { getCategories } from "../services/categoryServices.jsx"

export const CategoryCheckbox = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const handleCategoryChange = (event) => {
    const { name, value, checked } = event.target
    if (name === "category") {
      if (checked) {
        setSelectedCategories((prevFormData) => ({
          ...prevFormData,
          category: [...prevFormData.category, value],
        }))
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          category: prevFormData.category.filter((cat) => cat !== value),
        }))
      }
    }
  }
  return (
    <div>
      <label>Categories:</label>
      {categories.map((category) => {
        ;<div>
          <label>
            <input
              type="checkbox"
              name="category"
              value={category.id}
              checked={formData.category.includes(category.label)}
              onChange={handleCategoryChange}
            />
            {category.label}
          </label>
        </div>
      })}
    </div>
  )
}
