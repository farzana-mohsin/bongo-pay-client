import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CashIn = () => {
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState(40);

  const handleCashIn = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;

    fetch(`${import.meta.env.VITE_API_URL}/cash-in`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email: user?.email, amount, status: "pending" }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${"$" + amount} added successfully`);

        setTimeout(function () {
          // navigate(from);
        }, 2000);
      });
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBalance(data.balance));
  }, [user?.email]);

  return (
    <div>
      <form onSubmit={handleCashIn}>
        <input
          className='p-2 border-black'
          type='number'
          name='amount'
        />
        <input
          type='submit'
          value='Add Amount'
        />
      </form>
      <h1>status: Pending</h1>
      <h1>balance: ${balance}</h1>
      <ToastContainer />
    </div>
  );
};

export default CashIn;
