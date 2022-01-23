import "./App.scss";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";

const getRoute = () => {
  switch (window.location.pathname) {
    case "/portfolio":
      return <Portfolio />;
    default:
      return <Home />;
  }
};
function App() {
  return (
    <div className="tokyo_tm_all_wrap">
      <Sidebar />
      {getRoute()}
    </div>
  );
}

export default App;
