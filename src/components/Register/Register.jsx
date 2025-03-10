import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handelFormSubmitRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
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
                        <form onSubmit={handelFormSubmitRegister} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" />
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;