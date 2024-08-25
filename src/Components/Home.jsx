import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

function Home() {
   return (
      <>
         <div className="flex px-12 2xl:w-[1500px] 2xl:m-auto">
            <RightSide />
            <LeftSide />
         </div>
      </>
   );
}

export default Home;
