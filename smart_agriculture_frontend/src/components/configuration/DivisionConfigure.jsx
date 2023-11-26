import { useState } from "react";
import DivisionGateway from "../../gateway/DivisionGateway";
import DivisionView from "../data_view/DivisionView";

const DivisionConfigure = () => {
    const [division, setDivision] = useState([]);
    const [name, setName] = useState("");
    const [officeContact, setOfficeContact] = useState("");
    const [divisions, setDivisions] = useState([])

    const [nameError, setNameError] = useState("")
    const [officeContactError, setOfficeContactError] = useState("")

    const { postDivision } = DivisionGateway({ setDivisions })

    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        setOfficeContactError("")
        // Check if the user has entered both fields correctly
        if ("" === name) {
            setNameError("Please enter division name")
            return
        }

        if ("" === officeContact) {
            setOfficeContactError("Please enter office contact")
            return
        }

        console.log(division)
        postDivision({ division })
    }

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        setDivision({
            ...division,
            name: value
        })
    };

    const handleOfficeContact = (e) => {
        const value = e.target.value;
        setOfficeContact(value);
        setDivision({
            ...division,
            office_contact: value
        })
    };

    return (
        <>
            <div className="inputTable">
                <div className={"mainContainer"}>
                    <div className={"titleContainer"}>
                        <div>Division</div>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            placeholder="Enter your division here"
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
                <DivisionView divisions={divisions} />
            </div>
        </>)
};

export default DivisionConfigure;