import React from 'react';
import PropTypes from 'prop-types';

//Added `aria-hidden` to support the scenario of web accesibility

const User= (props) => {

  const { id, first_name, last_name, avatar  }=props;
  return (
      <div>
        <img src={avatar} aria-hidden alt="person image" />
        <h3>{first_name} {last_name}</h3>
        <a onClick={(e) => {
        props.handleDeleteUser(id);
        }} >Delete</a>
      </div>
  
  )
}

User.propTypes={
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
  handleDeleteUser:PropTypes.func

}

export default User;
