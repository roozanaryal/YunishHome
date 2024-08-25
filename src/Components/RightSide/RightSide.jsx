import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { MdAddRoad } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import carvideo from "../../assets/hack.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCarSolid } from "react-icons/lia";
import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";
import { PiListHeart } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

function RightSide() {
   const [showDescription, setshowDescription] = useState(false);
   return (
      <>
         <div className="w-[70%] ">
            <div className="w-full p-3 h-[70vh]">
               <video
                  className="object-cover w-full h-full rounded-3xl"
                  src={carvideo}
               ></video>
            </div>
            <div className="mt-4  border-2 border-y-gray-100   border-x-0">
               <ul className="flex mx-3 justify-start gap-3 items-center h-14">
                  <FirstBar Icon={PiListHeart} Title="Highlights" />
                  <FirstBar Icon={TfiMenuAlt} Title="Description" />
                  <FirstBar Icon={AiOutlineLike} Title="Specs and Features" />
                  <FirstBar Icon={LiaCarSolid} Title="Similar Cars" />
               </ul>
            </div>
            <div className="flex justify-start gap-12 mt-12">
               <SecondBar
                  Icon={CiCalendarDate}
                  Title="Model Year"
                  Answer="2022"
               />
               <SecondBar
                  Icon={IoSpeedometerOutline}
                  Title="Kilometer"
                  Answer="12000"
               />
               <SecondBar Icon={LuFuel} Title="Fuel Type" Answer="Gasoline" />
               <SecondBar Icon={MdAddRoad} Title="Specs" Answer="GCC" />
            </div>
            <div className="w-[80%]">
               <h1 className="font-semibold text-4xl mt-12">Description</h1>
               <br />
               <p className="justify-center text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem maxime quo nostrum beatae consectetur explicabo
                  veritatis blanditiis qui tempore. Esse sit obcaecati eaque
                  magnam similique! Veritatis doloremque architecto asperiores
                  eum eveniet quasi voluptatibus ex, praesentium quod,
                  voluptate, itaque
                  {showDescription && (
                     <span className="">
                        soluta voluptates sit tenetur laboriosam nisi sed
                        laborum labore non. Ad, consequuntur veritatis. Cumque
                        labore eum recusandae vel beatae placeat hic fugiat
                        laborum ipsa neque quo, molestiae praesentium expedita a
                        iste aliquid mollitia consequatur officiis dolor et
                        voluptatibus ad illum, sed nemo. Exercitationem nulla
                        iusto similique reprehenderit esse dolorum nisi
                        perspiciatis rerum accusamus deleniti fugiat inventore
                        tenetur nobis temporibus sit, hic recusandae quia
                        blanditiis ullam, assumenda, praesentium maiores culpa
                        accusantium beatae? Sequi, fuga deserunt officia modi
                        ipsa voluptatibus voluptatum magni praesentium eos
                        libero doloremque consectetur! Esse sunt, minima eius
                        alias et eaque adipisci unde eum facilis corrupti
                        excepturi ipsam voluptatibus accusamus, soluta rerum
                        repellendus a quod odio, quam similique omnis deserunt
                        exercitationem voluptas. Illo doloremque, est eaque
                        fugit sit corporis animi porro voluptatem minus
                        accusamus dolorum ut, reprehenderit facere veniam. Ut
                        reiciendis quasi tenetur odit nam laborum illum, placeat
                        sapiente tempore facilis qui quaerat voluptate
                        laboriosam provident perferendis sunt dolorum architecto
                        itaque eligendi iste labore cum expedita! Recusandae
                        aperiam, facere sint veritatis molestiae voluptatem
                        libero incidunt repudiandae. Necessitatibus quod vero
                        consequatur unde delectus consectetur totam, inventore
                        tenetur nemo quis odio iste asperiores dicta laboriosam
                        dignissimos placeat? Error, dolores, reprehenderit
                        veniam placeat dolorem quidem et, aspernatur beatae ad
                        amet facilis nostrum pariatur. Laudantium in eum,
                        doloribus veritatis facilis adipisci excepturi fuga
                        nihil minus quae consectetur aspernatur vero nisi veniam
                        eligendi perspiciatis fugiat laborum velit delectus
                        nesciunt perferendis magni asperiores quo. Ullam
                        quisquam ex atque perspiciatis repudiandae provident
                        laboriosam, labore sed nobis amet delectus modi
                        assumenda iusto consectetur debitis magnam recusandae
                        molestiae beatae tenetur ut magni distinctio! Dolores
                        similique voluptas odit eum corporis dolor?
                     </span>
                  )}
               </p>
               <h3
                  onClick={() => {
                     setshowDescription(!showDescription);
                  }}
                  className="underline cursor-pointer font-semibold"
               >
                  {showDescription
                     ? "Hide full description"
                     : "Show full description"}
               </h3>
            </div>

            <div className="mt-14">
               <h1 className="text-3xl font-semibold">Specs and features</h1>
            </div>
         </div>
      </>
   );
}

export default RightSide;
