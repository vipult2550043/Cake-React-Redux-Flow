import React from 'react';
import CakeContainer from './cakeContainer';
import IceContaner from './IceContaner';
import UsersContainer from './UsersContainer'
import ChocolateContainer from './redux/chocolate/ChocolateContainer';
function App() {
  return (
    <div>
      
      <CakeContainer  ></CakeContainer>
      <ChocolateContainer ></ChocolateContainer>
      <IceContaner ice={"iceCream"}></IceContaner>
      <UsersContainer></UsersContainer>
      
    </div>

  )
}

export default App;
