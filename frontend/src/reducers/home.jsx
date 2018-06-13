export default function home(state = { animals: [] }, action) {
  let animalList = [...state.animals];
  switch (action.type) {
    case "ADD_ANIMAL":
      return { ...state, animals: [...state.animals, action.payload] };

    case "UPDATE_ANIMAL": {
      let { animalId, animal } = action.payload;
      let index = animalList.findIndex(animal => animal.id === animalId);
      animalList[index] = animal;
      return { ...state, animals: animalList };
    }
    case "DELETE_ANIMAL": {
      let { animalId } = action.payload;
      let index = animalList.findIndex(animal => animal.id === animalId);      
      animalList.splice(index, 1);
      return { ...state, animals: animalList };
    }
    case "FETCH_ANIMALS":
      return { ...state, animals: action.payload };

    default:
      return state;
  }
}
