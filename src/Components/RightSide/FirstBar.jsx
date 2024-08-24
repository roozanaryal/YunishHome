import React from "react";

function FirstBar({ Icon, Title }) {
   return (
      <>
         <li className="flex py-1 px-1 rounded-sm hover:bg-gray-600 cursor-pointer ">
            <Icon className="mt-[5px]" />
            {Title}
         </li>
      </>
   );
}

export default FirstBar;
