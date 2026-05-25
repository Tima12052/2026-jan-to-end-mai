import { UserContext } from "./components/userContext";
import Profile from "./components/Profile";

function App() {
  const user = {
    name: "userCTXT",
    age: 24,
  };
  return (
    <>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;
