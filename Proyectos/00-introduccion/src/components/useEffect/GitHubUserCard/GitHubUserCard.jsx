import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import Spinner from "./Spinner";
import Modal from "./Modal";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // traer la data la guardo en una variable llaada fetchData y por ultimo la seeteo
    // e mi estadoUsers
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);

        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    // si loading es true
    <div className="container mx-auto my-auto">
      {loading ? (
        <Spinner />
      ) : (
        <ul className="flex flex-wrap gap-4 mt-60">
          {users.map((user) => (
            <li className="" key={user.login}>
              <p>{user.login}</p>
              <button
                onClick={
                  <Modal
                    login={user.login}
                    avatar={user.avatar_url}
                    urlGitHub={user.html_url}
                    followers={user.followers_url}
                    following={user.following_url}
                    type={user.type}
                    admin={user.site_admin}
                  />
                }
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Más información
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubUserCard;
