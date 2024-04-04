import { FiMail, FiPhone, FiGlobe, FiHeart, FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";

const Card = (data) => {
  const {
    id,
    name,
    email,
    phone,
    website,
    liked,
    handleDeleteClick,
    handleEditClick,
    handleHeartClick,
  } = data;

  return (
    <div className="card">
       <div className="card-img" style={{
        height:"40%",
        backgroundColor:"#f1f1f1",

       }}>
        <BsPersonSquare style={{
            width:"50%",
            height:"100%",
            marginLeft:"25%"
        }}/>
        </div>
      <div className="card-info" style={{
        paddingLeft:"20px",
        backgroundColor:"white"

      }}>
      <h3>{name}</h3>
      <p>
        <FiMail /> {email}
      </p>
      <p>
        <FiPhone /> {phone}
      </p>
      <p>
        <FiGlobe /> {website}
      </p>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          cursor: "pointer",
          onMouseHover: "blue",
          height:"10%",
          marginTop:"12px",
        
        }}
        className="button-container"
      >
        <div onClick={() => handleHeartClick(id)}>
          <FiHeart fill={liked ? "red" : "none"} stroke="red" size={20} style={{marginLeft:"20px"}}/>
        </div>
        <div onClick={() => handleEditClick(id)} className="edit-button" style={{borderLeft:"1px groove grey", width:"33%", justifyContent:"center",borderRight:"1px groove grey"}}>
          <FiEdit size={20} style={{marginLeft:"45px"}} />
        </div>
        <div onClick={() => handleDeleteClick(id)} className="delete-button">
          <FaTrash fill={"grey"} size={20} style={{marginRight:"15px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
