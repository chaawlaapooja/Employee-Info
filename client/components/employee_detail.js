import React from 'react';

const EmployeeDetail = ({ employee }) => {
  const { name, email, phone, avatar } = employee;

  return (
    <div className="thumbnail" style={{backgroundColor:"#fafafa"}}>
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item list-group-item-info">Email: {email}</li>
          <li className="list-group-item list-group-item-warning">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
