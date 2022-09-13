import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ButtonSubmitComponent from "../../../components/button/ButtonSubmit.component";
import InputComponent from "../../../components/Input/Input.component";
import ModalSuccessComponent from "../../../components/Model/ModalSuccess.component";
import ModalErrorComponent from "../../../components/Model/ModalError.component";
import validate from "../../../Helper/Validate";
import { useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import path from "../../../resources/path";
import { login } from "../../../api/user.api";
import { flushSync } from "react-dom";

const LoginScreens = (props) => {
  const [arrTitle, setArrTitle] = useState([
    { title: "email", name: "email", type: "email" },
    { title: "password", name: "password", type: "password" },
  ]);

  const [data, setData] = useState({ email: "", password: "" });
  const [msgError, setMsgError] = useState({ email: "", password: "" });
  const [openModal, setOpenModal] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [title, setTitle] = useState("");
  const history = useHistory();

  useEffect(() => {
    props.handleChangeLoading(false);
  }, []);

  const checkValidateInput = (name, value) => {
    let err;
    switch (name) {
      case "email":
        err = validate.validateEmail(value);
        break;
    }
    setMsgError((msgError) => ({
      ...msgError,
      [name]: err,
    }));
  };

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    checkValidateInput(name, value);
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const listsInput = arrTitle.map((e, index) => {
    return (
      <div className="wrap-input">
        <InputComponent data={e} handleChangeInput={handleChangeInput} />
        <div class="msg-error">
          <span>{msgError[e.name]}</span>
        </div>
      </div>
    );
  });

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    props.handleChangeLoading(true);
    await login(data)
      .then((res) => {
        props.handleChangeLoading(false);
        history.goBack();
        setOpenModal(true);
      })
      .catch((error) => {
        props.handleChangeLoading(false);
        setTitle("Đăng nhập không thành công");
        setOpenModalError(true);
      });
  };

  const handleCloseModal = () => {};

  const handleCloseModalError = () => {
    setOpenModalError(false);
  };

  const handleClickForgotPassword = () => {
    history.push(path.FORGOT_PASSWORD);
  };

  return (
    <div className="wrap-register">
      <div className="wrap-body">
        <div className="account-form">
          <div className="title-account">
            <span>Login</span>
          </div>
          <div className="wrap-icon-account">
            <div className="icon-account">
              <PersonIcon className="icon" />
            </div>
          </div>
          <div className="wrap-form">
            <form onSubmit={handleSubmitForm}>
              {listsInput}
              <div className="bottom-form">
                <Grid container>
                  <Grid item lg={3}>
                    <div className="wrap-btn-form item-right">
                      <span>Register</span>
                    </div>
                  </Grid>
                  <Grid item lg={6}>
                    <div className="wrap-btn">
                      <ButtonSubmitComponent
                        title="Login"
                        handleSubmitForm={handleSubmitForm}
                      />
                    </div>
                  </Grid>
                  <Grid item lg={3}>
                    <div className="wrap-btn-form item-left">
                      <span onClick={handleClickForgotPassword}>
                        Forgot Password?
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Đăng nhập thành công"
      />
      <ModalErrorComponent
        open={openModalError}
        handleClose={handleCloseModalError}
        title={title}
      />
    </div>
  );
};

export default LoginScreens;
