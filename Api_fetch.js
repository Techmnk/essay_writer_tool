import React from "react";
import "./Api_fetch.css"
import data from './data.json';


function random_topics(length) {
    return Math.floor(Math.random() * length);
}

function push() {
    var x = data.topic[random_topics(data.topic.length)];
    document.getElementById("change").innerHTML = x;
}

function Api_fetch() {
    return (
        <div className="api_fetch">
            <div className="d-grid gap-2 col-6 mx-auto">
                <button onClick={push} className="btn btn-warning btn-block">Choose Random Topic</button>
            </div>
            <div className="heading">
                {/* To switch directories, type <kbd>cd</kbd> followed by the name of the directory. */}
                <h4 id="change">_________</h4>
            </div>





        </div>
    )
}

export default Api_fetch
