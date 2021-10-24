import { Button } from "react-bootstrap";
import {signInWithGoogle} from './Firebase'
const Login=()=>{
    return(
        <div>
            <Button variant="primary" onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
    );
}

export default Login