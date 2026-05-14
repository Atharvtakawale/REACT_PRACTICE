import React from 'react'

const App = () => {

  const [newUser, setNewUser] = React.useState({username: 'ram', email: 'ram@gmail.com'})

  const changeUser = () => {
    const myUser = {...newUser};
    myUser.username = 'shyam';
    setNewUser(myUser);
    myUser.email = 'shyam@gmail.com';
    setNewUser(myUser);
  }

  return (
    <div>
      <h1>{newUser.username} , {newUser.email}</h1>
      <button onClick={changeUser}>Click</button>
    </div>
  )
}

export default App