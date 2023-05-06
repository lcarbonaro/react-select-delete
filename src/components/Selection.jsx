import Card from "./Card";

function Selection({ selData, handleClick, handleDelete }) {
  function makeList() {
    /* was:
    return selData.map( r => <li key={r.id}>
      <span onClick={() => { handleRemove(r.id); } }>{r.msg}</span>
      <button className="red" onClick={ () => { handleDelete(r.id) }}>X</button>
    </li> );
    */
    return selData.map((r) => (
      <div key={r.id}>
        <Card
          handleClick={handleClick}          
          id={r.id}
          name={r.name}
          url={r.avatar_url}
        />

        <span
          className="red"         
          onClick={() => {
            handleDelete(r.id);
          }}
        >
          X
        </span>
      </div>
    ));
  }

  return (
    <div id="divSelect">
      <h4>Selected Items</h4>
      {selData.length > 0 ? (
        <p>Click to Un-Select. Click X to Delete forever.</p>
      ) : (
        <br />
      )}
      {makeList()}
    </div>
  );
}

export default Selection;
