import "./scss/FertilizerTable.scss"

const FertilizerTable = ({ fertilizers, measure }) => {
    //console.log(fertilizers, measure)

   const convertToKG = (m) =>{
    var cal = m * measure;
    cal *= 1.0;
    cal /= 1000;
    
    return cal;
   }

    return (
        <>
            <div>
            <h2> Measured Fertilizer</h2>
            <table  className="styled-table">
            <thead>
                <tr>
                    <th>Fetilizer</th>
                    <th>Symbol</th>
                    <th>প্রতি শতক(gm)</th>
                    <th>{measure} শতক (gm)</th>
                    <th>Measure in KG</th>
                    {/* Add more headers based on your data structure */}
                </tr>
            </thead>
            <tbody>
                {fertilizers.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fertilizer.name}</td>
                        <td>{item.fertilizer.symbol}</td>
                        <td>{item.measure} gm</td>
                        <td>{item.measure * measure} gm</td>
                        <td>{convertToKG(item.measure)} KG</td>
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