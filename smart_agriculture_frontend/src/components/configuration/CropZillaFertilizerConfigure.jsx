import { useState } from "react";
import ZillaGateway from "../../gateway/ZillaGateway";
import CropGateway from "../../gateway/CropGateway";
import FertilizerGateway from "../../gateway/FertilizerGateway";
import CropZillaFertilizerGateway from "../../gateway/CropZillaFertilizerGateway";
import ZillaCropFertilzerView from "../data_view/CropZillaFertilizerView";

const CropZillaFertilizerConfigure = () =>{
    const [zillas, setZillas] = useState([]);
    const [crops, setCrops] = useState([]);
    const [fertilizers, setFertilizers] = useState([])

    const { postZilla } = ZillaGateway({ setZillas });
    const { postCrop } = CropGateway({ setCrops });
    const { postFertilizer } = FertilizerGateway({ setFertilizers });

    const [measure, setMeasure] = useState("");
    const [zilla, setZilla] = useState("");
    const [crop, setCrop] = useState("");
    const [fertilizer, setFertilizer] = useState("")

    const [measureError, setMeasureError] = useState("");
    const [zillaError, setZillaError] = useState("");
    const [cropError, setCropError] = useState("");
    const [fertilizerError, setFertilizerError] = useState("")

    const [zillaCropFertilizers, setZillaCropFertilizers] = useState([])
    const [zillaCropFertilizer, setZillaCropFertilizer] = useState([])
    const { fetchPost, postZillaCropFertilizers } = CropZillaFertilizerGateway({ setZillaCropFertilizers });

    const onButtonClick = () => {
        // Set initial error values to empty
        setMeasureError("")
        setZillaError("")
        setCropError("")
        setFertilizerError("")
        // Check if the user has entered both fields correctly
        if (isNaN(measure)) {
            setMeasureError("Please enter measure")
            return
        }

        if ("" === zilla) {
            setZillaError("Please enter zilla")
            return
        }

        if ("" === crop) {
            setCropError("Please enter crop")
            return
        }

        if ("" === zilla) {
            setFertilizerError("Please enter fertilizer")
            return
        }

        console.log(zillaCropFertilizer)
        postZillaCropFertilizers({ zillaCropFertilizer })
    }

    const handleZilla = (e) => {
        const value = e.target.value;
        setZilla(value);
        setZillaCropFertilizer({
            ...zillaCropFertilizer,
            zilla: value
        })
    };

    const handleCrop = (e) => {
        const value = e.target.value;
        setCrop(value);
        setZillaCropFertilizer({
            ...zillaCropFertilizer,
            crop: value
        })
    };

    const handleFertilizer = (e) => {
        const value = e.target.value;
        setFertilizer(value);
        setZillaCropFertilizer({
            ...zillaCropFertilizer,
            fertilizer: value
        })
    };

    const handleMeasure = (e) => {
        const value = e.target.value;
        setMeasure(value);
        setZillaCropFertilizer({
            ...zillaCropFertilizer,
            measure: value
        })
    };

    return (
        <>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>District Crop Fertilizer</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select zilla</h5>
                    <select
                        className={"inputBox"}
                        value={zilla}
                        onChange={handleZilla}>

                        {zillas.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{zillaError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select crop</h5>
                    <select
                        className={"inputBox"}
                        value={crop}
                        onChange={handleCrop}>

                        {crops.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{cropError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select fertilizer</h5>
                    <select
                        className={"inputBox"}
                        value={fertilizer}
                        onChange={handleFertilizer}>

                        {fertilizers.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{fertilizerError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your land measure"
                        onChange={handleMeasure}
                        className={"inputBox"} />
                    <label className="errorLabel">{handleMeasure}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Submit"} />
                </div>
                <ZillaCropFertilzerView zillaCropFertilzers={zillaCropFertilizers} />
            </div>
        </>)

};

export default CropZillaFertilizerConfigure;