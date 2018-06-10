const initialState = {
  animals: [
    {
      name: "test_name",
      commonName: "common_test_name",
      scientificName: "scientific_test_name",
      gender: "Male",
      adoptionInProgress: false
    }
  ]
};

export default function home(state = initialState, action) {
  let animalList = [...state.animals];

  switch (action.type) {
    case "ADD_ANIMAL":
      return { ...state, animals: [...state.animals, action.payload] };

    case "UPDATE_ANIMAL":
      const { id, animal } = action.payload;
      animalList[id] = animal;
      return { ...state, animals: animalList };

    case "DELETE_ANIMAL":
      animalList.splice(action.payload, 1);
      return { ...state, animals: animalList };

    default:
      return state;
  }
}
