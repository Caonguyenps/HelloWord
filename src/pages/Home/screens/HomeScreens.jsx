import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import path from "../../../resources/path";
import ModalComponent from "../../../components/modal/Modal.component";

export default function HomeScreens() {
  const history = useHistory();

  const handleClickNext = () => {
    history.push(path.NEXT);
  };

  return (
    <div>
      <div>
        <span onClick={() => handleClickNext(path.NEXT)}>Next</span>
      </div>
      <div className="mt-5 ml-5">
        <ModalComponent />
      </div>
    </div>
  );
}
