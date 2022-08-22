import { useParams } from "react-router-dom";
import { useContext,useState } from "react";
import { Context } from "../Context";
import CommentsList from "./CommentsList";
import Img from "./Img";
import Button from "./Button";

export default function PostDetail() {
  const { posts } = useContext(Context);
  const { users } = useContext(Context);
  const { albums } = useContext(Context);
  const { photos } = useContext(Context);

  const { id } = useParams();
  const nid = parseInt(id);
  const actualPost = posts.find((i) => i.id === nid);

  const user = users.find((i) => i.id === actualPost.userId);
  const album = albums.find((i) => i.id === actualPost.id);
  const photoSet = photos.filter((i) => i.albumId === actualPost.id);

  // console.log(photoSet);
  // console.log(id, nid, actualPost,"sadfsadf",user,album);

  const [pa, setPa] = useState([5,0])

  return (
    <div>
      <h2>{actualPost.title}</h2>
      <small>Author: {user.username}</small>
      <br />
      <small>Post ID: {actualPost.id}</small>
      <p>{actualPost.body}</p>

      <h3>Album's name: {album.title}</h3>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {photoSet
          .slice(pa[1], pa[1] + pa[0])
          .map((photo) => (
            <Img key={photo.id} photo={photo}/>
        ))}
      </div>
      <Button
        text="<<"
        fun={() => {
          if (pa[1] > 0) setPa([pa[0], pa[1] - pa[0]]);
        }}
      />
      <span>{pa[1] + 1} - {pa[1] + 5}</span>
      <Button
        text=">>"
        fun={() => {
          if (pa[1] + pa[0] < photoSet.length) setPa([pa[0], pa[1] + pa[0]]);
        }}
      />


      <CommentsList id={actualPost.id} />
    </div>
  );
}
