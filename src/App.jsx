import { useState, useEffect } from "react" ;
import './App.css';
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [filteredAvatars, setFilteredAvatars] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setAvatars(data.users)
        setFilteredAvatars(data.users)
    });
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredAvatars = avatars.filter((avatar) =>
      avatar.firstName.toLowerCase().includes(searchString)
    );
    setFilteredAvatars(newFilteredAvatars);
  };


  return (
    <div className='app-container'>
      <h1 className='app-title'>Avatarbook</h1>
      <SearchBox onChangeHandler={onSearchChange}/>
      <CardList avatars={filteredAvatars} />
    </div>
  )
};

export default App
