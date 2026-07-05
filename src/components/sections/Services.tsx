"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";



const services = [

{
icon:<FaCode/>,

title:"Frontend Development",

description:
"Building modern and scalable web applications using React, Next.js and TypeScript with clean and maintainable code.",


features:[
"React & Next.js",
"Reusable Components",
"API Integration",
"Modern Architecture"
]

},




{
icon:<FaPaintBrush/>,

title:"UI Implementation",

description:
"Transforming designs into pixel-perfect interfaces with smooth animations and great user experience.",


features:[
"Figma to Code",
"Responsive Design",
"Design Systems",
"Interactive UI"
]

},





{
icon:<FaMobileAlt/>,

title:"Responsive Experiences",

description:
"Creating interfaces that work perfectly across all devices with focus on usability and performance.",


features:[
"Mobile First",
"Cross Browser",
"Accessibility",
"Clean Layouts"
]

},





{
icon:<FaRocket/>,

title:"Performance & Optimization",

description:
"Improving application speed and delivering fast experiences using modern frontend techniques.",


features:[
"Optimization",
"Clean Code",
"Best Practices",
"Scalable Solutions"
]

}


];






export default function Services(){


return (

<section

id="services"

className="
relative
overflow-hidden
bg-background
py-28
"

>



{/* Background */}

<div

className="
absolute
left-1/2
top-0
h-[450px]
w-[450px]
-translate-x-1/2
rounded-full
bg-red-600/20
blur-[160px]
"

/>






<div

className="
relative
z-10
mx-auto
max-w-7xl
px-6
"

>





{/* Header */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="text-center"

>


<p

className="
mb-3
tracking-[4px]
text-red-400
"

>

WHAT I DO

</p>



<h2

className="
text-5xl
font-bold
text-white
"

>

My Services

</h2>



<div

className="
mx-auto
mt-5
h-1
w-16
bg-red-500
"

/>


</motion.div>








{/* Cards */}


<div

className="
mt-16
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
"

>


{


services.map((service,index)=>(


<motion.div


key={service.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{

duration:.6,

delay:index*.15

}}


viewport={{

once:true

}}



className="

group

border

border-red-500/20

bg-black/40

p-7

backdrop-blur-xl

transition-all

duration-300


hover:-translate-y-3


hover:border-red-500/60


hover:shadow-[0_0_30px_rgba(192,57,43,.25)]

"

>


{/* icon */}

<div

className="

mb-6

flex

h-14

w-14

items-center

justify-center

bg-red-500/10

text-2xl

text-red-400


transition

group-hover:scale-110

"

>

{service.icon}

</div>





<h3

className="
mb-3
text-xl
font-bold
text-white
"

>

{service.title}

</h3>




<p

className="
text-sm
leading-7
text-gray-400
"

>

{service.description}

</p>






<ul

className="
mt-6
space-y-3
"

>


{

service.features.map(feature=>(


<li

key={feature}

className="
flex
items-center
gap-3
text-sm
text-gray-300
"

>


<span

className="
h-2
w-2
bg-red-500
"

/>


{feature}


</li>


))


}



</ul>





</motion.div>



))


}



</div>





</div>



</section>


)

}