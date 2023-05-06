import Card from "./Card";

function Collection({ data, handleClick }) {
  function makeList() {
    // was: return data.map( r => <li onClick={() => { handleSelect(r.id); } } key={r.id}>{r.msg}</li> );
    return data.map((r) => (
      <Card
        handleClick={handleClick}
        key={r.id}
        id={r.id}
        name={r.name}
        url={r.avatar_url}
      />
    ));
  }

  return (
    <div id="divCollect">
      <h4>All Items</h4>
      <p>Click to Select.</p>
      {makeList()}
    </div>
  );
}

export default Collection;
