import React from "react";
import { connect } from "react-redux";
import OwnModal from "../../../modal/ownModal";
import "./add_schedules.min.css";
import { Dropdown } from "../../../tools/dropdown/dropdown";
import { useState } from "react";
import { days, hours, minutes } from "../../../tools/staticFile";
import { uploadImageToStorage } from "../../../Redux/actions/add_things";

const AddSchedule = ({ show, onClick, uploadImage }) => {
  const [state, setState] = useState({
    day: "Senin",
    hour: "07",
    minute: "30",
    name: "",
    room: "",
    lecturer: "",
    chief: "",
    sks: "",
    file: null,
  });

  const dayOptions = days.map((dayItem) => {
    return (
      <div
        className="option"
        onClick={() => {
          setState({ ...state, day: dayItem.value });
        }}
        key={dayItem.value}
      >
        {dayItem.value}
      </div>
    );
  });

  const hourOptions = hours().map((hourItem) => {
    return (
      <div
        className="option"
        onClick={() => {
          setState({ ...state, hour: hourItem });
        }}
        key={hourItem}
      >
        {hourItem}
      </div>
    );
  });

  const minuteOptions = minutes().map((minuteItem) => {
    return (
      <div
        className="option"
        onClick={() => {
          setState({ ...state, minute: minuteItem });
        }}
        key={minuteItem}
      >
        {minuteItem}
      </div>
    );
  });

  const handleFormChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      schedule: `${state.day}, ${state.hour}:${state.minute}`,
    });
    console.log(state);
  };

  const inputForm = (
    <form onSubmit={handleSubmit}>
      <div className="name-input input-container">
        <label htmlFor="name">Nama Matakuliah :</label>
        <input
          type="text"
          placeHolder="Matematika Lanjut D"
          id="name"
          onChange={handleFormChange}
          key="name"
        />
      </div>
      <div className="schedule-input input-container">
        <label htmlFor="schedule">Jadwal :</label>
        <div className="time-input">
          <Dropdown
            id="day"
            className="day"
            value={state.day}
            children={dayOptions}
          />
          <div className="clock">
            <Dropdown
              id="hour"
              className="clock-picker"
              value={state.hour}
              children={hourOptions}
            />
            :
            <Dropdown
              id="minute"
              className="clock-picker"
              value={state.minute}
              children={minuteOptions}
            />
          </div>
        </div>
      </div>
      <div className="lecturer-input input-container">
        <label htmlFor="lecturer">Nama Dosen :</label>
        <input
          type="text"
          placeHolder="Pak Devon S.Sci"
          id="lecturer"
          onChange={handleFormChange}
        />
      </div>
      <div className="room-input input-container">
        <label htmlFor="room">Ruangan :</label>
        <input
          type="text"
          placeHolder="TNR 401"
          id="room"
          onChange={handleFormChange}
        />
      </div>
      <div className="chief-input input-container">
        <label htmlFor="chief">Ketua Kelas :</label>
        <input
          type="text"
          placeHolder="Fauzi Asham Nasrul"
          id="chief"
          onChange={handleFormChange}
        />
      </div>
      <div className="sks-input input-container">
        <label htmlFor="sks">Jumlah SKS :</label>
        <input
          type="text"
          placeHolder="3"
          id="sks"
          onChange={handleFormChange}
        />
      </div>
      <button className="submit">Submit</button>
    </form>
  );

  return (
    <OwnModal show={show} onClick={onClick}>
      <div className="add-schedule">
        <div className="schedule-name">{inputForm}</div>
      </div>
    </OwnModal>
  );
};

const addDispatchToProps = (dispatch) => {
  return {
    uploadImage: (file) => dispatch(uploadImageToStorage(file)),
  };
};
export default connect(null, addDispatchToProps)(AddSchedule);
