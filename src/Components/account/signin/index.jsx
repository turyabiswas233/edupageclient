import { useEffect, useState } from "react";
import Input from "../Input";
import PrimaryButton from "../../Buttons/PrimaryButton";
function Login({ child }) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [check, setchk] = useState(false);
  const [isValid, setvalid] = useState(false);
  const [show, handlePass] = useState(false);

  function handlesubmit(e) {
    e.preventDefault();
    if (isValid) alert("Login success!");
  }
  useEffect(() => {
    setvalid((pre) => (email.length == 0 || pass.length == 0 ? false : true));
  }, [email, pass]);
  return (
    <div className="signin">
      <div>
        <form
          onSubmit={handlesubmit}
          className="create backdrop-blur-lg bg-slate-100/10 w-3/5 min-w-fit px-20"
        >
          <h1 className=" text-center text-3xl underline font-bold my-10 mx-auto">
            Sign in
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
            placeHolder={"enter your password"}
            setVal={setpass}
            value={pass}
            autoComplete={false}
            type={"password"}
            title={"Password"}
            show={show}
            handlePass={() => handlePass((pre) => !pre)}
          />
          {/* check box */}
          <PrimaryButton
            classes={"flex justify-start gap-4 items-center select-none -mx-2"}
            onClick={() => setchk((pre) => !pre)}
            type={"button"}
            children={
              <>
                <div
                  className={`w-3 h-3 p-1 rounded-full ring-1 ring-offset-1 duration-150 ease-linear ${
                    check
                      ? "bg-sky-500 ring-sky-400"
                      : "bg-transparent ring-gray-400"
                  }`}
                ></div>
                <p className="text-xs">Remember me</p>
              </>
            }
          />
          {/* button */}
          <PrimaryButton
            classes={
              "bg-slate-900 text-slate-100 rounded-md p-3 hover:bg-yellow-400 hover:text-black hover:font-bold duration-100 ease-out"
            }
            textClasses={"text-center w-full"}
            text={"Login"}
            type={"submit"}
            disabled={!isValid}
          />

          <p className="underline text-right text-sm hover:text-yellow-600 duration-150 ease-out">
            <a href="/forgetPassword">forget password?</a>
          </p>
          <div className="mt-4">{child}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
