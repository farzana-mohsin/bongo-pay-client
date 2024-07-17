import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pin = e.target.pin.value;
    console.log(email, pin);

    const userData = {
      email: email,
      pin: pin,
    };

    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        toast.success("You have logged in successfully!");

        setTimeout(function () {
          navigate("/cash-in");
        }, 2000);
      })
      .catch(() => {
        toast.error("Credentials don't match, please try again");
      });
  };

  return (
    <div className='mb-10 lg:mb-2'>
      <h2>user: {user?.email}</h2>
      {/* <Helmet>
      <title>Holity | Login</title>
    </Helmet> */}
      <div className='lg:h-[calc(100vh-290px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-[#267d6c] bg-opacity-80 text-white mx-auto my-3 border-2 border-yellow-700'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Login to your account
        </h2>
        <p className='text-sm text-center text-[#ff9d41] mb-5'>
          Dont have an account? Sign up{" "}
          <Link
            to='/register'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
        </p>
        <div className='my-6 space-y-4'></div>
        <div className='flex items-center w-full my-2'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 py-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>
        <form
          onSubmit={handleLogIn}
          className='card-body py-0'
        >
          <div className='form-control '>
            <label className='label'>
              <span className='label-text text-white'>Email</span>
            </label>
            <input
              name='email'
              type='email'
              placeholder='email'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control pt-0 mt-0'>
            <label className='label'>
              <span className='label-text text-white'>Pin</span>
            </label>
            <input
              name='pin'
              type='text'
              pattern='\d{1,5}'
              placeholder='Insert your pin'
              className='w-full px-3 py-2 border-2 rounded-md border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            <label className='label'></label>
          </div>
          <div className='form-control'>
            <button className='w-full px-8 py-3 font-semibold bg-opacity-80 border-white btn bg-[#ff9954] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl hover:bg-[#727C82]'>
              Login
            </button>
          </div>
        </form>
        {/* {loginError && (
        <p className='text-red-600 text-lg pb-3 ml-7 mt-0 mb-6'>
          {loginError}
        </p>
      )}
      {loginSuccess && (
        <p className='text-green-600 text-xl pb-3 ml-8 mt-0 mb-6'>
          {loginSuccess}
        </p>
      )} */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
