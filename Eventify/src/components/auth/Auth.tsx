import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config.js";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button onClick={signIn}>Sign In</Button>
      </div>
    </>
  );
}
