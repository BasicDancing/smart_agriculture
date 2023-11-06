import Button from "./Button";

export default function RegisterButton(prop) {
    return <Button 
    name = {'Register'}
    changeState = {prop.changeState}
    />;
}
  