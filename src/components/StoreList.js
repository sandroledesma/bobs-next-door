import React from "react"
import Store from "./Store"

function StoreList({stores}) {

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {/** Render a list of <Store> components here. */}
                {stores.map(store => <Store key={store.id} store={store}/>)}
            </tbody>

        
        </table>
    );
}

export default StoreList;