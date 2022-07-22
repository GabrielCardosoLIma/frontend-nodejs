import React, { useState } from "react";
// import Container from "react-bootstrap/container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserCircle } from "phosphor-react";
import api from '../../services/api';
import "./styles.css";

export function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState({
    type:'',
    mensagem: '',
    loading: false
  })

  const valorInput = e => setUser({
      ...user,
     [e.target.name]: e.target.value
    })

    const loginSubmit = async e => {
      e.preventDefault();
      // console.log(user.email);
      // console.log(user.password);
      const headers = {
        content_type: 'application/json'
      }

      setStatus({
        loading: true
      })

      await api.post('/login', user, {headers})
      .then((response) =>{
        // console.log(response)
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem,
          loading: false
        })
      }).catch((error) =>{
        setStatus({
          type: 'error',
          mensagem: 'erro: tente mais tarde!',
        })
        if(error.response){
          // console.log(error.response)
          setStatus({
            type: 'error',
            mensagem: error.response.data.mensagem,
            loading: false
          })
        }
      })
    }

  return (
    <div className="box">
      {/* <Container className="box"> */}
      <Form onSubmit={loginSubmit} className="borderForm">
      {status.type == 'error' ? <h3 className="p-alert-error">{status.mensagem}</h3>: ''}
      {status.type == 'success' ? <h3 className="p-alert-success">{status.mensagem}</h3>: ''}
      {status.loading ? <h3 className="p-alert-validando">Validando...</h3>: ''}
        <div className="user">
          <UserCircle size={80} color="#030202" />{" "}
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="FormLabel">
            Nome de Usuário ou Endereço de Email:
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={valorInput}
            placeholder="Digite seu e-mail ou usuário"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={valorInput}
            placeholder="Digite sua senha"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
      {/* </Container> */}
    </div>
  );
}
