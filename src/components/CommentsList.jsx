import { useContext } from "react";
import { Context } from "../context/Context";
import Comment from "./Comment";

export default function CommentsList({ id }) {
  const { allComments } = useContext(Context);
  let nid = parseInt(id);
  const comments = allComments.filter((comm) => comm.postId == nid);
//   console.log(comments, id, nid, allComments[0].postId);

  return (
    <div>
        <h3>Comments:</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
