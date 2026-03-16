import FeatureDashboard from "./FeatureDashboard"
import Contractors from "../../assets/images/contractors.png"

const Feature = () => {
  return (
    <section className="relative flex flex-col items-center pt-32 pb-24">

<div className="flex flex-col items-center gap-8 max-w-[575px] text-center">

       <img
        src={Contractors}
        alt="Contractors"
        className="rounded-lg w-full mt-4 h-[45px] w-[45px] object-contain"
      />


        <h1 className="text-[48px] leading-[52px] font-medium text-[#E0E0E0]">
      Contractor management
        </h1>
<p>Mauris massa arcu, dapibus sed fringilla at, suscipit quis diam. Nulla malesuada nulla accumsan mattis rhoncus.</p>
      </div>
<div className="flex flex-col items-center gap-8 max-w-[575px] text-center">
    <FeatureDashboard/>
    </div>
    </section>
  )
}

export default Feature