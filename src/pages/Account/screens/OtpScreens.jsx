import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ButtonSubmitComponent from "../../../components/button/ButtonSubmit.component";
import InputComponent from "../../../components/Input/Input.component";
import queryString from "query-string";
import { confirmOtpRegister, resendOTP } from "../../../api/user.api";
import ModalSuccessComponent from "../../../components/Model/ModalSuccess.component";

const OtpScreens = (props) => {
  const query = queryString.parse(props.location.search);
  const email = query.email;
  const [arrTitle, setArrTitle] = useState([
    { title: "Confirm OTP", name: "otp", type: "number" },
  ]);
  const [data, setData] = useState({ otp: "" });
  const [emailRegister, setEmailResgister] = useState();
  const [msgError, setMsgError] = useState("");
  const [status, setStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    props.handleChangeLoading(true);
    if (email) {
      setEmailResgister(email);
      props.handleChangeLoading(false);
    }
  }, [email]);

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const listsInput = arrTitle.map((e, index) => {
    return (
      <div className="wrap-input">
        <InputComponent data={e} handleChangeInput={handleChangeInput} />
        <div class="msg-error" style={{ textAlign: "center" }}>
          <span>{msgError}</span>
        </div>
      </div>
    );
  });

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    data.email = emailRegister;
    await confirmOtpRegister(data)
      .then((res) => {
        console.log(res);
        setOpenModal(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.status == 401) {
          setMsgError("Mã OTP đã hết thời gian");
        } else if (error.status == 403) {
          setMsgError("Mã OTP không chính xác");
        } else {
          setMsgError("Xác thực OTP lỗi");
        }
        setStatus(true);
      });
  };

  const handleResendOTP = async (event) => {
    event.preventDefault();
    const data = {
      email: emailRegister,
    };
    props.handleChangeLoading(true);
    await resendOTP(data)
      .then((res) => {
        props.handleChangeLoading(false);
        setStatus(false);
        setMsgError("");
      })
      .catch((error) => {
        console.log(error);
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
          <div className="wrap-title">
            <div>
              <span>
                Password has been send to your email, check your mail please.
              </span>
            </div>
            <div className="mt-2 time">
              <span>Time remaining: </span>{" "}
              <span className="title-time">05:00</span>
            </div>
          </div>
          <div className="wrap-form">
            <form>
              {listsInput}
              <div className="wrap-btn">
                {status ? (
                  <ButtonSubmitComponent
                    title="Send Again"
                    handleSubmitForm={handleResendOTP}
                  />
                ) : (
                  <ButtonSubmitComponent
                    title="Accept"
                    handleSubmitForm={handleSubmitForm}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Đăng kí thành công, vui lòng đăng nhập để sử dụng"
      />
    </div>
  );
};

export default OtpScreens;
