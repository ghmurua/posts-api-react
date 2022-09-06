import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import CommentsList from "./CommentsList";
import Img from "./Img";
import Button from "./Button";
import Footer from "./Footer";
import Error404 from "./Error404";

export default function PostDetail() {
  const { posts } = useContext(Context);
  const { users } = useContext(Context);
  const { albums } = useContext(Context);
  const { photos } = useContext(Context);

  const { id } = useParams();
  const nid = parseInt(id);
  const actualPost = posts.find((i) => i.id === nid);
  // console.log(id, nid, actualPost);

  let user = '';
  let album = '';
  let photoSet = '';

  if (actualPost != undefined) {
    user = users.find((i) => i.id === actualPost.userId);
    album = albums.find((i) => i.id === actualPost.id);
    photoSet = photos.filter((i) => i.albumId === actualPost.id);
  }

  const [pa, setPa] = useState([10, 0]);

  return (
    <div className="postDetail">
      {actualPost != undefined ? (
        <>
          <Link to={"/"}><h2>Home</h2></Link>

          <header>
            {actualPost && <h1>{actualPost.title}</h1>}
            {user && <small>Author: {user.username}</small>}<br/>
            {actualPost && <small>Post ID: {actualPost.id}</small>}
          </header>

          {actualPost && <p>{actualPost.body}</p>}

          {album && <h3>Album's name: {album.title}</h3>}
          <div className="photoSet">
            { photoSet && photoSet
                  .slice(pa[1], pa[1] + pa[0])
                  .map((photo) => <Img key={photo.id} photo={photo} />)
            }
          </div>
          <Button
            text="<<"
            fun={() => {
              if (pa[1] > 0) setPa([pa[0], pa[1] - pa[0]]);
            }}
          />
          <span>
            {" "}
            {pa[1] + 1} - {pa[1] + 10}{" "}
          </span>
          <Button
            text=">>"
            fun={() => {
              if (pa[1] + pa[0] < photoSet.length)
                setPa([pa[0], pa[1] + pa[0]]);
            }}
          />

          {actualPost && <CommentsList id={actualPost.id} />}
          <Footer />
        </>
      ) : (
        <Error404 />
      )}
    </div>
  );
}
