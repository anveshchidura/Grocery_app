import React, { useEffect, useState } from "react";
import { ref, get, remove } from "firebase/database";
import { database } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const StoreOwner = () => {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Define a reference to the "users" node in the database
    const usersRef = ref(database, "users");
     
    // Fetch the data from the "users" node
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          console.log(users);
          // Convert the Firebase object into an array for easier rendering
          const usersArray = Object.keys(users).map((displayName) => ({
            displayName,
            userData: users[displayName],
          }));

          setUsersData(usersArray); 
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const deleteUserData = (userId) => {
    // Define a reference to the user's data in the database
    const userRef = ref(database, `users/${userId}`);
    // Remove the user's data from the database
    remove(userRef)
      .then(() => {
        // Remove the user from the usersData state
        setUsersData((prevUsersData) =>
          prevUsersData.filter((user) => user.displayName !== userId)
        );
      })
      .catch((error) => {
        console.error("Error deleting user data:", error);
      });
      //navigate('/userprofile');
  };

  return (

    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Store Owner Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {usersData.map((user) => (
          <div
            key={user.displayName}
            className="bg-white p-4 rounded shadow-md"
          >
            <h2 className="text-lg font-semibold mb-2">User Name: {user.displayName}</h2>
            <h3 className="text-md font-semibold mb-2">Cart Items:</h3>
            <ul>
              {Object.values(user.userData.cart).map((item, index) => (
                <li key={index} className="list-disc ml-4 ">
                  {item.name}
                  [x{item.quantity}]
                </li>
              ))}
            </ul>
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-red rounded-md border border-red-600 hover:bg-green-400 hover:text-green"
              onClick={() => deleteUserData(user.displayName)}
            >
              Dispatch this Order 
              
            </button>
          </div>
        ))}
            <button
               className="mt-8 px-4 py-2 bg-blue-500 text-black rounded-md border border-blue-600 hover:bg-blue-400"
               onClick={() => navigate('/userprofile')}
            >
               Go to Home Page
            </button>
      </div>
    </div>
  );
};

export default StoreOwner;
