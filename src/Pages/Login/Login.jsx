import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const formData = new FormData(form);
    const loginData = Object.fromEntries(formData.entries());

    // Destructure
    const { email, password } = loginData;

    // Login
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('Login successful! Welcome back!');
        navigate(`${location.state ? location.state : "/"}`);
        form.reset();

      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Login failed: ${errorMessage}`);
      });
  }


  // Handle Google Auth
  const handleGoogleAuth = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        if (user.email) {
          toast.success('Google login successful! Welcome to our platform.');
          navigate(`${location.state ? location.state : "/"}`);
        }
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(`Google login failed: ${errorMessage}`);
      });
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 my-10">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to continue to your dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 input input-bordered w-full"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 input input-bordered w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-2">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Auth Button */}
        <button onClick={handleGoogleAuth} className="btn w-full bg-white border text-gray-800 hover:bg-gray-100">
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 488 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#EA4335" d="M488 261.8c0-17.8-1.6-35.2-4.6-51.8H249v98h134c-6 32.4-24.5 59.7-51.9 78.2l84 65.4c49.1-45.2 77.9-111.7 77.9-189.8z" />
            <path fill="#34A853" d="M249 492c67 0 123.4-22.1 164.5-60.1l-84-65.4c-23.3 15.6-53.1 24.9-80.5 24.9-61.9 0-114.3-41.8-133-98.1l-87 67.1C71.6 454.3 153.7 492 249 492z" />
            <path fill="#4A90E2" d="M116 297.8c-10.3-30.4-10.3-63.2 0-93.6l-87-67.1C5 190.8 0 218.9 0 249s5 58.2 29 112.9l87-67.1z" />
            <path fill="#FBBC05" d="M249 100c35.6 0 67.5 12.2 92.6 36l69.5-69.5C378.5 23.4 317.1 0 249 0 153.7 0 71.6 37.7 29 101.1l87 67.1C134.7 141.8 187.1 100 249 100z" />
          </svg>
          Login with Google
        </button>

        {/* Redirect to signup */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to={'/signup'}>
            <span className="text-[#D9214E] hover:underline cursor-pointer font-semibold">
              Signup here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
