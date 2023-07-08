import React from "react";
import googleLogo from "../../assets/google-icon.svg";
import appleLogo from "../../assets/apple-icon.svg";
import "./LandingPage.css";

//----------------------------
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth, provider, handleAuth } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../../features/users/userSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//----------------------------

const LandingPage = () => {
  //----------------------------------

  const dispatch = useDispatch();
  // here (navigate => history)
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // this function only runs when the variable userName is updated
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/dashboard");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  //----------------------------------

  return (
    <>
      {/* <div className='left-cont'>
          <h1 className='heading'>Board.</h1>
        </div>
        <div className='right-cont'>
          <div className='auth-cont-main'>
              <h1>Sign In</h1>
              <p>Sign in to your account</p>

              <div className='auth-cont'> */}

      {!userName ? (
        <div className="main-cont">
          <div className="left-cont">
            <h1 className="heading">Board.</h1>
          </div>
          <div className="right-cont">
            <div className="auth-cont-main">
              <h1>Sign In</h1>
              <p>Sign in to your account</p>

              <div className="auth-cont">
                <button onClick={handleAuth} className="auth-btn">
                  <img className="icon" src={googleLogo} />
                  <p>Sign in with Google</p>
                </button>
                <button className="auth-btn">
                  <img className="icon" src={appleLogo} />
                  <p>Sign in with Apple</p>
                </button>
              </div>

              <form className="form-cont">
                <label>Email Address</label>
                <input type="email" className="email" required/>
                <label>Password</label>
                <input type="password" className="passw" required/>
                <a className="forgot-passw" href="#">Forgot Password?</a>
                <button className="submit-btn">Sign In</button>
              </form>

              <p className="end-line">Don't have an account? <a href="#">Register Here</a></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="sign-out-cont">
          <button className="sign-out">
            <img className="user-img" src={userPhoto} alt={userName} />
            <div className="dropdown">
              <span onClick={handleAuth}>Sign out</span>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default LandingPage;
