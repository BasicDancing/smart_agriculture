import "./DataTable.scss"
import { useState } from "react";

const CropCategoryView = ({ cropCategories, deleteCropCategory }) => {

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
                                
                                <td className="actionArea">
                                    <button className="edit-button"
                                        onClick={() => editRow(item)}>

                                        <i className='bx bx-message-square-edit'></i>
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteCropCategory({ cropCategory: item })}>

                                        <i className='bx bx-message-square-x'></i>
                                    </button>
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