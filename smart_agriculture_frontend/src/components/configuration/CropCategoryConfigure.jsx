import { useState } from "react";
import CropCategoryView from "../data_view/CropCategoryView";
import CropCategoryGateway from "../../gateway/CropCategoryGateway";

const CropCategoryConfigure = () => {
    const [name, setName] = useState("")
    const [corpCategories, setCropCategories] = useState([])

    const [nameError, setNameError] = useState("")

    const { postCropCategory } = CropCategoryGateway({ setCropCategories })

    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        // Check if the user has entered both fields correctly
        if ("" === name) {
            setNameError("Please enter crop category name")
            return
        }

        console.log(name)
        postCropCategory({ cropCategory: name })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setName({ name: value });
    };

    return (
        <>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>Crop Category</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your corp category here"
                        onChange={handleChange}
                        className={"inputBox"} />
                    <label className="errorLabel">{nameError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Submit"} />
                </div>
                <CropCategoryView cropCategories={corpCategories} />
            </div>
        </>)
};

export default CropCategoryConfigure;