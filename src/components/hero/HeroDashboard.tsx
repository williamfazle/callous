import FeatureCard from "./FeatureCard"
import dashboard from "../../assets/images/dashboard.png"
import rocketicon from "../../assets/icons/rocketicon.png"
import Section from "../../assets/icons/seticon.png"
import squareicon from "../../assets/icons/squareicon.png"
import powericon from "../../assets/icons/powericon.png"
const HeroDashboard = () => {
  return (
    <div className="max-w-[1040px] w-full flex flex-col  gap-5 mt-16">

      <div className="">
         <img
          src={dashboard}
          alt="dashboard"
          className="rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

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

export default HeroDashboard