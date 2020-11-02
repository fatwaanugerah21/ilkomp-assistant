import axios from "axios";

const firebase = require("firebase");
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

export const getStorageFile = () => {
  console.log("Run");
  return () => {
    firebase
      .storage()
      .ref("fatwa_photos/List.txt")
      .getDownloadURL()
      .then(function (url) {
        // `url` is the download URL for 'images/stars.jpg'

        axios.get(url, "GET").then((response) => console.log(response));
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function (event) {
          var blob = xhr.response;
          console.log(blob);
        };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element:
        var img = document.getElementById("myimg");
        img.src = url;
      })
      .catch(function (error) {
        // Handle any errors
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

export const getPhoneDummyData = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_DUMMY_DATA" });
  };
};
