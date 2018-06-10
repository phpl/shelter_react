export const addAnimal = animal => {
    return {
      type: 'ADD_ANIMAL',
      payload: animal
    }
  }
  
  export const updateAnimal = (id, animal) => {
    return {
      type: 'UPDATE_ANIMAL',
      payload: {
        id,
        animal,
      },
    }
  }
  
  export const deleteAnimal = id => {
    return {
      type: 'DELETE_ANIMAL',
      payload: id,
    }
  }