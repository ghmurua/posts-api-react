export default function Comment({ comment }) {
  return (
    <div style={{ margin: "15px", background: "#444" }}>
      <h3>{comment.name}</h3>
      <small style={{ color: "orange" }}>comment id: {comment.id}</small><br />
      <small>{comment.email} says:</small>
      <p>{comment.body}</p>
    </div>
  );
}
