export default function Comment({ comment }) {
  return (
    <div className='comment'>
      <h3>{comment.name}</h3>
      <small className='commentId'>comment id: {comment.id}</small><br />
      <small>{comment.email} says:</small>
      <p>{comment.body}</p>
    </div>
  );
}
