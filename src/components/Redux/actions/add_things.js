export const AddPhoneNumberAction = (information) => {
   return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
         .collection("phone-number")
         .add({
            name: information.name,
            phoneNumber: information.prefix + information.number,
            email: information.email,
            address: information.address,
         })
         .then((data) => {
            dispatch({ type: "AddedPhoneNumber", data });
         });
   };
};

export const AddScheduleAction = (data) => {
   return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase.firestore();
      firestore.collection("schedule").add({
         name: data.name,
         time: data.time,
         lecturer: data.lecturer,
         chief: data.chief,
         room: data.room,
      });
   };
};

export const uploadImageToStorage = (file) => {
   return (dispatch, getState, { getFirebase }) => {
      const firebase = require("firebase");
      const storage = firebase.storage();
      console.log(storage)
   };
};
