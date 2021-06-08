import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Container, Row} from 'reactstrap'
import { SellOrdersTable } from "./SellOrdersTable"
import "./SellOrders.css"

const SellOrders = () => {
    return (
        <Container fluid className="SellOrders">
            <Row className="SellOrders-header-row">
                <header className="SellOrders-header">
                    <p>Sell Orders</p>
                    <ThreeDotsVertical className="SellOrders-menu"/>
                </header>
            </Row>
            <Row className="SellOrders-table-row">
                <SellOrdersTable />
            </Row>
        </Container>
    )
}

export default SellOrders; 