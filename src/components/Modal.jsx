export default function Modal({ photo }) {
  return (
    <dialog id={`ms${photo.id}`} >
      <img src={photo.url} alt={`photo${photo.id}`} 
      onClick={() => document.getElementById(`ms${photo.id}`).close()}/>
    </dialog>
  );
}
