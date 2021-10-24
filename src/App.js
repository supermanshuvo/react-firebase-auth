import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react';
import firebase from './Firebase'
import Login from './Login'
import Home from './Home'
function App() {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user);
    })
  },[])
  console.log(user)
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
      { user ? <Home user={user} /> : <Login />}
    </Container>
  );
}

export default App;
