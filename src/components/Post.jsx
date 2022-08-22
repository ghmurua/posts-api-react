import Button from "./Button";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div style={{ 
      borderBottom: "3px solid slateblue", 
      display: "flex" }}
    >
      <h3>{post.title}</h3>
      <small>
        userId{post.userId} id{post.id}
      </small>
      <p style={{ fontSize: "10px" }}>{post.body}</p>
      <Link to={`/posts/${post.id}`}>
        <Button
          text="ver mas"
          fun={() => console.log("abriendo post", post.id)}
        />
      </Link>

    </div>
  );
}
