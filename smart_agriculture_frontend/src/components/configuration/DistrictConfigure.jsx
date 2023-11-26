import { useState } from "react";
import ZillaGateway from "../../gateway/ZillaGateway";
import DistrictView from "../data_view/DistrictView";
import DivisionGateway from "../../gateway/DivisionGateway";

const DistrictConfigure = () => {
    const [zilla, setZilla] = useState([]);
    const [name, setName] = useState("");
    const [officeContact, setOfficeContact] = useState("");
    const [division, setDivision] = useState([]);
    const [zillas, setZillas] = useState([])
    const [divisions, setDivisions] = useState([]);

    const [nameError, setNameError] = useState("")
    const [officeContactError, setOfficeContactError] = useState("")
    const [divisionError, setDivisionError] = useState("")

    const { postZilla } = ZillaGateway({ setZillas })
    const { postDivision } = DivisionGateway({ setDivisions })

    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        setOfficeContactError("")
        setDivisionError("")
        // Check if the user has entered both fields correctly
        if ("" === name) {
            setNameError("Please enter district name")
            return
        }

        if ("" === officeContact) {
            setOfficeContactError("Please enter office contact")
            return
        }
        
        if ("" === division) {
            setDivisionError("Select division")
            return
        }

        console.log(zilla)
        postZilla({ zilla })
    }

    const handleDivision = (e) => {
        const value = e.target.value;
        setDivision(value);
        setZilla({
            ...zilla,
            division: value
        })
    };

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        setZilla({
            ...zilla,
            name: value
        })
    };

    const handleOfficeContact = (e) => {
        const value = e.target.value;
        setOfficeContact(value);
        setZilla({
            ...zilla,
            office_contact: value
        })
    };

    return (
        <>
            <div className="inputTable">
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>District</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select division</h5>
                    <select
                        className={"inputBox"}
                        value={division}
                        onChange={handleDivision}>

                        {divisions.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{divisionError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your district here"
                        onChange={handleName}
                        className={"inputBox"} />
                    <label className="errorLabel">{nameError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        placeholder="Enter your office contact here"
                        onChange={handleOfficeContact}
                        className={"inputBox"} />
                    <label className="errorLabel">{officeContactError}</label>
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
            <DistrictView zillas={zillas} />
            </div>
        </>)
};

export default DistrictConfigure;