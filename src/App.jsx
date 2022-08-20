import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([30, 0]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => setPosts(res))
      .catch((error) => console.log(error));
  }

  function PostsList({ posts, pages }) {
    // console.warn(pages);
    // console.warn(posts.length);
    if (posts.length == 0) {
      return <h2>nada por aqui</h2>;
    }
    return (
      <div>
        {posts.slice(pages[1], pages[1] + pages[0]).map((post) => (
          <div key={post.id}
            style={{
              borderBottom: "3px solid slateblue",
            }}
          >
            <h3>{post.title}</h3>
            <small>
              userId{post.userId} id{post.id}
            </small>
            <p>{post.body}</p>
            <button onClick={() => console.log("abriendo post id:", post.id)}>
              ver mas
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            if (pages[1] > 0) {
              setPages([30, pages[1] - 30]);
              console.log('pagina anterior',pages);
            }
          }}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            if (pages[1] + pages[0] < posts.length) {
              setPages([30, pages[1] + 30]);
              console.log('pagina siguiente',pages);
            }
          }}
        >
          Siguiente
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Bringing posts from jsonPlaceholder API</h1>
      <PostsList posts={posts} pages={pages} />
    </div>
  );
}