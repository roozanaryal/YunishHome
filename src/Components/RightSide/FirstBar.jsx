import React from "react";

function FirstBar({ Icon, Title }) {
   return (
      <>
         <li className="flex gap-2 py-2 px-1 rounded-md hover:bg-gray-600 cursor-pointer ">
            <Icon className="mt-[5px]" />
            {Title}
         </li>
      </>
   );
}

export default FirstBar;
