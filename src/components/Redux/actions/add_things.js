export const AddPhoneNumberAction = (information) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("phone-number")
      .add({
        lecturerName: information.name,
        lecturerPhoneNumber: information.prefix + information.number,
        lecturerAdders: information.address,
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
      scheduleName: data.name,
      scheduleDate: data.date,
      scheduleLecturer: data.lecturer,
      scheduleChief: data.chief,
      scheduleRoom: data.room,
    });
  };
};
