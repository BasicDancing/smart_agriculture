import { useState } from "react";
import FertilizerGateway from "../../gateway/FertilizerGateway";
import FertilizerView from "../data_view/FertilizerView";

const FertilizerConfigure = () => {
    const [fertilizer, setFertilizer] = useState([]);
    const [name, setName] = useState("");
    const [fertilizers, setFertilizers] = useState([]);

    const [nameError, setNameError] = useState("")

    const { postFertilizer } = FertilizerGateway({ setFertilizers })

    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        // Check if the user has entered both fields correctly
        if ("" === name) {
            setNameError("Please enter division name")
            return
        }

        console.log(fertilizer)
        postFertilizer({ fertilizer })
    }

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        setFertilizer({
            ...fertilizer,
            name: value
        })
    };

    const handleSymbol = (e) => {
        const value = e.target.value;
        setFertilizer({
            ...fertilizer,
            symbol: value
        })
    };

    return (
        <>
            <div className="inputTable">
                <div className={"mainContainer"}>
                    <div className={"titleContainer"}>
                        <div>Fertilizer</div>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Enter name here"
                            onChange={handleName}
                            className={"inputBox"} />
                        <label className="errorLabel">{nameError}</label>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Enter symbol here"
                            onChange={handleSymbol}
                            className={"inputBox"} />
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            className={"inputButton"}
                            type="button"
                            onClick={onButtonClick}
                            value={"Submit"} />
                    </div>
                </div>
                <FertilizerView fertilizers={fertilizers} />
            </div>
        </>)
};

export default FertilizerConfigure;