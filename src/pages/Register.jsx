// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/Authcontext";
// import { auth } from "../../firebase.init";

function Register() {
  const { createUser } = use(AuthContext);
  const navigate = use(AuthContext);

  const handleUserRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 border border-gray-800 shadow-gray-800 shadow-md p-5">
      <h1 className="text-2xl font-bold text-center">Please Register</h1>
      <div className="card-body">
        <form onSubmit={handleUserRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
