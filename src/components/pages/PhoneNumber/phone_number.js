/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePhoneNumber } from "../../Redux/actions/delete_things";
import { getPhoneNumberData } from "../../Redux/actions/get_data_actions";
import AddPhoneNumber from "./AddPhoneNumber/add_phone_number";
import "./phone_number.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import OwnModal from "../../modal/ownModal";
import { insertionSort } from "../../tools/algorithm";
import { Orderer } from "../../tools/ordering/order";

const PhoneNumber = (props) => {
  var { firestoreData } = props;
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    // Get the on CDm OR CDu
    props.getPhoneNumberData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, isAscending]);
  if (!props.firestoreData.phoneNumberData) {
    return (
      <Loader
        className="center spinner"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  // This will sort the data first before mapping it
  const lecturerList = insertionSort({
    array: firestoreData.phoneNumberData,
    sortParameter: "name",
    sortOrder: isAscending ? "asc" : null,
  }).map((data) => {
    return (
      <div className="lecturer-info-item" key={data.id}>
        <div className="card lecturer-info">
          <div className="section-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/thumb/9/95/Logo_UH.png/1200px-Logo_UH.png"
              alt="Lecturer Profile"
              className="profile-image"
              height="150"
            />
          </div>
          <div className="section-2">
            <ul>
              <li className="first-list">
                <p className="lecturer-name">{data.name}</p>
              </li>
              <li>
                <p className="lecturer-phone-number">{data.phoneNumber}</p>
              </li>
              <li>
                <p className="lecturer-address">{data.address}</p>
              </li>
              <li>
                <a href="#" className="lecturer-email">
                  {data.email}
                </a>
              </li>
              <li>
                <button onClick={() => props.deletePhone(data.id)}>
                  Delete phone
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container phone-number-page">
      <OwnModal
        show={showModal}
        headerText="Tambah nomor handphone"
        onClick={() => {
          setShowModal(false);
        }}
      >
        <AddPhoneNumber
          onSubmit={() => {
            setShowModal(false);
          }}
        />
      </OwnModal>
      <div className="content-header">
        <h1>Daftar info dosen</h1>
        <Orderer
          className="order"
          isAscending={isAscending}
          onClick={() => setIsAscending(!isAscending)}
        />
      </div>
      <div className="row">
        <div className="lecturer-info-container">{lecturerList}</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoneNumberData: () => dispatch(getPhoneNumberData()),
    deletePhone: (id) => dispatch(deletePhoneNumber(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber);
