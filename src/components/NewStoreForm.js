import React from "react";
import { useState } from "react";

function NewStoreForm({ stores, setStores }) {

    const [ newStore, setNewStore ] = useState({
        name: "", image:"", season: 1, episode: 1
    });

    const onChangeNewStore = event => {
        setNewStore({
            ...newStore,
            [event.target.name]: event.target.value,
        });
    }

    const submitStore = (event) => {
        event.preventDefault();
        fetch("http://localhost:8085/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(newStore)
        })
        .then(response => response.json())
        .then(newStoreInDb => setStores([...stores, newStoreInDb])); // alternatively you can use [newStoreInDb, ...stores] so that the new POST is on top
    }

    return(
        <form id="newStoreForm" onSubmit={submitStore}>
            <input type="text" name="name" placeholder="Store Name" value={newStore.name} onChange={onChangeNewStore}/>
            <input type="text" name="image" placeholder="Image URL" value={newStore.image} onChange={onChangeNewStore}/>
            <input type="number" name="season" placeholder="Season" step="1" value={newStore.season} onChange={onChangeNewStore}/>
            <input type="number" name="episode" placeholder="Episode" step="1" value={newStore.episode} onChange={onChangeNewStore}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;