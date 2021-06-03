import React from "react";
import { Button } from "react-bootstrap";

export const User = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  const handleLogout = () => {
    window.location.href = "http://localhost:3000/";
    localStorage.removeItem("userData");
  };

  const handlePasswordChange = () => {
    window.location.href = "http://localhost:3000/changepassword";
  };
  return (
    <>
      <div
        class="w-50 mb-3 row"
        style={{ marginLeft: "100px", marginTop: "25px" }}
      >
        <label for="staticText" class="col-sm-2 col-form-label">
          UserName
        </label>
        <div class="col-sm-10">
          <h2>{userData.user}</h2>
        </div>
      </div>
      <div
        class="w-50 mb-3 row"
        style={{ marginLeft: "100px", marginTop: "25px" }}
      >
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            disabled
            type="password"
            class="w-25 form-control"
            id="inputPassword"
            defaultValue={userData.password}
          />
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          size="sm"
          style={{ marginLeft: "112px", marginTop: "25px" }}
          onClick={handlePasswordChange}
        >
          Change Password
        </Button>
        <Button
          variant="secondary"
          size="sm"
          style={{ marginLeft: "20px", marginTop: "25px" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
};
