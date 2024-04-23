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

export const getGameByGameId = (id) => {
  return fetch(`http://localhost:8000/games/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}

export const updateGame = (id, gameObj) => {
  return fetch(`http://localhost:8000/games/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameObj),
  })
}

export const deleteGame = (id) => {
  return fetch(`http://localhost:8000/games/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("rater_token")).token
      }`,
      "Content-Type": "application/json",
    },
  })
}
