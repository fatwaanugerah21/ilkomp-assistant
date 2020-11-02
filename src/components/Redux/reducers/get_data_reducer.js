const initialState = {
  phoneNumberData: [
    {
      id: 1,
      lecturerName: "Fatwa Anugerah Nasir",
      lecturerPhoneNumber: "+62 852 9901 4599",
      lecturerAdders: "Jl. R.A Kartini No.10",
    },
  ],
};

const getDataFromFirestore = (state = initialState, action) => {
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
