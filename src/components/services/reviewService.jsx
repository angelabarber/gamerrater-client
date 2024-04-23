export const createReview = (reviewObj) => {
  return fetch("http://localhost:8000/reviews", {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewObj),
  })
}
