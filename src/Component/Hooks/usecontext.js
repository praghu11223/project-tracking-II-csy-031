import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("rangu's fuck trick");

  return (
    <UserContext.Provider value={user}>
      <h1>{`${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div>
      <h1>lock yourself into your room</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>connect your headset</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>take your mobile</h1>
      <Component5 />
    </div>
  );
}
function Component5() {
  return (
    <div>
      <h1>select a song and sleep</h1>
      <Component6 />
    </div>
  );
}

function Component6() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{`${user} again!`}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);
