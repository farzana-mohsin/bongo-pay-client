import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <Link to='/login'>
          <button className='btn  bg-[#6faf9f] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl lg:ml-2 hover:bg-[#727C82] border-[#f77d5c]'>
            Login
          </button>
        </Link>
        <Link to='/register'>
          <button className='btn  bg-[#6faf9f] text-white lg:px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#727C82] border-2 border-[#f77d5c]'>
            Register
          </button>
        </Link>
      </div>

      {/* <div>
      <div className='navbar py-6 shadow-lg mx-auto bg-[#d4f1e9] lg:px-8'>
        <div className='navbar-start'>
          <div className='dropdown dropdown-hover'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content z-[3] p-2 shadow bg-base-100 rounded-box w-52 '
            >
              <li className=''>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#f77d5c] " : "font-bold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className=' lg:mr-0'>
                <NavLink
                  to='/need-volunteers'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#f77d5c]" : "font-bold"
                  }
                >
                  Volunteers Needed
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/add-post'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#f77d5c]" : "font-bold"
                  }
                >
                  Add Volunteer Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/manage-my-posts'
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#f77d5c]" : "font-bold"
                  }
                >
                  Manage My Posts
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img
              className='w-[80%] lg:w-[50%] h-[40%]'
              src='https://i.ibb.co/kHvrYjc/logo-default-334x134.png'
              alt=''
            />
          </div>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='text-lg flex flex-row px-1 lg:space-x-5 justify-center items-center'>
            {navLinks}
          </ul>
        </div>
        <div className=' flex flex-col md:flex-row'>
          {user ? (
            <div className='flex md:flex-row items-center gap-2'>
              <div
                className='tooltip tooltip-bottom border-none bg-none rounded-full mr-2 ml-0 py-2'
                data-tip={user?.displayName || "user not found"}
              >
                <button className='rounded-full bg-none border-none lg:w-12'>
                  <img
                    className=' md:block rounded-full bg-none border-none'
                    alt='image not found'
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/YDgsXWt/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
                    }
                  />
                </button>
              </div>

              <button
                className='btn bg-[#6faf9f] hover:bg-[#727C82] text-white px-2 py-1 lg:px-4 lg:py-2 border-2 border-[#f77d5c] text-xs lg:text-sm rounded-xl lg:mr-3'
                onClick={() => handleSignOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className='flex flex-row'>
              <Link to='/login'>
                <button className='btn  bg-[#6faf9f] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl lg:ml-2 hover:bg-[#727C82] border-[#f77d5c]'>
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className='btn  bg-[#6faf9f] text-white lg:px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#727C82] border-2 border-[#f77d5c]'>
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        <label className='cursor-pointer grid place-items-center ml-2 lg:ml-6'>
          <input
            onChange={handleToggle}
            type='checkbox'
            value='coffee'
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='5'
            />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
      </div>
    </div> */}
    </div>
  );
};

export default Home;
