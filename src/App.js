import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
    const [json, setJson] = useState([]);
    var data;
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => (data = json));

    function display() {
        setJson(data)
    }
    const [state, setState] = useState(true);
    let url = "https://github.com/raheel-cloud";
    return ( <
            div >


            <
            div className = 'bg-dark'
            style = {
                { width: "100%", heigth: "100%", position: "absolute" }
            } >
            <
            div className = 'container bg-white' >
            <
            table className = 'table mt-5 shadow-lg table-striped table-hover text'
            style = {
                { fontSize: "15px", }
            } >
            <
            thead className = 'text-dark' >
            <
            tr >
            <
            th scope = 'col' > # < /th> <
            th scope = 'col' > Name < /th> <
            th scope = 'col' > Email < /th> <
            th scope = 'col' > Address < /th> <
            th scope = 'col' > Company < /th> <
            th scope = 'col' > View Profile < /th> < /
            tr > <
            /thead> <
            tbody id = 'table' > {
                json.map((data) => ( <
                        tr key = { data.id } >
                        <
                        td > { data.id } < /td> <
                        td > { data.name } < /td> <
                        td > { data.email } < /td> <
                        td > { data.address.street }, { data.address.city } < /td>  <
                        td > { data.company.name } < /td> <
                        td > < a href = "https://github.com/raheel-cloud"
                        target = "blank"
                        className = 'btn btn-success' > View Profile < /a></td >



                        <
                        /tr>))}

                        <
                        /tbody>

                        <
                        /table> <
                        button className = 'btn btn-primary mt-5 mb-3 me-3'
                        onClick = { display } > Fetch Data < /button>

                        <
                        /div>


                        <
                        /div>  < /
                        div >

                    )



                }

                export default App;