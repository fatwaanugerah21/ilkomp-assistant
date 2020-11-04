import React, { useState } from "react";
import { AddPhoneNumberAction } from "../../../Redux/actions/add_things";
import { connect } from "react-redux";
import "intl-tel-input/build/css/intlTelInput.css";
import "./add_phone_number.min.css";
import { getPhoneNumberData } from "../../../Redux/actions/get_data_actions";

const AddPhoneNumber = (props) => {
  const [state, setState] = useState({
    name: null,
    address: null,
    number: "",
    email: "",
    prefix: "+62 ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name && state.address && state.number) {
      props.addPhoneNumber(state);
    }
    props.onSubmit();
    setState({
      name: null,
      address: null,
      number: "",
      email: "",
      prefix: "+62 ",
    });
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setState({
      ...state,
      number: state.number.replace(" ", ""),
    });
    var input = e.target.value.replace(/[^,\d]/g, "");
    var newValue = [input.substr(0, 3)];
    newValue.push(input.substr(3, 4));
    newValue.push(input.substr(7, 4));
    setState({
      ...state,
      number: `${newValue[0]} ${newValue[1]} ${newValue[2]}`,
    });
  };

  const numberShow = () => {
    if (state.number.length === 4 || state.number.length <= 9) {
      return state.number.replace(/[^,\d]/g, "");
    }
    return state.number;
  };

  return (
    <div className="contact-us-page card container">
      <form onSubmit={handleSubmit} className="add-contact-form">
        <div className="name-input input-container">
          <span className="label white-text">Nama Dosen :</span>
          <input
            className="add-contact-input"
            id="name"
            type="text"
            placeholder="Pak Iswanto"
            onChange={handleInputChange}
          />
        </div>
        <div className="number-input input-container">
          <span className="Label white-text">Nomor Handphone :</span>
          <div className="number-input-field">
            <span className="prefix white-text">+62 </span>
            <input
              className="add-contact-input number"
              value={numberShow()}
              type="text"
              placeholder="812 3456 7890"
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className="email-input input-container">
          <span className="addres-label white-text">Email :</span>
          <input
            className="add-contact-input"
            id="email"
            type="email"
            placeholder="fatwaanugerah21@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="address-input input-container">
          <span className="addres-label white-text">Alamat :</span>
          <input
            className="add-contact-input"
            id="address"
            type="address"
            placeholder="Jl. Cakalang"
            onChange={handleInputChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

const addDispatchToProps = (dispatch) => {
  return {
    addPhoneNumber: (information) => {
      dispatch(AddPhoneNumberAction(information));
    },
    getPhoneData: () => {
      dispatch(getPhoneNumberData());
    },
  };
};

export default connect(null, addDispatchToProps)(AddPhoneNumber);
