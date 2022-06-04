import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const TableList = (props) => {
    const navigate = useNavigate();
    const [tableList, setTableList] = useLocalStorage("tableList", []);

    const handleDelete = (name) => {
        
        if( window.confirm(`Do you wish to delete table ${name}`) ){
            setTableList(tableList.filter((table) => table.name !== name));
            window.location.reload();
        }
    };

    return (
        <div className="card table-cards">
            
            {props.table.imagePreviewUrl && 
                <img src={props.table.imagePreviewUrl} className="card-img-top" alt="" />
            }

            <div className="card-body">
                <h5 className="card-title">{props.table.name}</h5>
                <p className="card-text">
                    <div>Layout : {props.table.layout}</div>
                    <div>Capacity : {props.table.capacity}</div>
                    <div>Status : { (props.table.status === "true") 
                        ? "Checked" : "Unchecked"}</div>
                </p>
                
                <div className="d-flex gap-3">
                    <button className="btn btn-primary" onClick={() => 
                        navigate("/EditTable", {state: props.table}) 
                    }>
                        Edit Table
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(props.table.name)}>
                        Delete Table
                    </button>
                </div>

            </div>
        </div>
    );

};


export default TableList;