import { RocketIcon } from "lucide-react"
import Arc from "../../assets/images/arc.png"
import b1 from "../../assets/images/b1.png"
import b2 from "../../assets/images/b2.png"
import featureDashboard from "../../assets/images/featureDashboard.png"
import FeatureCard from "../hero/FeatureCard"
import rocketicon from "../../assets/icons/rocketicon.png"
import Section from "../../assets/icons/seticon.png"
import squareicon from "../../assets/icons/squareicon.png"
import powericon from "../../assets/icons/powericon.png"

const FeatureDashboard = () => {
  return (
    <div className="max-w-[1040px] w-full flex flex-col items-center gap-5 mt-6">

      <div className=" rounded-xl bg-[gradient] z-10 p-2 backdrop-blur-lg border border-white/10">
         <img
          src={featureDashboard}
          alt="dashboard"
          className="rounded-lg w-full"
        />
      </div>
  
     <div className=" absolute top - [20px]">
         <img
          src={Arc}
          alt="Arc"
          className="rounded-lg w-full"
        />
     </div>
     <div className="relative top-[-50px]">
         <img
          src={b2}
          alt="b2"
          className="rounded-lg w-full"
        />
        <img
          src={b1}
          alt="b1"
          className="rounded-lg w-full absolute top-[-20px]"
        />
       
     </div>
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 w-[1040px] bg-[#141417] relative top-[-200px] p-8 rounded-lg text-left border border-white/10 ">
       
       
        <FeatureCard
         img={rocketicon}
          title="Team efficiency"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={Section}
          title="Set goals"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={squareicon}
          title="Manage permissions"
          desc="Instantly sync your notes across devices"
        />

        <FeatureCard
          img={powericon}
          title="On-time completion"
          desc="Instantly sync your notes across devices"
        />

      </div>

      </div>

  )
}

export default FeatureDashboard