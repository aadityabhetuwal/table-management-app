import { useNavigate } from "react-router-dom";

const TableList = (props) => {
    const navigate = useNavigate();

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
                    <div>Status : {(props.table.status === "true")
                        ? "Checked" : "Unchecked"}</div>
                </p>

                <div className="d-flex gap-3">
                    <button className="btn btn-primary" onClick={() =>
                        navigate("/EditTable", { state: props.table })
                    }>
                        Edit Table
                    </button>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(props.table.name)}>
                        Delete Table
                    </button>
                </div>

            </div>
        </div>
    );

};


export default TableList;