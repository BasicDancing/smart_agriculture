import "./DataTable.scss"
import { useState } from "react";

const CropCategoryView = ({ cropCategories }) => {

    const [rows, setRows] = useState([
        { name: 'Alice', email: 'alice@example.com', editing: false },
        { name: 'Michael', email: 'michael@example.com', editing: false },
        { name: 'Emily', email: 'emily@example.com', editing: false },
        { name: 'David', email: 'david@example.com', editing: false },
        { name: 'Sarah', email: 'sarah@example.com', editing: false },
        { name: 'Daniel', email: 'daniel@example.com', editing: false },
        { name: 'Olivia', email: 'olivia@example.com', editing: false },
        { name: 'Andrew', email: 'andrew@example.com', editing: false }
    ]);

    const editRow = (row) => {
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: true };
            }
            return r;
        });
        setRows(updatedRows);
    };

    const saveRow = (row) => {
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: false };
            }
            return r;
        });
        setRows(updatedRows);
    };

    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };


    return (
        <>
            <div>
                <h2>Crop Categories</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>Action</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {cropCategories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    {!item.editing && <button className="edit-button" onClick={() => editRow(item)}>Edit</button>}
                                    {item.editing && <button className="save-button" onClick={() => saveRow(item)}>Save</button>}
                                    <button className="delete-button" onClick={() => deleteRow(item.id)}>Delete</button>
                                </td>
                                {/* Add more cells based on your data structure */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CropCategoryView;