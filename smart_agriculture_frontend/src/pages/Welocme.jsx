import './scss/Welcome.scss';

const Welcome = (props) => {
    // eslint-disable-next-line react/prop-types
    const { loggedIn, email } = props

    const onButtonClick = () => {
        // You'll update this function later
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the welcome page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>Your email address is {email}</div> : <div />)}
        </div>
    </div>
}

export default Welcome