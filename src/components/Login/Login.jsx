import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
    const { signInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelFormSubmitLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelFormSubmitLogin} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <button onClick={handelGoogleLogin} className="btn btn-neutral mt-4">Google Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;