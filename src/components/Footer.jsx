
const resourceLinks = [
    { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
]

const platformLinks = [
    { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
]

const CommunityLinks = [
    { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
]

const Footer = () => {
  return (
   <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
                {resourceLinks.map((link , index) =>(
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div>
            <h3 className="text-md font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
                {platformLinks.map((link , index) =>(
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                {CommunityLinks.map((link , index) =>(
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
   </footer>
  )
}

export default Footer