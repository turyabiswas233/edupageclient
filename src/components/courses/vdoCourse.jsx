import React, { useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsCloudUploadFill } from "react-icons/bs";
import { MdStickyNote2 } from "react-icons/md";
import Exams from "./exams/exams";

const VdoUpload = () => {
  const [option, setOpt] = useState("");
  const [question, setQues] = useState({
    question: "",
    options: ["jup"],
    correctAnswer: "",
  });
  const [file, setFile] = useState(null);
  return (
    <div className="form-container  flex justify-center items-center flex-wrap mb-16 pt-16 dark:text-white">
      {/* recorded class */}
      <div className=" p-3 mb-10">
        <h1 className="text-center text-2xl mb-6">
          Recorded class{" "}
          <MdVideoLibrary className=" inline-block text-lime-600 " />{" "}
        </h1>
        <form className="w-full max-w-lg px-3">
          <div className="w-full flex flex-wrap mb-2">
            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="record"
              >
                Class link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="record"
                type="text"
                placeholder="Class link"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className=" text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* live zoom class link */}
      <div className="p-3 mb-10 ">
        <h1 className=" text-center text-2xl mb-6 ">
          Live Zoom class{" "}
          <AiOutlineVideoCameraAdd className=" inline-block text-sky-800 " />
        </h1>
        <form className="w-full max-w-lg px-3">
          <div className="w-full flex flex-wrap mb-2">
            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="live"
              >
                Class link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="live"
                type="text"
                placeholder="Class link"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className=" text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* add question */}
      {/* <div className=" p-3 mb-10 ">
        <h1 className="text-center text-2xl mb-6">
          Test <MdStickyNote2 className=" inline-block text-fuchsia-600 " />{" "}
        </h1>
        <form
          className="w-full max-w-lg px-3"
          // onClick={(e) => e.preventDefault()}
        >
          <div className="w-full flex flex-wrap mb-2">
            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Question name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                placeholder="Enter the title"
                required
                onChange={(e) => {
                  question.question = e.target.value;
                }}
              />
              <p>Or</p>
              <br />
              <div
                className={`upload mb-6 mx-3 outline-2 bg-purple-50 dark:bg-purple-900/30 outline-dotted outline-purple-600 p-3 rounded-lg transition-colors `}
              >
                <p className="mt-1  text-gray-500 dark:text-gray-300 font-bold text-xl">
                  Please upload a question
                </p>
                <label
                  htmlFor="questimg"
                  className="flex gap-4 items-center justify-center text-center bg-violet-400 text-white px-3 py-2 rounded-md w-full ml-2 mt-6 mb-3 cursor-pointer hover:bg-violet-500 ease-in transition-colors"
                >
                  Upload file <BsCloudUploadFill />
                </label>

                <input
                  hidden
                  id="questimg"
                  type="file"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                />

                {file && (
                  <div>
                    <img
                      className="mx-auto aspect-auto mt-4 p-4"
                      src={URL.createObjectURL(file)}
                      width={250}
                      alt="image file"
                    />
                    <p className="text-violet-700 font-bold dark:text-violet-200 rounded-md uppercase">
                      SIZE:{" "}
                      {(
                        file?.size /
                        1024 /
                        (file?.size > 1024 * 1024 ? 1024 : 1)
                      ).toFixed(2)}{" "}
                      {file?.size > 1024 * 1024 ? "MB" : "KB"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                options
              </label>
              <section className="flex gap-2 items-center justify-between ">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="test"
                  type="text"
                  placeholder="option"
                  value={option}
                  onChange={(e) => setOpt(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className=" text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => {
                    if (question.options.length < 4)
                      setQues((pre) => ({
                        ...pre,
                        options: [...pre.options, option],
                      }));
                    setOpt("");
                  }}
                >
                  Add
                </button>
              </section>
              <div className="flex flex-wrap gap-3 justify-start items-start my-2">
                {question.options?.map((val, id) => {
                  return (
                    <span
                      className="bg-gray-300 text-gray-800 px-3 py-1 rounded-sm cursor-pointer"
                      key={id}
                      onClick={() => {
                        setQues((pre) => ({
                          ...pre,
                          options: question.options?.filter(
                            (pre, id1) => id != id1
                          ),
                        }));
                      }}
                    >
                      {val}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Answer
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-green-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                placeholder="Questions's answer"
                required
                disabled
                value={question.correctAnswer}
              />
              <div className="flex flex-wrap gap-3 justify-start items-start my-2">
                {question.options.map((val, id) => {
                  return (
                    <span
                      className="bg-gray-300 text-gray-800 px-3 py-1 rounded-sm cursor-pointer"
                      key={id}
                      onClick={() =>
                        setQues((pre) => ({ ...pre, correctAnswer: val }))
                      }
                    >
                      {val}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div> */}

      <div className="flex flex-col">
        {/* exam links */}
        <Exams />
      </div>
    </div>
  );
};

export default VdoUpload;
