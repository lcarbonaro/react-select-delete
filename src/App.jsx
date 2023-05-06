import {useEffect} from "react"

import './App.css';
import { useState } from "react";
import Collection from "./components/Collection";
import Selection from "./components/Selection";

function App() {

  const [data,setData] = useState([]);
  const [selData,setSelData] = useState([]);
  const [refresh,setRefresh] = useState(false);

  useEffect( () => {
    doFetch();
    

    async function doFetch() {
      let resp = await fetch('http://localhost:3000/catbots');
      let respJson = await resp.json();
      //console.log(respJson);
      setData(respJson);      
    }
    

  }, [refresh]);  // useEffect ,[] means it runs once only, onMount

  function handleSelect(id) {
    //console.log(`in handleSelect id: ${id}`);
    let find = selData.find(r => r.id === id);
    if(!find) {
      setSelData( prevSelData => [ ...selData, data.find( r => r.id === id) ] );
    }
    
  }

  function handleRemove(id) {
    //console.log(`in handleRemove id: ${id}`);
    setSelData( [ ...selData.filter( r => r.id !== id) ] );
  }

  async function handleDelete(id) {
    //console.log(`in handleDelete id: ${id}`);
    handleRemove(id);
    await deleteRecord(id);
    setRefresh( prevRefresh => !prevRefresh );    
  }

  async function deleteRecord(id) {
    let resp = await fetch(`http://localhost:3000/catbots/${id}`,{
      method: "DELETE"
    });    
  }
 

  return (
    <>
     <div id="divMain">
      <Collection data={data} handleClick={handleSelect} />
      <Selection selData={selData} handleClick={handleRemove} handleDelete={handleDelete}/>
     </div>
    </>
  )
}

export default App;
