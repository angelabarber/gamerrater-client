export const createGame = (gameObj) => {
  return fetch("http://localhost:8000/games", {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameObj),
  })
}

export const getGames = () => {
  return fetch("http://localhost:8000/games", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
