import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/actions/actions";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

function LoginComponent() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch(); // REDUX

  const navigate = useNavigate();

  const clientId =
    "201175694508-s161r8c4vgod5k3kjsp6jj1i8dgt5oad.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client: auth2", start);
  }, []);

  const signUp = async (obj) => {
    const baseEndpoint = "http://localhost:8080/api/users/new-raw";

    const header = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch(baseEndpoint, {
        method: "POST",
        headers: header,
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/login");
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSuccess = (response) => {
    const userDataSignup = {
      nomeCompleto: response.profileObj.name,
      username: response.profileObj.email,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
    };
    try {
      signUp(userDataSignup).then(() => {
        //LOGIN
        const userDataLogin = {
          username: response.profileObj.email,
          password: response.profileObj.googleId,
        };
        console.log(userDataLogin);
        dispatch(logIn(userDataLogin));
      });
    } catch (e) {
      console.log("ok");
    }
  };

  const onFailure = (response) => {
    console.log("Qualcosa è andato storto");
  };

  const [formObj, setFormObj] = useState({
    // oggetto per la compilazione del form
    username: "",
    password: "",
  });

  const handleForm = (key, value) => {
    // setta l'oggetto del form
    setFormObj((form) => {
      return {
        ...form,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user.token]);

  return (
    <Container className="pageContainer">
      <div
        style={{
          color: "royalblue",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor: "aliceblue",
          fontSize: "1.5em",
        }}
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(logIn(formObj));
            console.log(user);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome utente</Form.Label>
            <Form.Control
              value={formObj.username}
              onChange={(e) => handleForm("username", e.target.value)}
              type="text"
              autoComplete="current-password"
              placeholder="Inserisci il nome utente scelto in fase di registrazione"
            />
            <Form.Text className="text-muted">
              Non condividere mai la password con nessuno.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={formObj.password}
              onChange={(e) => handleForm("password", e.target.value)}
              type="password"
              autoComplete="current-password"
              placeholder="Inserisci la tua password"
            />
          </Form.Group>
          <Button
            className={"w-25 d-block mx-auto my-2"}
            variant="primary"
            type="submit"
          >
            ACCEDI
          </Button>
          <Row className="justify-content-center mt-5">
            <GoogleLogin
            className={"w-25"}
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
          />
          </Row>
          
        </Form>
      </div>
    </Container>
  );
}

export default LoginComponent;
