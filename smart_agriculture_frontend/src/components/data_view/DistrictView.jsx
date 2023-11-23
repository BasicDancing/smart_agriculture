import "./DataTable.scss"

const DistrictView = ({ zillas }) => {

    return (
        <>
            <div>
                <h2>Districts</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Office Number</th>
                            <th>Division</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {zillas.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.office_number}</td>
                                <td>{item.division.name}</td>
                                {/* Add more cells based on your data structure */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DistrictView;