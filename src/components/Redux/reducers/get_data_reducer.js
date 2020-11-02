
const getDataFromFirestore = (state, action) => {
  if (action.type) {
    switch (action.type) {
      case "PHONE_NUMBER_STORED":
        return {
          ...state,
          phoneNumberData: action.data,
        };
      case "PHONE_NUMBER_ADDED":
        return {
          ...state,
          phoneNumberData: action.data,
        };
      case "GET_DUMMY_DATA":
        return {
          ...state,
        };
      default:
        return state;
    }
  }
};

export default getDataFromFirestore;
