import { useAuthContext } from "../context/useAuthContext";

const User = () => {
  const { user } = useAuthContext();

  return (
    <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <>
          <div className="mb-4">
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        </>
    </div>
  );
};

export default User;
