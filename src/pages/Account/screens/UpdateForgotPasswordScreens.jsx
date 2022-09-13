import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import InputComponent from "../../../components/Input/Input.component";
import validate from "../../../Helper/Validate";
import ButtonSubmitComponent from "../../../components/button/ButtonSubmit.component";
import ModalSuccessComponent from "../../../components/Model/ModalSuccess.component";
import ModalErrorComponent from "../../../components/Model/ModalError.component";
import { updatePasswordForgot } from "../../../api/user.api";
import path from "../../../resources/path";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { checkTimeToken } from "../../../auth/auth";

const UpdateForgotPasswordScreens = (props) => {
  const history = useHistory();
  const query = queryString.parse(props.location.search);
  const token = query.q;
  const [openModal, setOpenModal] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [title, setTitle] = useState("");
  const [listsInput, setListInput] = useState([
    {
      title: "New password",
      name: "newPassword",
      type: "password",
    },
    {
      title: "Confirm password",
      name: "confirmPassword",
      type: "password",
    },
  ]);
  const [data, setData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [msgError, setMsgError] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const checkValidateInput = (name, value) => {
    let err;
    switch (name) {
      case "confirmPassword":
        err = validate.validateConfirmPassword(value, data.newPassword);
        break;
    }
    setMsgError((msgError) => ({
      ...msgError,
      [name]: err,
    }));
    console.log(err);
  };

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    checkValidateInput(name, value);
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (token) {
      if (!checkTimeToken(token)) {
        setTitle(
          "Đường dẫn của bạn đã vượt quá thời gian, xin vui lòng thử lại sau"
        );
        setOpenModalError(true);
      }
    } else {
      history.push(path.HOME);
    }
  }, [token]);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const dataPassword = {
      newPassword: data.newPassword,
    };
    props.handleChangeLoading(true);
    await updatePasswordForgot(dataPassword, token)
      .then((res) => {
        props.handleChangeLoading(false);
        setOpenModal(true);
      })
      .catch((error) => {
        props.handleChangeLoading(false);
        setTitle("Đổi mật khẩu không thành công");
        setOpenModalError(true);
      });
  };

  const handleCloseModal = () => {};
  const handleCloseModalError = () => {
    setOpenModalError(false);
    history.push(path.HOME);
  };

  const showListsInput = listsInput.map((e, index) => {
    return (
      <div className="wrap-input">
        <InputComponent data={e} handleChangeInput={handleChangeInput} />
        <div className="wrap-title-content">
          <span class="msg-error">{msgError[e.name]}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="wrap-register">
      <div className="wrap-body">
        <div className="account-form">
          <div className="title-account">
            <span>Forgot Password</span>
          </div>
          <div className="wrap-icon-account">
            <div className="icon-account">
              <PersonIcon className="icon" />
            </div>
          </div>
          <div className="wrap-form">
            <form onSubmit={handleSubmitForm}>
              {showListsInput}
              <div className="  wrap-btn">
                <ButtonSubmitComponent
                  title="Accept"
                  handleSubmitForm={handleSubmitForm}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Đổi mật thành công"
      />
      <ModalErrorComponent
        open={openModalError}
        title={title}
        handleClose={handleCloseModalError}
      />
    </div>
  );
};

export default UpdateForgotPasswordScreens;
