function ExamLinks() {
  return (
    <div className="dark:text-darkText ">
      <h2 className="text-center font-bold text-2xl">Exam Link</h2>
      <div className="max-h-full overflow-y-scr]">
        {examlink.map((val, id) => (
          <ExamLink key={id} value={val} />
        ))}
      </div>
    </div>
  );
}
const examlink = [
  {
    testTitle: "Sanctus diam duo dolore amet.",
    link: "#",
  },
  {
    testTitle: "Sanctus diam duo dolore amet.",
    link: "#",
  },
  {
    testTitle: "Sanctus diam duo dolore amet.",
    link: "#",
  },
];
const ExamLink = ({ id, value }) => {
  return (
    <div className="w-auto flex justify-evenly my-10 p-5">
      <span>{id}</span>
      <p className="font-semibold text-xl">{value?.testTitle}</p>
      <a href={value?.link}>
        <button className="px-4 py-2 w-24 transition-colors bg-green-400 hover:bg-green-500 text-root_bluish font-semibold capitalize rounded-lg">
          Start
        </button>
      </a>
      <button className="px-4 py-2 w-24 transition-colors bg-rose-500 hover:bg-red-600 text-darkText font-semibold capitalize rounded-lg">
        Delete
      </button>
    </div>
  );
};

export default ExamLinks;
