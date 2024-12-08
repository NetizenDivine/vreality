import { CheckCheckIcon } from "lucide-react"
import codeImg from '../assets/code.jpg'

const checkListItems = [
    {
        title: "Code merge made easy",
        description:
          "Track the performance of your VR apps and gain insights into user behavior.",
      },
      {
        title: "Review code without worry",
        description:
          "Track the performance of your VR apps and gain insights into user behavior.",
      },
      {
        title: "AI Assistance to reduce time",
        description:
          "Track the performance of your VR apps and gain insights into user behavior.",
      },
      {
        title: "Share work in minutes",
        description:
          "Track the performance of your VR apps and gain insights into user behavior.",
      },

    
]



const Workflow = () => {
  return (
  <div className="mt-20 ">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your 
       <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
        {" "}coding workflow</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src= {codeImg} alt="code image" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checkListItems.map((item , index) =>(
                        <div key={index} className="flex mb-12">
                            <div className="text-green-500 bg-neutral-900 mx-6 h-10 w-10 p-2 
                            justify-center items-center rounded-full">
                                <CheckCheckIcon/>
                            </div>
                            <div className="">
                                <h5 className="mt-1 mb-2 text-xl">
                                    {item.title}
                                </h5>
                                <p className="text-md text-neutral-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
  </div>
  )
}

export default Workflow