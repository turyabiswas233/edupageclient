import { useEffect } from "react";
import {
  AiFillEyeInvisible,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
function Input({
  id,
  title,
  value,
  setVal,
  placeHolder,
  type,
  autoComplete,
  show,
  handlePass,
}) {
  return (
    <section className="relative">
      <label className="flex-1 text-left font-bold" htmlFor={id}>
        {title}
        <b>:</b>
      </label>
      <input
        className={`placeholder:text-yellow-50/50 w-full md:w-auto  ${
          value?.length ? "ring-slate-600 ring " : ""
        }`}
        type={type ? (show ? "text" : type) : "text"}
        id={id}
        autoComplete={autoComplete ? "on" : "off"}
        placeholder={placeHolder}
        maxLength={type == "password" ? 20 : 100}
        minLength={type == "password" ? 8 : 1}
        value={value}
        required
        onChange={(e) => setVal(e.target.value)}
      />

      {type === "password" && (
        <span className="absolute top-1/2 my-2 right-2" onClick={handlePass}>
          {show ? <AiFillEyeInvisible /> : <AiOutlineEye />}
        </span>
      )}
    </section>
  );
}

export default Input;
