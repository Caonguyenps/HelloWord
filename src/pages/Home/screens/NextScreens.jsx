import React from "react";
import { useHistory } from "react-router-dom";
import path from "../../../resources/path";

export default function NextScreens() {
  const history = useHistory();

  const handleClickBack = () => {
    history.push(path.HOME);
  };
  return (
    <div>
      <div>
        <span>Next Pages</span>
      </div>
      <div>
        <span onClick={() => handleClickBack(path.HOME)}>Back</span>
      </div>
    </div>
  );
}
