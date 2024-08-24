import React from "react";

function SecondBar({ Icon, Title, Answer }) {
   return (
      <>
         <div className="flex flex-col justify-center items-center w-28 py-1 border-2 border-gray-100">
            <Icon className="font-bold" size={25} />
            <h3 className="font-semibold">{Title}</h3>
            <p>{Answer}</p>
         </div>
      </>
   );
}

export default SecondBar;
