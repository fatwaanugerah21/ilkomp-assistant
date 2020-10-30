import React from 'react';
import { addToStorage } from '../../Redux/actions/add_things';
import {connect} from 'react-redux'
import { getStorageFile } from '../../Redux/actions/get_data_actions';

const ViewPDF = (props) => {

  const inputChange = (e) => {
    var document = e.target.files[0]
   
    console.log(document);
    
    props.addFile('pdf_files',document);
    
  }

  const downloadFile = () => {    
    props.getFile()
  }
  
  return (
    <div className=" card view-pdf white-text">
      <input type="file" onChange={inputChange} />
      <button onClick={() => downloadFile()}>Download file</button>
    </div>
  );
}

const addDispatchToProps = (dispatch) => {
  return {
    addFile: (folder, file) => dispatch(addToStorage(folder, file)),
    getFile: () => dispatch(getStorageFile())
  }
}

export default connect(null, addDispatchToProps)(ViewPDF);