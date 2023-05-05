
function Collection({data, handleSelect}) {
 
  function makeList() {
    return data.map( r => <li onClick={() => { handleSelect(r.id); } } key={r.id}>{r.msg}</li> );
  }

    return (
      <div id="divCollect">
        <h4>All Items</h4>
        <p>Click to Select.</p>
       {makeList()}
      </div>
    )
  }
  
  export default Collection;