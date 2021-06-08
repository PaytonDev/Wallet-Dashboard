import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import Main from "./MainSectComp/Main"
import Sidebar from "./SidebarComp/Sidebar"

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
