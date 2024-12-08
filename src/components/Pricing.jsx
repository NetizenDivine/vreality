import { CheckCircle2 } from "lucide-react"

const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
          "Private board sharing",
          "5 Gb Storage",
          "Web Analytics",
          "Private Mode",
        ],
      },
      {
        title: "Pro",
        price: "$10",
        features: [
          "Private board sharing",
          "10 Gb Storage",
          "Web Analytics (Advance)",
          "Private Mode",
        ],
      },
      {
        title: "Enterprise",
        price: "$200",
        features: [
          "Private board sharing",
          "Unlimited Storage",
          "High Performance Network",
          "Private Mode",
        ],
      },
]

const Pricing = () => {
  return (
    <div className= "py-16 px-6 mt-20">
        <h1 className="mb-10 text-3xl sm:text-5xl lg:text-6xl tracking-wider text-center">
            Pricing
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-6">
            {pricingOptions.map((option , index) =>(
                <div key={index} className="w-full sm:w-1/2 lg:h-1/3 p-2">
                    <div className="p-10 border border-neutral-600 rounded-xl">
                        <p className="text-4xl mb-8">
                            {option.title}
                            {option.title === "Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-800
                                text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                            )}
                        </p>
                        <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul className="">
                            {option.features.map((features , index) =>(
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2/>
                                <span className="ml-2">{features}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="" className="inline-flex justify-center items-center text-center border
                         border-orange-500 mt-20 w-full h-12 p-5 tracking-tight text-xl rounded-lg
                         hover:bg-orange-700 transition duration-300">Subscribe</a>
                    </div>
                </div>
            ))}
           </div>

    </div>
      
  )
}

export default Pricing