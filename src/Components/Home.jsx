import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

function Home() {
   return (
      <>
         <div className="flex px-12">
            <RightSide />
            <LeftSide />
         </div>
      </>
   );
}

export default Home;
