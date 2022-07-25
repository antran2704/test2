import Services from "../Services/Services"
import Team from "~/components/Team/Team"
import Skills from "../Skills/Skills"
import Portfolio from "../Portfolio/Portfolio"
import AboutUs from "../AboutUs/AboutUs"
import FeedBack from "../FeedBack/FeedBack"

const pages = [
    {
        title: "SERVICES WE PROVIDE",
        desc: "We are working with both individuals and businesses from all over the globe to create awesome websites and applications.",
        component: Services,
        background: "#17C2A4",
        color: "white"
    },
    {
        title: "MEET OUR BEAUTIFUL TEAM",
        desc: "We are a small team of designers and developers, who help brands with big ideas.",
        component: Team,
        background: "#E7F1F8",
        color: "black"
    },
    {
        title: "WE GOT SKILLS!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
        component: Skills,
        background: "#E7F1F8",
        color: "black"
    },
    {
        title: "OUR PORTFOLIO",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam",
        component: Portfolio,
        background: "#FFDD99",
        color: "black"
    },
    {
        title: "WHAT POEPLE SAY ABOUT US",
        desc: "Our clients love us!",
        component: AboutUs,
        background: "#D74680",
        color: "white"
    },
    {
        title: "GET IN TOUCH",
        desc: "1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111",
        component: FeedBack,
        background: "#3C5499",
        color: "white"
    },
]

export default pages