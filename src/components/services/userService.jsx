export const getCurrentUser = () => {
  return fetch("http://localhost:8000/current_user", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
