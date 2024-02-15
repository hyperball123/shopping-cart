import React from "react";

function Input(props, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className="border-[1px] border-[#d1d5db] bg-white rounded-md py-2 px-7 shadow-sm"
    />
  );
}

export default React.forwardRef(Input);
