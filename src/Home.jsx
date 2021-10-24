import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { auth } from './Firebase';
const Home=({user})=>{
    return (
        <Card>
            <Card.Img variant='top' src={user.photoURL} alt="No Image Found"/>
            <Card.Title>{user.displayName}</Card.Title>
            <Button variant="primary" onClick={()=>auth.signOut()}>Log Out</Button>
        </Card>
    );
}

export default Home;