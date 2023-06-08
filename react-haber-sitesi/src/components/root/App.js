import Login from "../Login/Login";
import NewsDetail from "../News/NewsDetail";
import Dashboard from "./Dashboard";
import {Route,Routes} from "react-router-dom"
<<<<<<< Updated upstream

=======
import {Container, Row, Col} from 'reactstrap';
import Nav from "../Header/Nav";
import Logo from "../Header/Logo";
import Media from "../Footer/Media";
>>>>>>> Stashed changes

function App() {
  return (
    <>
     <Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Dashboard />} />
<Route path="/detail/:key" element={<NewsDetail/>}/>
<Route path="*" element={<h1>Not Found</h1>} />
</Routes>
<Media/>
    </>
  );
}

export default App;


