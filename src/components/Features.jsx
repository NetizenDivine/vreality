import { BotMessageSquare  } from "lucide-react"
import { BatteryCharging } from "lucide-react"
import { Fingerprint } from "lucide-react"
import { ShieldHalf } from "lucide-react"
import { PlugZap } from "lucide-react"
import { GlobeLock } from "lucide-react"

const feechas = [
    {
        title: "Drag-and-Drop Interface" ,
        description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface." ,
        icon: <BotMessageSquare/>
    },
    {
        title: "Multi-Platform Compatability" ,
        description: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets." ,
        icon: <Fingerprint/>
    },
    {
        title: "Built-in Templates" ,
        description: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments" ,
        icon: <ShieldHalf/>
    },
    {
        title: "Real-Time Preview" ,
        description: "Preview your VR applications in real-time as you make changes, allowing for quick iterations and adjustments" ,
        icon: <BatteryCharging/>
    },
    {
        title: "Collaboration Tools" ,
        description: "Work together with your team in real-time on VR projects , enabling seamless collaboration and idea sharing." ,
        icon: <PlugZap/>
    },
    {
        title: "Analytics Dashboard" ,
        description: "Gain valuable insight into your user interactions and behaviour within your applications with an integrated analytics dashboard" ,
        icon: <GlobeLock/>
    },
];
const Features = () => {
  return (

    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">

            <span className="bg-neutral-800 rounded-full h-6 px-2 py-1
             text-orange-500 text-sm font-medium uppercase">
                Features
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
               <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}your code</span>
            </h2>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">

            {feechas.map((feecha, index) => (

            <div key={index} className=" w-full p-6 ">
                <div className="flex">
                    <div className=" flex mx-6 h-10 w-10 text-orange-700 p-2 bg-neutral-900 rounded-full justify-center items-center">
                        {feecha.icon}</div>
                    <div>
                    <h5 className="text-xl mb-6 mt-1">
                        {feecha.title}
                    </h5>
                    
                    <p className="text-neutral-500 text-md mb-10 p-2">
                        {feecha.description}
                    </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    
  )
}

export default Features