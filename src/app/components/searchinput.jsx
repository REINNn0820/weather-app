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
export function Circle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#FFFFFFbf] absolute z-0"
    ></div>
  );
}
export function Square({size,top,left}){
  return(
    <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}px`,
      left: `${left}px`,
    }}
    className="bg-black z-20 rounded-[38px] absolute"
    >
    </div>
  )
}
export function WhiteSquare({size,top,left}){
  return(
    <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}px`,
      left: `${left}px`,
    }}
    className="bg-[#ffffff] z-0 absolute"
    >
    </div>
  )
}

