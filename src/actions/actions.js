export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature => {
  return {
    type: ADD_FEATURE,
    payload: {
      id: newFeature.id,
      name: newFeature.name,
      price: newFeature.price
    }
  };
};
