import { useContext } from "react";
import { Context } from "../Context";
import Post from "./Post";
import Button from "./Button";

export default function PostsList() {
  const { posts, pages, setPages } = useContext(Context);

  if (posts.length == 0) {
    return <h2>nada por aqui</h2>;
  }

  return (
    <div>
      <h1>Bringing posts from jsonPlaceholder API</h1>
      {posts
        .slice(pages[1], pages[1] + pages[0])
        .map((post) => (
          <Post key={post.id} post={post} />
      ))}

      <Button
        text="Anterior"
        fun={() => {
          if (pages[1] > 0) setPages([pages[0], pages[1] - pages[0]]);
        }}
      />

      <Button
        text="Siguiente"
        fun={() => {
          if (pages[1] + pages[0] < posts.length) setPages([pages[0], pages[1] + pages[0]]);
        }}
      />
    </div>
  );
}
