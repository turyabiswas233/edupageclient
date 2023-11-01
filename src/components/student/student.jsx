import { MdSearch } from "react-icons/md";
import SelectBox from "./SelectBox";
import { useState } from "react";
function Stundet() {
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="px-5 flex flex-col h-full">
        <h2 className="text-center text-Text dark:text-darkText text-4xl font-semibold mb-10">
          Student page
        </h2>
        {/* serach box */}
        <div className="flex justify-between items-center">
          {/* footer */}
          <form
            className="flex items-center justify-center p-10 w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <section className="flex items-center justify-between rounded-md ring ring-gray-600/50 p-2 mx-4">
              <input
                className="bg-transparent outline-none border-none dark:text-darkText"
                placeholder="Search phone..."
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <MdSearch className="inline-block text-3xl text-gray-600/70 " />
            </section>
          </form>
          <SelectBox />
        </div>
        {/* sutdent lists */}
        <div className=" overflow-y-scroll flex-auto relative">
          <table className="w-full dark:bg-slate-300 text-Text rounded-lg shadow-md cursor-default select-text overflow-hidden">
            <thead>
              <tr className="text-Text text-lg text-left ">
                <th className="py-2 px-4 bg-gray-100 text-center">Sl No.</th>
                <th className="py-2 px-10 bg-gray-100">Name</th>
                <th className="py-2 px-10 bg-gray-100">Email</th>
                <th className="py-2 px-10 bg-gray-100">Phone</th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll h-64">
              {studentData
                .filter((val) => val.phone.includes(phone))
                .map((student, id) => {
                  return (
                    <StudentList
                      id={id}
                      key={id}
                      name={student.name}
                      avatar={student.avatar}
                      email={student.email}
                      phone={student.phone}
                    />
                  );
                })}

              {/* <!-- Add more rows for additional students --> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Stundet;
const StudentList = ({ id, avatar, name, email, phone }) => {
  return (
    <tr
      key={id}
      className={`hover:bg-gray-500/20 transition-colors duration-100 ease-in border-b ${
        id != studentData.length - 1
          ? " border-root_bluish"
          : "border-transparent"
      }`}
    >
      <td className="py-2">{id + 1}</td>
      <td className="py-2 text-center  flex gap-0 items-center justify-start font-semibold w-fit">
        {avatar && (
          <img
            className="w-10 h-10 rounded-full object-cover select-none"
            src={avatar}
            alt="Avatar"
            width={100}
            height={100}
          />
        )}
        <p className="text-left pl-5 w-fit">{name}</p>
      </td>
      <td className="py-2 text-left">{email}</td>
      <td className="py-2 text-left">{phone}</td>
    </tr>
  );
};
const studentData = [
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801561691229",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801464894449",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801561691229",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801464894449",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801464894449",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801464894449",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "+8801561691119",
    avatar: "/avatar.jpg",
  },
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "+8801464894449",
    avatar: "/avatar.jpg",
  },
];
