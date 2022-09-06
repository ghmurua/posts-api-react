import { useContext } from "react";
import { Context } from "../context/Context";
import Post from "./Post";
import Button from "./Button";
import Footer from "./Footer";

export default function PostsList() {
  const { posts, pages, setPages } = useContext(Context);

  if (posts.length == 0) {
    return <h2>nada por aqui</h2>;
  }

  return (
    <>
      <div className="post-list">
        <h1>Fake data from jsonPlaceholder API</h1>
        {posts.slice(pages[1], pages[1] + pages[0]).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <div className="pages">
        <Button
          text="Anterior"
          fun={() => {
            if (pages[1] > 0) setPages([pages[0], pages[1] - pages[0]]);
            window.scrollTo( 0, document.body.scrollHeight );
          }}
        />
        <span>
          {" "}
          {pages[1] + 1} -
          {pages[1] + 15 < posts.length 
            ? pages[1] + 15 
            : posts.length}
          {" "}
        </span>
        <Button
          text="Siguiente"
          fun={() => {
            if (pages[1] + pages[0] < posts.length)
              setPages([pages[0], pages[1] + pages[0]]);
              window.scrollTo( 0, document.body.scrollHeight );
            }}
        />
      </div>

      <Footer />
    </>
  );
}
