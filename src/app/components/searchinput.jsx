export function Searchinput() {
  return (
    <div className="w-[520px] h-[80px] bg-[#ffffff] rounded-[48px] flex  items-center gap-[24px]  ">
      <img className="opacity-20 ml-[24px]" src="Vector.png" />
      <input
        placeholder="Search city"
        className="focus:outline-none border-none"
      ></input>
    </div>
  );
}
export function Circle(height, width) {
  return <div className="w-{width} h-{height}  "></div>;
}
