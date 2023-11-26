import "./DataTable.scss"

const DivisionView = ({ divisions, deleteDivision}) => {

    //serial no
    var sl = 0;

    return (
        <>
            <div>
                <h2>Divisions</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Office Number</th>
                            <th>Action</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {divisions.map((item) => (
                            <tr key={item.id}>
                                <td>{++sl}</td>
                                <td>{item.name}</td>
                                <td>{item.office_contact}</td>

                                <td className="actionArea">
                                    <button className="edit-button"
                                        onClick={() => editRow(item)}>

                                        <i className='bx bx-message-square-edit'></i>
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteDivision({ division: item })}>

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

export default DivisionView;