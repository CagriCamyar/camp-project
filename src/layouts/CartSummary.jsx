import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {DropdownMenu,DropdownItem, Dropdown, DropdownDivider} from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          <DropdownItem>Acer Laptop</DropdownItem>
          <DropdownItem>Asus Laptop</DropdownItem>
          <DropdownItem>Dell Laptop</DropdownItem>
          <DropdownDivider/> 
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </DropdownMenu>
      </Dropdown>{" "}
    </div>
  );
}
