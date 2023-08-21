import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const form = () => {
  return (
    <div style={{width: '500px', margin: '0 auto'}}>
        <h2>To place order, kindly enter your email address.</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" style={{ backgroundColor: '#000' }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default form;
