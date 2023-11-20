import "./scss/Card.scss"

export default function Card({ display }) {
  return (
    <div className="shadow-sm p-2 content-center flex card_view">
      <h3 className="text-black">
        {display}
      </h3>
    </div>
  );
}