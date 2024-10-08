import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Todolist = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { task, done: false }]);
      setTask('');  
    }
  };

  const toggleDone = (index) => {
    const updatedTasks = tasks.map((item, idx) => 
      idx === index ? { ...item, done: !item.done } : item
    );
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h2 className="text-center mb-4 title">To-Do List</h2>
              <Form className="mb-4">
                <Form.Group controlId="formTask" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="rounded-pill shadow-sm"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={addTask}
                  className="w-100 rounded-pill shadow-sm add-button"
                >
                  Add Task
                </Button>
              </Form>

              <ListGroup variant="flush">
                {tasks.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className={`d-flex justify-content-between align-items-center p-3 mb-3 task-item ${item.done ? 'done' : ''}`}
                  >
                    <span className={`task-text ${item.done ? 'text-done' : ''}`}>
                      {item.task}
                    </span>
                    <Button
                      variant={item.done ? 'success' : 'outline-success'}
                      onClick={() => toggleDone(index)}
                      className={`rounded-pill toggle-button ${item.done ? 'btn-success' : 'btn-outline-success'}`}
                    >
                      {item.done ? 'Undo' : 'Done'}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Todolist;
