import React,{useState} from 'react';
import AddUser from "./users/AddUser";
import UserList from './users/UserList';

function App() {

  const [usersList,setUserList] = useState([]);
  
  const addUserHandler = (userName, userAge) => 
  {
    setUserList((prevUserList) => { return [...prevUserList, {name:userName, age:userAge , id: Math.random().toString() }];  } );
  }

  return (
    <div>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UserList users= {usersList}/>
    </div>
  );
}

export default App;
