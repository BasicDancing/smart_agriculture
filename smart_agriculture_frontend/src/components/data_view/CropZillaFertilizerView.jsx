import "./DataTable.scss"

const ZillaCropFertilzerView = ({
    zillaCropFertilzers,
    deleteZillaCropFertilizer }) => {

    //serial no
    var sl = 0;

    return (
        <>
            <div>
                <h2>Crop Zilla Fertilzer Differences</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Zilla</th>
                            <th>Crop</th>
                            <th>Fertilizer</th>
                            <th>সার প্রতি শতক(gm)</th>
                            <th>Action</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {zillaCropFertilzers.map((item) => (
                            <tr key={item.id}>
                                <td>{++sl}</td>
                                <td>{item.zilla.name}</td>
                                <td>{item.crop.name}</td>
                                <td>{item.fertilizer.name}</td>
                                <td>{item.measure} gm</td>

                                <td className="actionArea">
                                    <button className="edit-button"
                                        onClick={() => editRow(item)}>

                                        <i className='bx bx-message-square-edit'></i>
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteZillaCropFertilizer({ zillaCropFertilizer: item })}>

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

export default ZillaCropFertilzerView;