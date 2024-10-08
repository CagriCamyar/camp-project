import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <MenuItem>
        <Button primary onClick={signIn}>Giris Yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayit Ol</Button>
      </MenuItem>
    </div>
  );
}
