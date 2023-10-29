import React from 'react';


const RegisterSuccsess = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    const avatarUrl = user.avatar;

    return (
      <div>
        <img src={avatarUrl} alt="User Avatar" />
      </div>
    );
  } else {
    return <p>User information not found.</p>;
  }
};

export default RegisterSuccsess;
