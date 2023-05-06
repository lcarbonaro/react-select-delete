
function Card({id, name, url, handleClick}) {
 
    
  
      return (
        <div className="divCard" id={id}  onClick={() => {
            handleClick(id);
          }}>          
            <img src={url} alt={name} />
            <p>{name}</p>          
        </div>
      )
    }
    
    export default Card;