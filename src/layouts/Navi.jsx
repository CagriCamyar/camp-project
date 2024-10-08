import React, {useState} from "react";
import CartSummary from "./CartSummary";
import {
  MenuMenu,
  MenuItem,
  Menu,
  Container,
} from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history =  useHistory()

  function handleSignOut(params) {  
  setIsAuthenticated(false);
  history.push("/")
}

function handleSignIn(params) {
  setIsAuthenticated(true);
}

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            {cartItems.length>0 && <CartSummary />}
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}          
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
} 
