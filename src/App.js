import "./App.css";
import Profile from "./Profile/Components/Profile";
import pic from "./pic.jpg";
import Card from "react-bootstrap/Card";
function App() {
  const showName = (fullName) => alert(`Profile user: ${fullName}`);
  return (
    <div className="App">
      <Profile
        fullName="ronaldo"
        Bio="have 7 dor ballon"
        profession=" Fotball player"
        showName={showName}
      >
        <Card.Img src={pic} alt="profile" className="img" />
      </Profile>
    </div>
  );
}

export default App;
