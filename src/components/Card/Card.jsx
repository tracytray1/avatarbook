import './Card.css';


const Card = ({ name, email, university, id }) => {
  return <div className='card-container'>
    <img src={`https://robohash.org/${id}.png?set=set5&size=150x150`} />
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{university}</p>
  </div>;
};

export default Card;
