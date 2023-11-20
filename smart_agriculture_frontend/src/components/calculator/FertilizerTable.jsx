import "./scss/FertilizerTable.scss"

const FertilizerTable = ({ fertilizers, measure}) => {
    //console.log(fertilizers, measure)

    return (
        <>
            <div>
                <h2></h2>
            <table  className="styled-table">
            <thead>
                <tr>
                    <th>Fetilizer</th>
                    <th>Symbol</th>
                    <th>এক শতক</th>
                    <th>{measure} শতক</th>
                    {/* Add more headers based on your data structure */}
                </tr>
            </thead>
            <tbody>
                {fertilizers.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fertilizer.name}</td>
                        <td>{item.fertilizer.symbol}</td>
                        <td>{item.measure} KG</td>
                        <td>{item.measure * measure} KG</td>
                        {/* Add more cells based on your data structure */}
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
        </>
    );
}

export default FertilizerTable;