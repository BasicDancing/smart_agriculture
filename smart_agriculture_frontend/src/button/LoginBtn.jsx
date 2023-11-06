import Button from "./Button";

export default function LoginButton(prop) {
    console.log(prop);

    return <Button 
    name = {'Login'}
    changeState = {prop.changeState}
    />;
}