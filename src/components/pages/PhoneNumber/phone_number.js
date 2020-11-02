import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { deletePhoneNumber } from "../../Redux/actions/delete_things";
import { getPhoneNumberData } from "../../Redux/actions/get_data_actions";
import AddPhoneNumber from "./AddPhoneNumber/add_phone_number";
import "./phone_number.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import OwnModal from "../../modal/ownModal";

const PhoneNumber = (props) => {
  var { firestoreData } = props;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getPhoneNumberData();
  }, [props]);

  if (!props.firestoreData.phoneNumberData) {
    return (
      <Loader
        className="center spinner"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

  const pageContent = firestoreData.phoneNumberData.map((data) => {
    return (
      <li className="lecturer-info-item" key={data.id}>
        <div className="card lecturer-info">
          <span className="lecturer-name">{data.lecturerName}</span>
          <p className="lecturer-phone-number">
            Nomor : {data.lecturerPhoneNumber}
          </p>
          <p className="lecturer-address">Alamat : {data.lecturerAdders}</p>
          <button onClick={() => props.deletePhone(data.id)}>
            Delete phone
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="container phone-number-page">
      <OwnModal
        show={showModal}
        headerText={<h1>Tambah nomor handphone</h1>}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <AddPhoneNumber />
      </OwnModal>
      <div className="row">
        <div className="lecturer-info-container">{pageContent}</div>
        <div
          className="other-menu-item white-text"
          onClick={() => setShowModal(true)}
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
