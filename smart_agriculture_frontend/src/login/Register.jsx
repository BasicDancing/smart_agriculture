import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [nameError, setNameError] = useState("")
    const [mobileError, setMobileError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    //const navigate = useNavigate();
        
    const onButtonClick = () => {
        // Set initial error values to empty
        setNameError("")
        setMobileError("")
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === name) {
            setNameError("Please enter your name")
            return
        }

        if ("" === mobile) {
            setMobileError("Please enter your mobile")
            return
        }

        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Register</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={name}
                placeholder="Enter your name here"
                onChange={ev => setName(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{nameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={mobile}
                placeholder="Enter your mobile here"
                onChange={ev => setMobile(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{mobileError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Register"} />
        </div>
    </div>
}

export default Register;
