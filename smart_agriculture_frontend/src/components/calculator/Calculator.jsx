import { useState } from "react";
import "./scss/Calculator.scss"

const FertilizerTable = ({ fertilizers, measure}) => {
    return (
        <table  className="styled-table">
            <thead>
                <tr>
                    <th>Fetilizer</th>
                    <th>Symbol</th>
                    <th>Measure</th>
                    {/* Add more headers based on your data structure */}
                </tr>
            </thead>
            <tbody>
                {fertilizers.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fertilizer.name}</td>
                        <td>{item.fertilizer.symbol}</td>
                        <td>{item.measure * measure}</td>
                        {/* Add more cells based on your data structure */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const CalculatorForm = () => {
    const [crop, setCrop] = useState("")
    const [zilla, setZilla] = useState("")
    const [measure, setMeasure] = useState("")

    const [nameError, setNameError] = useState("")
    const [mobileError, setMobileError] = useState("")
    const [emailError, setEmailError] = useState("")

    const [fertilizers, setFertilizers] = useState([]);

    const fetchPost = async ({ zilla, crop }) => {
        const response = await fetch(
            `http://127.0.0.1:8000/fertilizermeasures/?zilla__id=${zilla}&crop__id=${crop}`
        );
        const data = await response.json();
        console.log(data);
        setFertilizers(data);
    };

    const onButtonClick = () => {
        // Set initial error values to empty
        // setNameError("")
        // setMobileError("")
        // setEmailError("")

        // // Check if the user has entered both fields correctly
        // if ("" === name) {
        //     setNameError("Please enter your name")
        //     return
        // }

        // if ("" === mobile) {
        //     setMobileError("Please enter your mobile")
        //     return
        // }

        // if ("" === email) {
        //     setEmailError("Please enter your email")
        //     return
        // }
        fetchPost(zilla, crop);
    }

    return (
        <>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>Calculator</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={zilla}
                        placeholder="Enter your zilla here"
                        onChange={ev => setZilla(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{nameError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={crop}
                        placeholder="Enter your crop here"
                        onChange={ev => setCrop(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{mobileError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={measure}
                        placeholder="Enter your measure here"
                        onChange={ev => setMeasure(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Calculate"} />
                </div>
            </div>
            <div className={"mainContainer"}>
                <FertilizerTable fertilizers={fertilizers} measure={measure}/>
            </div>
        </>
    );
}

const Calculator = () => {

    return (
        <>
            <CalculatorForm />
        </>
    );
}

export default Calculator;
