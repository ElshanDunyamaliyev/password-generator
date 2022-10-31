import "./App.css";

import Card from "./UI/Card";
import MainContent from "./UI/MainContent";
import YourPassword from "./components/YourPassword";
import CharacterLength from "./components/CharacterLength";
import PasswordStrength from "./components/PasswordStrength";
import GenerateButton from "./components/GenerateButton";
import CheckBox from "./components/CheckBox";
import { useState } from "react";
import { uppercase, lowercase, number, symbol } from "./variables/characters";
import PasswordContent from "./UI/PasswordContent";

function App() {
  const [password, setPassword] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const [yourPassword, setYourPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(10);

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      password += characterList.charAt(characterIndex);
    }
    return password;
  };

  const handlePassword = () => {
    if (
      !password.uppercase &&
      !password.lowercase &&
      !password.number &&
      !password.symbol
    ) {
      return;
    } else {
      let characterList = "";
      if (password.uppercase) {
        characterList += uppercase;
      }
      if (password.lowercase) {
        characterList += lowercase;
      }
      if (password.number) {
        characterList += number;
      }
      if (password.symbol) {
        characterList += symbol;
      }
      setYourPassword(createPassword(characterList));
    }
  };

  const upperChangeHandler = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };
  const lowerChangeHandler = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };
  const numberChangeHandler = () => {
    setPassword({
      ...password,
      number: !password.number,
    });
  };
  const symbolChangeHandler = () => {
    setPassword({
      ...password,
      symbol: !password.symbol,
    });
  };

  const takePassLen = (len) => {
    setPasswordLength(len);
  };

  return (
    <div className="app">
      <h2 style={{ textAlign: "center", color: "white" }}>
        Password Generator
      </h2>
      <Card>
        <PasswordContent>
          <YourPassword password={yourPassword} />
        </PasswordContent>
        <MainContent>
          <CharacterLength takePassLen={takePassLen} value={passwordLength} />
          <CheckBox
            title="Include Uppercase Letters"
            onCheckboxChange={upperChangeHandler}
            value={password.uppercase}
            id="1"
          />
          <CheckBox
            title="Include Lowercase Letters"
            onCheckboxChange={lowerChangeHandler}
            value={password.lowercase}
            id="2"
          />
          <CheckBox
            title="Include Numbers"
            onCheckboxChange={numberChangeHandler}
            value={password.number}
            id="3"
          />
          <CheckBox
            title="Include Symbols"
            onCheckboxChange={symbolChangeHandler}
            value={password.symbol}
            id="4"
          />
          <PasswordStrength length={passwordLength} />
          <GenerateButton onClick={handlePassword} />
        </MainContent>
      </Card>
    </div>
  );
}

export default App;
