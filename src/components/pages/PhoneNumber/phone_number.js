import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deletePhoneNumber } from "../../Redux/actions/delete_things";
import { getPhoneNumberData } from "../../Redux/actions/get_data_actions";
import AddPhoneNumber from "./AddPhoneNumber/add_phone_number";
import "./phone_number.min.css";

const PhoneNumber = (props) => {
  const [isNeedRestart, setIsNeedRestart] = useState(true);
  var { firestoreData } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isNeedRestart) {
      props.getPhoneNumberData();
      setIsNeedRestart(false);
    }
  }, [isNeedRestart, firestoreData, props]);

  if (!props.firestoreData.phoneNumberData) {
    return <Redirect to="/phone-number" />;
  }

  const pageContent = firestoreData.phoneNumberData.map((data) => {
    return (
      <li className="lecturer-info-item" key={data.id}>
        <div className="card lecturer-info">
          <span className="lecturer-name">{data.lecturerName}</span>
          <p className="lecturer-phone-number">{data.lecturerPhoneNumber}</p>
          <p className="lecturer-address">Alamat : {data.lecturerAdders}</p>
          <button onClick={() => props.deletePhone(data.id)}>
            Delete phone
          </button>{" "}
        </div>
      </li>
    );
  });

  return (
    <div className="container phone-number-page">
      <AddPhoneNumber show={show} onClick={() => setShow(false)} />
      <div className="row">
        <div className="lecturer-info-container">{pageContent}</div>
        <div
          className="other-menu-item white-text"
          onClick={() => setShow(true)}
        >
          Tambah Nomor Handphone
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firestoreData: state.getFirestoreData,
    dataIsDeleted: state.getFirestoreData.isDeletedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoneNumberData: () => dispatch(getPhoneNumberData()),
    deletePhone: (id) => dispatch(deletePhoneNumber(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber);
