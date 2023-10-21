import { useEffect, useState } from "react";
import Input from "../Input";
function Signup() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [conpass, setConpass] = useState("");
  const [passvalid, setpv] = useState(null);
  const [show, handlePass] = useState(false);

  function handlesubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    if (conpass.length !== 0 && pass !== conpass) {
      setpv(false);
    } else if (conpass.length !== 0 && pass == conpass) {
      setpv(true);
    } else {
      setpv(null);
    }
  });
  return (
    <div className="signup mt-10 p-16 dark:bg-slate-900 dark:text-white">
      <form
        onSubmit={handlesubmit}
        className="create backdrop-blur-lg bg-slate-100/10 w-3/5 min-w-fit px-20"
      >
        <h1 className="text-center text-3xl font-bold my-5 ">
          Create a new account
        </h1>
        {/* email */}
        <Input
          id={"email"}
          placeHolder={"enter your email"}
          setVal={setemail}
          value={email}
          autoComplete={false}
          type={"email"}
          title={"Email"}
        />
        {/* password */}
        <Input
          id={"pass"}
          placeHolder={"type your password"}
          setVal={setpass}
          value={pass}
          autoComplete={false}
          type={"password"}
          title={"Password"}
          show={show}
          handlePass={() => handlePass((pre) => !pre)}
        />
        {/* confirm password */}
        <Input
          id={"conPass"}
          placeHolder={"retype password"}
          setVal={setConpass}
          value={conpass}
          autoComplete={false}
          type={"password"}
          title={"Confirm Password"}
          show={show}
          handlePass={() => handlePass((pre) => !pre)}
        />
        {!passvalid && passvalid != null ? (
          <p className="text-red-500 font-semibold mb-5 -my-2 text-sm">
            *Password do not match
          </p>
        ) : (
          passvalid && (
            <p className="text-green-600 font-semibold mb-5 -my-2 text-sm">
              *Password is matched
            </p>
          )
        )}
        {pass.length < 8 && pass.length != 0 && (
          <p className="text-yellow-600 font-semibold -mt-5 mb-5 text-sm">
            *password must be greater than 8 character
          </p>
        )}
        {/* button */}
        <button
          className="bg-slate-900 text-slate-100 rounded-md p-3 hover:bg-yellow-400 mb-8 hover:text-black hover:font-bold duration-100 ease-out"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
