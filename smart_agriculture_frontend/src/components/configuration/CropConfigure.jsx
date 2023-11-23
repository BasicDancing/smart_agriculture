import { useState } from "react";
import CropView from "../data_view/CropView";
import CropGateway from "../../gateway/CropGateway";
import CropCategoryGateway from "../../gateway/CropCategoryGateway";

const CropConfigure = () => {
    const [cropCategory, setCropCategory] = useState("");
    const [cropCategories, setCropCategories] = useState([]);
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [crop, setCrop] = useState([]);
    const [crops, setCrops] = useState([]);

    const [cropCetegoryError, setCropCategoryError] = useState("");
    const [nameError, setNameError] = useState("");
    const [speciesError, setSpeciesError] = useState("");

    const { postCrop } = CropGateway({ setCrops });
    const { postCropCategory } = CropCategoryGateway({ setCropCategories });

    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        setCropCategoryError("")
        setSpeciesError("")
        // Check if the user has entered both fields correctly
        if ("" === cropCategory) {
            setCropCategoryError("Please select crop category")
            return
        }
        if ("" === name) {
            setNameError("Please enter crop name")
            return
        }

        if ("" === species) {
            setSpeciesError("Please enter crop species")
            return
        }

        console.log(name)
        postCrop({ crop })
    }

    const handleCropCategory = (e) => {
        const value = e.target.value;

        setCropCategory(value);
        setCrop({
            ...crop,
            crop_category: value
        });
    };

    const handleName = (e) => {
        const value = e.target.value;

        setName(value)
        setCrop({
            ...crop,
            name: value
        });
    };

    const handleSpecies = (e) => {
        const value = e.target.value;

        setSpecies(value)
        setCrop({
            ...crop,
            species: value
        });
    };

    return (
        <>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>Crop</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select crop category</h5>
                    <select
                        className={"inputBox"}
                        value={cropCategory}
                        onChange={handleCropCategory}>

                        {cropCategories.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{cropCetegoryError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your corp category here"
                        onChange={handleName}
                        className={"inputBox"} />
                    <label className="errorLabel">{nameError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your corp species here"
                        onChange={handleSpecies}
                        className={"inputBox"} />
                    <label className="errorLabel">{speciesError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Submit"} />
                </div>
                <CropView crops={crops}/>
            </div>
        </>)
};

export default CropConfigure;