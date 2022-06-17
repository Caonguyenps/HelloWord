import React, { useState } from "react";
import InputComponent from "../../../components/Input/Input.component";
import PersonIcon from "@material-ui/icons/Person";
import "./register.css";
const RegisterScreens = () => {
  const [arrTitle, setArrTitle] = useState([
    { title: "Email", name: "email", type: "email" },
    { title: "Full Name", name: "fullName", type: "text" },
    { title: "Phone Number", name: "phoneNumber", type: "number" },
    { title: "Address" },
    { title: "Password", name: "password", type: "password" },
    { title: "Confirm Password" },
  ]);
  const [data, setData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
  });
  const [msgError, setMsgError] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    checkValidateInput(name, value);
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const checkValidateInput = (name, value) => {
    if (name == "phoneNumber") {
      if (value.length < 10) {
        setMsgError((msgError) => ({
          ...msgError,
          [name]: "phone number has lenght > 10",
        }));
      }
    }
  };

  console.log(data);

  const listsInput = arrTitle.map((e, index) => {
    return (
      <div>
        <InputComponent data={e} handleChangeInput={handleChangeInput} />
        <span class="msg-error">{msgError[e.name]}</span>
      </div>
    );
  });

  return (
    <div className="wrap-register">
      <div className="wrap-body">
        <div className="account-form">
          <div className="title-account">
            <span>Register</span>
          </div>
          <div className="wrap-icon-account">
            <div className="icon-account">
              <PersonIcon className="icon" />
            </div>
          </div>

          {listsInput}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreens;
