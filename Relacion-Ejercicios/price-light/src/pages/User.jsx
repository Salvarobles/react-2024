import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { getUser } from "../api/usersApi";
import Spinner from "../components/Spinner";

const User = () => {
  const { user } = useAuthContext();

  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUser(user.email)
      .then((user) => {
        setUserProfile(user);
        
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="bg-gray-200 p-6 rounded-md shadow-md">
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <div className="mb-4">
            <p className="font-bold">Name: {userProfile.firstname}</p>
            <p>Email: {userProfile.email}</p>
            <p>Phone: {userProfile.phone}</p>
            <p>Birth Date: {userProfile.birthDate}</p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Address:</p>
            <p>Street: {userProfile.address.street}</p>
            <p>Suite: {userProfile.address.suite}</p>
            <p>City: {userProfile.address.city}</p>
            <p>Zipcode: {userProfile.address.zipcode}</p>
          </div>

          <div>
            <p className="font-bold">Login:</p>
            <p>Username: {userProfile.login.username}</p>
            <p>Password: {userProfile.login.password}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
