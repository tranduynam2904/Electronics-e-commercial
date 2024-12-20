import "./SignIn.css";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export default function SignIn() {
  const {
    onChangeEmail,
    onChangePassword,
    submit,
    email,
    password,
    focusEmail,
    inputEmailRef,
    focusPassWord,
    inputPassWordRef,
    hidesidebar,
    setShow,
    setUser,
  } = useContext(AppContext);

  useEffect(() => {
    setShow(false);
    setUser(false);
  });
  const handleRegister = () => {
    window.location.href = `/register`;
    hidesidebar();
  };
  return (
    <form onSubmit={submit}>
      <div className="signin">
        <div className="handle_signin">
          <h1 style={{ marginTop: "20px", textAlign: "center" }}>Sign In</h1>
          <div style={{ marginTop: "30px" }} className="handle_emailpassword">
            <div style={{ marginBottom: "15px" }} className="handle_input">
              <MdEmail onClick={() => focusEmail()} className="signin_icon" />
              <input
                ref={inputEmailRef}
                value={email}
                onChange={onChangeEmail}
                type="email"
                placeholder="Email"
                required="required"
              ></input>
            </div>
            <div className="handle_input">
              <AiFillLock
                onClick={() => focusPassWord()}
                className="signin_icon"
              />
              <input
                onChange={onChangePassword}
                value={password}
                ref={inputPassWordRef}
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginRight: "50px",
                textAlign: "end",
              }}
            >
              <Link
                // to={`/register`}
                onClick={handleRegister}
                style={{ textDecoration: "underline" }}
              >
                Register an account
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="handle_submit">
                <button onClick={submit} type="submit">
                  Submit
                </button>
                <div className="handle_red">
                  <p
                    className="handle_rotatecolor"
                    style={{ background: "blue" }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
