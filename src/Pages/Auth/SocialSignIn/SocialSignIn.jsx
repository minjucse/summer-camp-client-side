import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignIn = () => {
    const { signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignInGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
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