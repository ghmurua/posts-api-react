import Button from "./Button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://github.com/ghmurua/posts-api-react">
          https://github.com/ghmurua/posts-api-react
        </a>
        <a href="https://jsonplaceholder.typicode.com/">
          https://jsonplaceholder.typicode.com/
        </a>
      </div>
      <div>
        2022
      </div>
      <div>
        <Button 
          text='Ir arriba' 
          fun={()=>{
          window.scrollTo(0,0)
        }}/>
      </div>
    </div>
  );
}
