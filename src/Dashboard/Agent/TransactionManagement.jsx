import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const TransactionManagement = () => {
  const loader = useLoaderData();
  const [allRequests, setAllRequests] = useState(loader);

  const handleAccept = (email, _id, amount) => {
    const reviewStatus = {
      email,
      amount,
      status: "approved",
    };
    fetch(`${import.meta.env.VITE_API_URL}/cash-in/${_id}`, {
      method: "PATCH",
      // credentials: "include",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(reviewStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Request approved",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }

        const newAllRequests = allRequests.filter(
          (request) => request._id != _id
        );

        setAllRequests(newAllRequests);
      });
  };

  return (
    <div>
      <div className='overflow-x-auto'>
        <h2 className='text-3xl text-center mb-16 bg-[#ffcc05] p-2'>
          Requests To Review: {allRequests?.length}
        </h2>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Requester&apos;s Email</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allRequests &&
              allRequests.map((request, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{request.email}</td>
                  <td>${request.amount}</td>
                  {/* <td>

                  {request.status}
                </td> */}
                  <td>
                    {request.status === "pending" ? (
                      <div className='flex gap-3'>
                        <button
                          onClick={() =>
                            handleAccept(
                              request.email,
                              request._id,
                              request.amount
                            )
                          }
                          className='btn btn-outline rounded-none'
                        >
                          Accept
                        </button>
                        {/* <div>
                        <button
                          onClick={() => handleReject(item._id)}
                          className='btn btn-outline rounded-none'
                        >
                          Reject
                        </button>
                      </div> */}
                      </div>
                    ) : (
                      "Accepted"
                    )}
                  </td>

                  <td>
                    {/* <button
                    onClick={() => handleDelete(item._id)}
                    className='btn btn-ghost'
                  >
                    <FaTrash className='text-red-600 text-lg'></FaTrash>
                  </button> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionManagement;
