import carphoto from "../../assets/Mustang.png";
import { Car_Info } from "../../Constants/Constant";
import { IoLocationOutline } from "react-icons/io5";
import Contact from "./Contact";

function LeftSide() {
   return (
      <>
         <div className="w-[50%] ">
            <div className="flex flex-col gap-3 p-3 h-[70vh]">
               {/*Div Containing Images of Car */}
               <img
                  className="object-cover w-full h-[50%]"
                  src={carphoto}
                  alt="CarPhoto"
               />
               <img
                  className="object-cover w-full h-[50%]"
                  src={carphoto}
                  alt="CarPhoto"
               />
            </div>
            <div className="flex justify-between mt-3 px-3">
               <div>
                  <h1 className="text-3xl font-semibold">{Car_Info.carname}</h1>
                  <div className="flex items-center gap-1">
                     <IoLocationOutline />
                     <h3>{Car_Info.location}</h3>
                  </div>
               </div>
               <div>
                  <h1 className="text-4xl font-semibold">{Car_Info.carprice }</h1>
               </div>
            </div>

            <Contact/>
         </div>
      </>
   );
}

export default LeftSide;
