import styles from './page.module.css'
// import 'bootstrap/dist/css/bootstrap.css'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hey</h1>
        </Col>
        <Col>
          <h1>Hey</h1>
        </Col>
      </Row>
    </Container>
  )
}
