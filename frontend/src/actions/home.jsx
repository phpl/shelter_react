export const addAnimal = animal => {
  return dispatch => {
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ ...animal });
    return fetch("/api/animals/", { headers, method: "POST", body })
      .then(result => result.json())
      .then(payload => {
        return dispatch({
          type: "ADD_ANIMAL",
          payload
        });
      });
  };
};

export const updateAnimal = (animalId, animal) => {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ ...animal });

    return fetch(`/api/animals/${animalId}/`, { headers, method: "PUT", body })
      .then(result => result.json())
      .then(animal => {
        return dispatch({
          type: "UPDATE_ANIMAL",
          payload: {
            animalId,
            animal
          }
        });
      });
  };
};

export const deleteAnimal = animalId => {
  return (dispatch, getState) => {
    const headers = { "Content-Type": "application/json" };

    return fetch(`/api/animals/${animalId}/`, {
      headers,
      method: "DELETE"
    }).then(result => {
      if (result.ok) {
        return dispatch({
          type: "DELETE_ANIMAL",
          payload: animalId
        });
      }
    });
  };
};

export const fetchAnimals = () => {
  return dispatch => {
    const headers = { "Content-Type": "application/json" };
    return fetch("/api/animals/", { headers })
      .then(result => result.json())
      .then(payload => {
        return dispatch({
          type: "FETCH_ANIMALS",
          payload
        });
      });
  };
};
