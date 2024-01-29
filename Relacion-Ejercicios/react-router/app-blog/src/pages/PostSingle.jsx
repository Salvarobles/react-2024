import { useParams } from "react-router-dom";
import CardList from "../components/cardList"

const PostSingle = (props) => {
    const {idPost} = useParams();
  return (
    <div>
        <CardList id={idPost} /> 
    </div>
  )
}

export default PostSingle
