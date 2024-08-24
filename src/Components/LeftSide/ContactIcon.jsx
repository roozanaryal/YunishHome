import React from "react";

function ContactIcon({Icon,Title,className="px-5"}) {
   return (
      <>
         <div className={`bg-white ${className} py-3 cursor-pointer rounded-md flex flex-col justify-center items-center`}>
            <Icon />
            <h3>{Title}</h3>
         </div>
      </>
   );
}

export default ContactIcon;
