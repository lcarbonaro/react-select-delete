
function Selection({selData, handleRemove, handleDelete }) {
 
  function makeList() {
    return selData.map( r => <li key={r.id}>
      <span onClick={() => { handleRemove(r.id); } }>{r.msg}</span>
      <button className="red" onClick={ () => { handleDelete(r.id) }}>X</button>
    </li> );
  }

    return (
      <div id="divSelect">
        <h4>Selected Items</h4>
        {selData.length > 0 ? <p>Click to Un-Select. Click X to Delete forever.</p> : <br/> }
       {makeList()}
      </div>
    )
  }
  
  export default Selection;