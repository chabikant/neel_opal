import { useEffect, useState } from "react";

import "./App.css";
import Card from "./Card";
import Modal from "./Modal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  async function getUsersDetails() {
    try {
      const request = await fetch(
        "https://joaosilgo.github.io/dummy_db/users.json"
      );
      if (!request.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await request.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUsersDetails();
  }, []);

  const handleHeartClick = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, liked: !user.liked };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleEditClick = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
    setEditMode(true);
    setEditedUser(user);
  };

  const handleDeleteClick = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleSaveEdit = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === editedUser.id) {
        return editedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedUser({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="card-container">
      {users.map((user) => (
        <Card
          {...user}
          key={user.id}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
          handleHeartClick={handleHeartClick}
        />
      ))}
      {editMode && selectedUser && (
        <Modal>
          <div style={{borderBottom:"1px groove grey",}}>
            <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              
              marginLeft:"15px",
              marginRight:"15px"
            }}
          >
            <h2>Basic Modal</h2>
            <span
              style={{ cursor: "pointer", fontSize:"35px" }}
              fontSize={"40px"}
              onClick={handleCancelEdit}
            >
              &times;
            </span>
          </div >
          </div>
          <div style={{
            height:"70%",
            borderBottom:"1px groove grey"
          }}>
          <div className="form-group" >
            <label >
            <span style={{color: "red"}}>*</span>
              <span className="required-field"> Name:</span>
            </label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              style={{width: "70%",
            height:"25px"}}
            />
          </div>
          <div className="form-group">
            <label>
            <span style={{color: "red"}}>*</span>
              <span className="required-field"> Email:</span>
            </label>
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              style={{width: "70%",
              height:"25px"}}
            />
          </div>
          <div className="form-group">
            <label>
            <span style={{color: "red"}}>*</span>
              <span className="required-field"> Phone:</span>
            </label>
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              style={{width: "70%",
              height:"25px"}}
            />
          </div>
          <div className="form-group">
            <label>
            <span style={{color: "red"}}>*</span>
              <span className="required-field"> Website:</span>
            </label>
            <input
              type="text"
              name="website"
              value={editedUser.website}
              onChange={handleChange}
              style={{width: "70%",
              height:"25px"}}
            />
          </div>
          </div>
          <div className="modal-buttons" style={{
            marginLeft:"300px",
            marginTop:"7px"
          }}>
            <button onClick={handleCancelEdit} style={{marginRight:"10px"}}>Cancel</button>
            <button onClick={handleSaveEdit} style={{color:"white", backgroundColor:"teal", border:"1px solid teal"}}>OK</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
