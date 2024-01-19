import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import Spinner from "./Spinner";
import Modal from "./Modal";
import CardGitHub from "./CardGitHub";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectUser, setSelectUser] = useState(null);

  function openModal(avatarUrl) {
    setSelectUser(avatarUrl);
  }

  function closeModal() {
    setSelectUser(null);
  }

  useEffect(() => {
    // traer la data la guardo en una variable llaada fetchData y por ultimo la seeteo
    // e mi estadoUsers
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const data = await fetchGitHubUsers();
          setUsers(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    // si loading es true
    <div className="mx-auto max-w-[75%] text-center relative">
      <h1 className="text-3xl font-mono font-bold my-8">
        Usando UseEffect para realizar un fetch de la Api GitHub
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {users.map((user) => (
              <CardGitHub
                key={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                html_url={user.html_url}
                gists_url={user.url}
                openModal={openModal}
              />
            ))} 
          </div>
          <Modal
            isOpen={!!selectUser}
            avatar_url={selectUser}
            onClose={closeModal}
          />
        </>
      )}
    </div>
  );
};

export default GitHubUserCard;
