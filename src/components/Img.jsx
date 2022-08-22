export default function Img({ photo }) {
  return (
    <div style={{width:"150px"}}>
        <img 
        src={photo.thumbnailUrl} 
        alt={`photo${photo.id}`} 
        title={`photo${photo.id}`}
        />
        <footer>{photo.title}</footer>
    </div>
  );
}