import { ToastContainer, toast } from "react-toastify";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const navigate = useNavigate();
  // const from = "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const pin = e.target.pin.value;

    const userData = {
      name: name,
      email: email,
      phone: phone,
      pin: pin,
    };

    if (pin.length < 5) {
      toast.error("Pin should have at least 5 characters.");
      return;
    } else if (!/[^\d+$]/.test(pin)) {
      toast.error("Password should contain only numbers");
      return;
    }

    // create user
    fetch(`${import.meta.env.VITE_API_URL}/register`, {
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
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Request submitted successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
          // navigate("/manage-my-posts");
        }
      });
  };

  return (
    <div className='mb-10 lg:mb-2'>
      {/* <Helmet>
        <title>Holity | Register</title>
      </Helmet> */}

      <div className='lg:h-[calc(100vh-290px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-[#267d6c]  bg-opacity-80 text-white mx-auto my-3 border-2 border-yellow-700'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Register here!
        </h2>
        <p className='text-sm text-center text-[#ff9d41] mb-5'>
          Already have an account? Please login{" "}
          <Link
            to='/login'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
        </p>

        <div className='flex items-center w-full'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 my-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>
        <form
          onSubmit={handleRegister}
          className='card-body py-0'
        >
          <div className='form-control py-0'>
            <label className='label'>
              <span className='label-text text-white'>Name</span>
            </label>
            <input
              name='name'
              type='text'
              placeholder='name'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control'>
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
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Phone</span>
            </label>
            <input
              name='phone'
              type='number'
              placeholder='Your contact number'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control relative'>
            <label className='label'>
              <span className='label-text text-white'>Pin</span>
            </label>
            <input
              name='pin'
              type={showPassword ? "text" : "password"}
              placeholder='password'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            <span
              className='absolute top-12 right-3 text-black text-lg'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <MdRemoveRedEye />}
            </span>
          </div>
          <div className='form-control py-3'>
            <button className='w-full px-8 py-3 font-semibold bg-opacity-80 border-white btn  bg-[#ff9954] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl  hover:bg-[#727C82]'>
              Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
