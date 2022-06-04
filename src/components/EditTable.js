import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ImageLoader from "./ImageLoader";

function EditTable(props) {
    const [tableList, setTableList] = useLocalStorage("tableList", []);
    const location = useLocation();
    
    const data = tableList.find((table) => table.name === location.state.name);

    const getRowsAndColumns = () => {
        var columns = data.tableData.columns;

        var rows = data.tableData.rows;

        var thead = [];
        var tbody = [];
        var ind = 0;

        thead.push(<th scope="col"> Checks</th>)

        columns.forEach(element => {
            thead.push(<th key={element} scope="col">{element}</th>);
        });
        

        rows.forEach(row => {
            tbody.push(<tr key={ind}>
                <td> 
                    <input type="checkbox" name="rows" autocomplete="off" className="form-check" /> 
                </td>
                {row.map(element => 
                    <td key={element}>{element}</td>)
                }</tr>
            );
            ind++;
        });

        return [thead, tbody];
    };

    const [thead, tbody] = getRowsAndColumns();


    const removeRows = (e) => {
        e.preventDefault();
        
        var newRows = [];
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
    
        for(var i = 0; i < checkboxes.length; i++){
            // console.log(i);

            if( !checkboxes[i].checked ){
                newRows.push(data.tableData.rows[i]);
            }
            checkboxes[i].checked = 0;
        }

        console.log(newRows);

        data.tableData.rows = newRows;
        
        // get a new List
        var newTableList = tableList.map((table) => 
            table.name !== location.state.name ? table : data
        );

        setTableList(newTableList);
        // window.location.reload();
    };


    return(
        <>
            <div className='title m-3'>Table : {data.name}</div>
            
            {data.imagePreviewUrl && 
                <>
                    <div className="align-self-start preview ms-4"> Image preview </div>
                    <img src={data.imagePreviewUrl} className="imgPreview ms-4" alt="" />
                </>
            }
            
            <Form onSubmit={removeRows}>
                <table className="table m-3 w-auto">
                    <thead>
                        <tr>
                            {thead}
                        </tr>
                    </thead>
                    <tbody>
                        {tbody}
                    </tbody>

                </table>

                <button type="submit" className="btn btn-outline-danger m-3 ms-5">
                    Remove rows
                </button>

            </Form>
        </>
    );
}

export default EditTable;