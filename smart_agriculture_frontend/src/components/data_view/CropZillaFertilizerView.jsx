import "./DataTable.scss"

const ZillaCropFertilzerView = ({ zillaCropFertilzers }) => {

    return (
        <>
            <div>
                <h2>Crop Zilla Fertilzer Differences</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Zilla</th>
                            <th>Crop</th>
                            <th>Fertilizer</th>
                            <th>সার প্রতি শতক(gm)</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {zillaCropFertilzers.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.zilla.name}</td>
                                <td>{item.crop.name}</td>
                                <td>{item.fertilizer.name}</td>
                                <td>{item.measure} gm</td>
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