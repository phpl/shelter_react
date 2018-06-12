export default function home(state = {animals:[]}, action) {
  let animalList = [...state.animals];

  switch (action.type) {
    case "ADD_ANIMAL":
      return { ...state, animals: [...state.animals, action.payload] };

    case "UPDATE_ANIMAL":
      const { index, animal } = action.payload;
      animalList[index] = animal;
      return { ...state, animals: animalList };

    case "DELETE_ANIMAL":
      animalList.splice(action.payload, 1);
      return { ...state, animals: animalList };

    case "FETCH_ANIMALS":
      return { ...state, animals: action.payload };

    default:
      return state;
  }
}
