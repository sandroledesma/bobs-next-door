import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from "react";

/* 

Deliverables: 
1. Make states for the list of stores <Store />, search 
    query <Search /> and the form <NewStoreForm />
2. Make a GET request to localhost:8085/stores and pass the stores to 
    'setStores()'. Pass it as a prop to <StoreList /> so that 
    it can render those stores.
3. Make a POST request when a <NewStoreForm /> is submitted and also call
    'setStores()' with the new store.
4. Change 'query' as the user types into <Search />, and as 'query' changes, 
    change the list of stores that are being displayed in <StoreList>

*/

function App() {

  const [ stores, setStores ] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(storeArrayInDb => {
      setStores(storeArrayInDb);
    })
  }, []);

  const filteredStores = stores.filter(store => store.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search search={search} setSearch={setSearch}/>
      <NewStoreForm stores={stores} setStores={setStores}/>
      <StoreList stores={filteredStores} />
    </div>
  );
}

export default App;
