import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";

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
  { loading ? (<Spinner/>) : { users.map}}
    );
};

export default GitHubUserCard;
