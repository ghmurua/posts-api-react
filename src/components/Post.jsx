import Button from "./Button";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <div>
        <small>userId{post.userId} id{post.id}</small>
      </div>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>
        <Button
          text="ver mas"
          fun={() => {
            window.scrollTo(0, 0);
          }}
        />
      </Link>
    </div>
  );
}
