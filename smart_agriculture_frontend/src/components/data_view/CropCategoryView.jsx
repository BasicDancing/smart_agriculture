import "./DataTable.scss"

const CropCategoryView = ({ cropCategories, deleteCropCategory }) => {

    //serial no
    var sl = 0;

    return (
        <>
            <div>
                <h2>Crop Categories</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Category Name</th>
                            <th>Action</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {cropCategories.map((item) => (
                            <tr key={item.id}>
                                <td>{++sl}</td>
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