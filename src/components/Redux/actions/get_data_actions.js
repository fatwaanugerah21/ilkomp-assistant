export const getPhoneNumberData = () => {
  return (dispatch, getState, { getFirebase }) => {
    var data = [];
    var document = {};
    const firestore = getFirebase().firestore();
    firestore
      .collection("phone-number")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          document = doc.data();
          document = {
            id: doc.id,
            ...document,
          };
          data.push(document);
        });
      })
      .then(() => {
        dispatch({ type: "PHONE_NUMBER_STORED", data });
      });
  };
};

export const getScheduleData = () => {
  return (dispatch, getState, { getFirebase }) => {
    var document = {};
    var data = [];
    const firestore = getFirebase().firestore();
    firestore
      .collection("schedule")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          document = doc.data();
          document = {
            id: doc.id,
            ...document,
          };
          data.push(document);
        });
      })
      .then(dispatch({ type: "GET_SCHEDULE", data }));
  };
};
