import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as tuitService from "../../services/tuits-service";
const Tuits = ({tuits = [], refreshTuits}) => {

    const deleteTuit = (tid) =>
        tuitService.deleteTuit(tid)
            .then(refreshTuits);

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits && tuits.map(tuit =>
                        <Tuit key={tuit._id}
                              deleteTuit={deleteTuit}
                              tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}

export default Tuits;