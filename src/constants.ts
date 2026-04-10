import { Service, Location } from "./types";

export const BUSINESS_INFO = {
  name: "All Star Sprinkler Systems, Inc.",
  phone: "318-664-2328",
  email: "allstarsprinklersystems@gmail.com",
  facebook: "https://www.facebook.com/people/All-Star-Sprinkler-Systems-Inc/100075963552966/",
  locations: [
    { address: "4402 Grantham Dr, Pineville, LA 71360", label: "Pineville Office" },
    { address: "784 McKeithen Dr, Alexandria, LA 71303", label: "Alexandria Office" }
  ],
  serviceArea: "Central Louisiana (CENLA region)",
  stats: {
    yearsInBusiness: 15,
    satisfactionRate: 99,
    propertiesServed: "5,000+"
  }
};

export const SERVICES: Service[] = [
  {
    id: "irrigation-installation",
    title: "Irrigation Installation (Trenchless)",
    slug: "irrigation-installation-trenchless",
    description: "State-of-the-art trenchless irrigation installation that keeps your lawn pristine while providing maximum coverage.",
    longDescription: "Our trenchless irrigation installation method is the gold standard for modern lawn care. Unlike traditional methods that tear up your yard, our specialized equipment allows us to install high-efficiency sprinkler systems with minimal surface disruption. This means your grass stays green and your landscape stays beautiful from day one.",
    icon: "Droplets",
    image: "https://allstarsprinklers.com/wp-content/uploads/2024/06/1.png",
    features: ["Zero-damage trenchless technology", "Custom zone design", "Smart weather-sensing controllers", "Commercial-grade components"],
    faqs: [
      { question: "What is trenchless irrigation installation?", answer: "Trenchless installation uses specialized vibrating plows to pull pipe underground without digging wide trenches, preserving your existing lawn." },
      { question: "How long does a typical installation take?", answer: "Most residential systems in Pineville or Alexandria can be completed in 1-2 days." }
    ]
  },
  {
    id: "irrigation-repair",
    title: "Irrigation Repair",
    slug: "irrigation-repair",
    description: "Fast, reliable sprinkler system repairs for broken heads, leaks, and controller issues in Central Louisiana.",
    longDescription: "A broken sprinkler system can lead to dead spots or massive water bills. Our expert technicians diagnose and fix all major brands of irrigation systems. From simple head replacements to complex electrical troubleshooting, we ensure your system operates at peak efficiency.",
    icon: "Wrench",
    image: "https://allstarsprinklers.com/wp-content/uploads/2024/06/5.png",
    features: ["Emergency leak repair", "Head & valve replacement", "Electrical troubleshooting", "System winterization & startup"],
    faqs: [
      { question: "Why is my sprinkler head not popping up?", answer: "This is often caused by debris in the head, a broken internal spring, or low water pressure due to a leak elsewhere in the zone." },
      { question: "Do you repair all brands of sprinkler systems?", answer: "Yes, we service Hunter, Rain Bird, Toro, and all other major irrigation brands." }
    ]
  },
  {
    id: "landscape-lighting",
    title: "Landscape Lighting",
    slug: "landscape-lighting",
    description: "Transform your outdoor space with elegant, energy-efficient LED landscape lighting designs.",
    longDescription: "Enhance your home's curb appeal and security with professional landscape lighting. We design and install low-voltage LED systems that highlight your home's architecture, trees, and walkways, creating a dramatic and welcoming nighttime environment.",
    icon: "Lightbulb",
    image: "https://allstarsprinklers.com/wp-content/uploads/2024/06/10.png",
    features: ["Architectural uplighting", "Path & walkway safety lighting", "Smart timer automation", "Energy-efficient LED technology"],
    faqs: [
      { question: "Is LED landscape lighting expensive to run?", answer: "No, modern LED systems use up to 80% less energy than traditional halogen systems, costing only a few dollars per month to operate." },
      { question: "Can I control my lights from my phone?", answer: "Yes, we offer smart controllers that allow you to set schedules and control your lighting via a mobile app." }
    ]
  },
  {
    id: "drainage-installation",
    title: "Drainage Installation",
    slug: "drainage-installation",
    description: "Expert drainage solutions to eliminate standing water and protect your foundation from Louisiana rains.",
    longDescription: "Central Louisiana's heavy rains can cause serious drainage issues. We install French drains, catch basins, and downspout diversions to move water away from your home and prevent foundation damage, mold, and soggy lawns.",
    icon: "Waves",
    image: "https://allstarsprinklers.com/wp-content/uploads/2024/06/15.png",
    features: ["French drain systems", "Catch basin installation", "Downspout underground piping", "Surface grading solutions"],
    faqs: [
      { question: "How do I know if I need a French drain?", answer: "If you have standing water that remains for more than 24 hours after a rain, or if water is pooling near your foundation, a French drain is likely needed." },
      { question: "Will drainage work ruin my landscaping?", answer: "We take great care to minimize disruption and restore your lawn to its original condition after installation." }
    ]
  }
];

export const CITIES: Location[] = [
  { name: "Pineville", slug: "pineville", description: "Serving the Pineville community with expert irrigation and drainage solutions.", zipCodes: ["71360", "71359"] },
  { name: "Alexandria", slug: "alexandria", description: "The premier sprinkler system contractor for Alexandria residential and commercial properties.", zipCodes: ["71301", "71302", "71303"] },
  { name: "Ball", slug: "ball", description: "Reliable irrigation repairs and installations for homeowners in Ball, Louisiana.", zipCodes: ["71405"] },
  { name: "Leesville", slug: "leesville", description: "Professional landscape lighting and sprinkler services in the Leesville area.", zipCodes: ["71446", "71459"] },
  { name: "Natchitoches", slug: "natchitoches", description: "Expert drainage and irrigation services for the historic Natchitoches region.", zipCodes: ["71457", "71458"] }
];

export const GALLERY_IMAGES = [
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/1.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/2.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/3.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/4.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/5.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/6.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/7.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/8.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/9.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/10.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/11.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/12.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/13.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/14.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/15.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/16.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/17.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/18.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/19.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/20.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/21.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/22.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/23.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/24.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/25.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/1-1.png",
  "https://allstarsprinklers.com/wp-content/uploads/2024/06/5-1.png"
];
