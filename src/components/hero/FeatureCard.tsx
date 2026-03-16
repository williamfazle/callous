type Props = {
  title: string
  desc: string
  img: string
}

const FeatureCard = ({ title, desc, img }: Props) => {
  return (
    <div className="p-5 backdrop-blur-lg rounded-xl flex flex-col items-start">


      <img
        src={img}
        alt={title}
        className="w-5 h-5 object-contain mb-2"
      />

      <div className="text-white font-medium ">
        {title}
      </div>

      <p className="text-gray-400 text-sm">
        {desc}
      </p>


    </div>
  )
}

export default FeatureCard