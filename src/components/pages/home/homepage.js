import React, { useEffect } from 'react';

import backgroundLogo from './Group 2.svg';
import './homepage.css'
import UserProfile from './userProfile/user_profile';
import PhoneNumberMenu from './HandphoneNumber/phone_number';
import Schedule from './Schedule/schedule';
import TaskList from './TaskList/task_list';
import AddTask from './AddTask/add_task';
import { connect } from 'react-redux';
import { getPhoneNumberData } from '../../Redux/actions/get_data_actions'

const Homepage = (props) => {
   useEffect(() => {
      props.getPhoneNumberData();
   })

   return (
      <div className="homepage-background">
         <UserProfile />
         <img src={backgroundLogo} alt="background" className="homepage-background-logo" />
         <div className="homepage-menu">
            <div className="row task-list-and-add-task">
               <TaskList />
               <AddTask />
            </div>
            <div className="phone-number-menu"><PhoneNumberMenu /></div>
            <div className="schedule-menu"><Schedule /></div>
         </div>

      </div>
   )
}


const mapDispatchToProps = (dispatch) => {
   return {
      getPhoneNumberData: () => dispatch(getPhoneNumberData())
   }
}



export default connect(null, mapDispatchToProps)(Homepage);