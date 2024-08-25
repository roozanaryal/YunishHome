import React from "react";

function SecondBar({ Icon, Title, Answer }) {
   return (
      <>
         <div className="flex flex-col justify-center items-center w-28 py-3 rounded-md border-2 border-gray-100">
            <Icon className="font-bold text-xl" />
            <h3 className="font-semibold text-sm">{Title}</h3>
            <p className="text-sm">{Answer}</p>
         </div>
      </>
   );
}

export default SecondBar;
