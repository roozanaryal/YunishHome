import React from "react";

function InputBox({ placeholder, value, onchange,Icon,type="text" }) {
   return (
      <>
         <input
            placeholder={placeholder}
            type={type}
            className="w-full bg-white rounded-md px-5 h-10 outline-none"
         />
      </>
   );
}

export default InputBox;
