import React, { useState } from "react";
import InputComponent from "../../../components/Input/Input.component";
import PersonIcon from "@material-ui/icons/Person";
import ButtonSubmitComponent from "../../../components/button/ButtonSubmit.component";
import validate from "../../../Helper/Validate";
import { register } from "../../../api/user.api";
import ModalErrorComponent from "../../../components/Model/ModalError.component";
import { useHistory } from "react-router-dom";
import path from "../../../resources/path";
import "./account.css";

const RegisterScreens = (props) => {
  const history = useHistory();
  const [arrTitle, setArrTitle] = useState([
    { title: "Email", name: "email", type: "email" },
    { title: "Full Name", name: "fullName", type: "text" },
    { title: "Phone Number", name: "phoneNumber", type: "number" },
    { title: "Address", name: "address", type: "address" },
    { title: "Password", name: "password", type: "password" },
    { title: "Confirm Password", name: "confirmPassword", type: "password" },
  ]);
  const [data, setData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [msgError, setMsgError] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    checkValidateInput(name, value);
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const [openModal, setOpenModal] = useState(false);

  const checkValidateInput = (name, value) => {
    let err;
    switch (name) {
      case "phoneNumber":
        err = validate.validatePhoneNumber(value);
        break;
      case "email":
        err = validate.validateEmail(value);
        break;
      case "fullName":
        err = validate.validateString(name, value);
        break;
      case "address":
        err = validate.validateString(name, value);
        break;
      case "confirmPassword":
        err = validate.validateConfirmPassword(value, data.password);
        break;
    }
    setMsgError((msgError) => ({
      ...msgError,
      [name]: err,
    }));
  };

  const listsInput = arrTitle.map((e, index) => {
    return (
      <div className="wrap-input">
        <InputComponent data={e} handleChangeInput={handleChangeInput} />
        <div className="wrap-title-content">
          <span class="msg-error">{msgError[e.name]}</span>
        </div>
      </div>
    );
  });

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    props.handleChangeLoading(true);
    await register(data)
      .then((res) => {
        history.push({
          pathname: path.OTP,
          search: `?email=${data.email}`,
        });
      })
      .catch((error) => {
        props.handleChangeLoading(false);
        setOpenModal(true);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
          <div className="wrap-form">
            <form onSubmit={handleSubmitForm}>
              {listsInput}
              <div className="wrap-btn">
                <ButtonSubmitComponent
                  title="Register"
                  handleSubmitForm={handleSubmitForm}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalErrorComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Đăng kí không thành công"
      />
    </div>
  );
};

export default RegisterScreens;
