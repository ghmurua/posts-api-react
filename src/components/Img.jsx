import Modal from "./Modal";

export default function Img({ photo }) {
  // let url = photo.thumbnailUrl.slice(-6);
  // console.log(url)
  return (
    <>
    <Modal photo={photo} />

    <div className="img">
      <a onClick={() => document.getElementById(`ms${photo.id}`).showModal()}>
        <img
          src={photo.thumbnailUrl}
          // src={`https://robohash.org/${url}?set=set1`}
          alt={`photo${photo.id}`}
          title={`photo${photo.id}`}
        />
      </a>
      <footer>{photo.title}</footer>
    </div>
    </>
  );
}
