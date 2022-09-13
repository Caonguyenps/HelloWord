import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import InputComponent from "../../../components/Input/Input.component";
import validate from "../../../Helper/Validate";
import ButtonSubmitComponent from "../../../components/button/ButtonSubmit.component";
import ModalErrorComponent from "../../../components/Model/ModalError.component";
import ModalSuccessComponent from "../../../components/Model/ModalSuccess.component";
import { forgotPassword } from "../../../api/user.api";

const ForgotPasswordScreens = (props) => {
  const [data, setData] = useState({
    title: "Email Register ",
    name: "name",
    type: "email",
  });
  const [email, setEmail] = useState();
  const [msgError, setMsgError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (msgError == "") {
      props.handleChangeLoading(true);
      const data = {
        email: email,
      };
      await forgotPassword(data)
        .then((res) => {
          props.handleChangeLoading(false);
          setOpenModal(true);
        })
        .catch((error) => {
          props.handleChangeLoading(false);
          if (error.status == 409 || error == 500) {
            setOpenModalError(true);
          }
        });
    }
  };

  const handleChangeInput = (event) => {
    setEmail(event.target.value);
    validate.validateEmail(event.target.value);
    setMsgError(validate.validateEmail(event.target.value));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseModalError = () => {
    setOpenModalError(false);
  };

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
              <div className="wrap-input">
                <InputComponent
                  data={data}
                  handleChangeInput={handleChangeInput}
                />
                <div class="msg-error">
                  <span>{msgError}</span>
                </div>
              </div>
            </form>
            <div className="wrap-btn">
              <ButtonSubmitComponent
                title="Accept"
                handleSubmitForm={handleSubmitForm}
              />
            </div>
          </div>
        </div>
        <ModalErrorComponent
          open={openModalError}
          handleClose={handleCloseModalError}
          title="Gmail này hiện chưa được đăng kí, xin vui lòng kiểm tra lại"
        />

        <ModalSuccessComponent
          open={openModal}
          handleClose={handleCloseModal}
          title="Hệ thông đã gửi email xác nhận, xin vui lòng kiểm tra gmail"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordScreens;
