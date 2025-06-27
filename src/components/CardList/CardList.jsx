 import Card from "../Card/card";
 import './CardList.css';


 const CardList = ({ avatars }) => {

  return (
    <div className="card-list-container">
      {avatars.map((avatar, idx) => {
        return <Card
          key={`${avatar.firstName}-${idx}`}
          name={avatar.firstName}
          email={avatar.email}
          university={avatar.university}
          id={avatar.id}
        />
      })}
    </div>
  );
}

export default CardList;
