import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const UserManagement = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
      const data = await res.json();
      setPendingRequests(data);
    }
    fetchData();
  }, []);

  const handleActiveUser = (email) => {
    const activeUser = {
      email: email,
      role: "user",
    };

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "PATCH",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(activeUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `The user is now active!`,
            showConfirmButton: false,
            timer: 2500,
          });

          const remainingPendingRequests = pendingRequests.filter(
            (request) => request.email !== email
          );
          setPendingRequests(remainingPendingRequests);
        }
      });
  };

  const handleActiveAgent = (email) => {
    const activeAgent = {
      email: email,
      role: "agent",
    };

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "PATCH",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(activeAgent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `The agent is active now!`,
            showConfirmButton: false,
            timer: 2500,
          });

          const remainingPendingRequests = pendingRequests.filter(
            (request) => request.email !== email
          );
          setPendingRequests(remainingPendingRequests);
        }
      });
  };

  return (
    <div>
      <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2'>
        Manage Users
      </h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Requester&apos;s Email</th>
              {/* <th>Status</th> */}
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((request, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{request?.email}</td>
                {/* <td>{request.status}</td> */}
                {/* 
            <td>
              {request.status === "review" ? (
                <p>Under Review</p>
              ) : request.status === "accepted" ? (
                <p>Accepted</p>
              ) : (
                <p>Rejected</p>
              )}
            </td> */}

                <td>
                  <button
                    className='btn bg-[#ffcc05] text-black lg:px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#b86f3b] border-2 border-white'
                    onClick={() => handleActiveUser(request?.email)}
                  >
                    Active User
                  </button>
                </td>
                <td>
                  <button
                    className='btn bg-[#ffcc05] text-black px-4 lg:py-2 text-sm rounded-xl ml-2 hover:bg-[#b86f3b] border-2 border-white'
                    onClick={() => handleActiveAgent(request?.email)}
                  >
                    Active Agent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
