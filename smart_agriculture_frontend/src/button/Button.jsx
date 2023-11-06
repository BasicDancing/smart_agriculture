import './scss/Button.scss'

export default function Button(prop) {

  return (
    <div className="button">
      <button className="glow-on-hover" type="button" 
      onClick={() => prop.changeState()}>{prop.name}</button>
    </div>
  );
}