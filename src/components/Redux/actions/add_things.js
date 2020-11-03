export const AddPhoneNumberAction = (information) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("phone-number")
      .add({
        lecturerName: information.name,
        lecturerPhoneNumber: information.prefix + information.number,
        lecturerAddress: information.address,
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
