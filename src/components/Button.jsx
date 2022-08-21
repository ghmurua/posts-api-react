export default function Button({ text, fun }) {
  return (
    <button onClick={fun}>
      {text}
    </button>
  );
}