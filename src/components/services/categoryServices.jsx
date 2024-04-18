export const getCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
