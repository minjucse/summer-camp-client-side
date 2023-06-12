import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import service from '../../../hooks/useBaseServices';

const SocialSignIn = () => {
    const { signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignInGoogle = () => {
        signInGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, imageURL: loggedInUser.photoURL }
               
                service.userCreate("add-user", JSON.stringify(saveUser)).then(res => {
                })
                .catch(err => {
                    console.log(err); 
                })
                navigate(from, { replace: true })
            }).catch(error => {
                console.log('error', error.message);

            })
    };
    return (
        <div>
            <div className="flex  justify-center login-social">
                <button className="btn btn-circle btn-outline" onClick={handleSignInGoogle}>
                    <FcGoogle/>
                </button>
            </div>
        </div>
    )
}

export default SocialSignIn