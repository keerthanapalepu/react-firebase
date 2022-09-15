import React , {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import * as api from '../api';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsers = async () => {
  const response = await api.fetchUser();
  setData(response.data.listing);

}
  useEffect(() => {
   getUsers();
  },[])


  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
        {console.log(data)}
      </div>


      <div className="container">
           <table className="table table-striped table-bordered">
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Pronouns</th>
                       <th>Age</th>
                       <th>Email</th>
                       <th>First Conversation</th>
                       <th>Mini Therapies</th>
                   </tr>
               </thead>
               <tbody>
                   {data?.map((user, i) => (
                       <tr key={user.id}>
                           <td>{user.name}</td>
                           <td>{user.pronouns}</td>
                           <td>{user.age}</td>
                           <td>{user.emailAddress}</td>
                           <td>{user.firstConversation}</td>
                           <td>{user.minitherapies.minitherapies.length}</td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </div>


      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
