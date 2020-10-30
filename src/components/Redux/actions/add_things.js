const firebase = require('firebase');


export const AddPhoneNumberAction = (information) => {
   return (dispatch, getState) => {
      const firestore = firebase.firestore();
      firestore.collection('phone-number').add({
         lecturerName: information.name,
         lecturerPhoneNumber: information.prefix + information.number,
         lecturerAdders: information.address
      })
      
   }
}

export const addToStorage = (path,file) => {
   return () => {
      console.log("You are in redux");
      const storageRef = firebase.storage().ref(`${path}/${file.name}`);
      storageRef.put(file);
   }
}


export const AddScheduleAction = (data) => {
   return (dispatch, getState, { getFirebase }) => {
      const firestore = firebase.firestore();
      firestore.collection('schedule').add(
         {
            scheduleName: data.name,
            scheduleDate: data.date,
            scheduleLecturer: data.lecturer,
            scheduleChief: data.chief,
            scheduleRoom: data.room,
         }
      )
   }
}

