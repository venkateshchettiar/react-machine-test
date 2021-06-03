import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  const handleSaveButton = () => {
    window.location.href = "http://localhost:3000/user";
    localStorage.setItem(
      "userData",
      JSON.stringify({
        user: userData.user,
        password: password,
      })
    );
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
            type="password"
            class="w-25 form-control"
            id="inputPassword"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          size="sm"
          style={{ marginLeft: "112px", marginTop: "25px" }}
          onClick={handleSaveButton}
        >
          Save
        </Button>
      </div>
    </>
  );
};
