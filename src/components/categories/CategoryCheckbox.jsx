import { useEffect, useState } from "react"
import { getCategories } from "../services/categoryServices.jsx"

export const CategoryCheckbox = ({ formData, setFormData }) => {
  const [categories, setCategories] = useState([])
  // const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const handleCategoryChange = (categoryId) => {
    const isSelected = formData.categories.includes(categoryId)
    if (isSelected) {
      setFormData({
        ...formData,
        categories: formData.categories.filter((id) => id !== categoryId),
      })
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, categoryId],
      })
    }
  }

  // if (!categories) {
  //   return <></>
  // }

  return (
    <div>
      <label>Categories:</label>
      {categories.map((category) => (
        <div key={category.id}>
          <label>
            <input
              type="checkbox"
              checked={formData.categories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
            />
            {category.label}
          </label>
        </div>
      ))}
    </div>
  )
}
