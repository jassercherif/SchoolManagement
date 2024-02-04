import { Container, Row, Col } from 'react-bootstrap';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1 className="display-3">Welcome to School Management App</h1>
            <p className="lead">Where learning meets innovation</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;
