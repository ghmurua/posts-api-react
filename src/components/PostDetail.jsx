import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import CommentsList from "./CommentsList";

export default function PostDetail() {
  const { posts } = useContext(Context);
  const { users } = useContext(Context);

  const { id } = useParams();
  const nid = parseInt(id);
  const actualPost = posts.find((i) => i.id === nid);

  const user = users.find((i) => i.id === actualPost.userId);

  // console.log(id, nid, actualPost,"sadfsadf",user);

  return (
    <div>
      <h2>{actualPost.title}</h2>
      <small>Author: {user.username}</small><br/>
      <small>Post ID: {actualPost.id}</small>
      <p>{actualPost.body}</p>

      <CommentsList id={actualPost.id} />
    </div>
  );
}
