"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaPalette,
  FaCode,
} from "react-icons/fa";


const experiences = [

  {
    date: "2025",

    title: "UI/UX Design Trainee",

    company: "NTI - National Telecommunication Institute",

    icon: <FaPalette />,

    description:
      "Completed a 120-hour professional UI/UX training program focused on creating user-centered digital experiences and modern interfaces.",

    skills: [
      "UX Research",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems"
    ]

  },


  {
    date: "2025",

    title: "Frontend Development Diploma",

    company: "Route Academy",

    icon: <FaGraduationCap />,

    description:
      "Completed a Frontend Development diploma focused on building modern web applications and strengthening frontend engineering skills.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "APIs"
    ]

  },


  {
    date: "2024 - Present",

    title: "Frontend Developer Journey",

    company: "Self Learning & Projects",

    icon: <FaCode />,

    description:
      "Building real-world applications and improving my skills through practical projects, focusing on clean code, responsive design and modern frontend architecture.",

    skills: [
      "React",
      "Next.js",
      "Tailwind",
      "Git",
      "Responsive Design"
    ]

  }

];




export default function Experience(){


return (

<section

id="experience"

className="
relative
min-h-screen
overflow-hidden
bg-background
py-28
"


>


{/* Background Glow */}

<div

className="
absolute
right-0
top-20
h-[400px]
w-[400px]
rounded-full
bg-red-600/20
blur-[150px]
"

/>




<div

className="
relative
z-10
mx-auto
max-w-5xl
px-6
"

>


{/* Title */}

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

MY JOURNEY

</p>



<h2

className="
text-5xl
font-bold
text-white
"

>

Experience

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







{/* Timeline */}


<div

className="
relative
mt-16
space-y-10
border-l
border-red-500/30
pl-8
"

>


{

experiences.map((item,index)=>(


<motion.div


key={index}


initial={{

opacity:0,

x:-40

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

duration:.6,

delay:index * .15

}}


viewport={{

once:true

}}


className="
relative
"


>


{/* Icon */}

<div

className="
absolute
-left-[49px]
top-8
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-red-500
bg-black
text-red-400
"

>

{item.icon}

</div>





{/* Card */}


<div

className="
rounded-2xl
border
border-red-500/20
bg-black/40
p-7
backdrop-blur-xl
transition
hover:-translate-y-2
hover:border-red-500/60
hover:shadow-[0_0_35px_rgba(192,57,43,.25)]
"

>



<span

className="
text-sm
text-red-400
"

>

{item.date}

</span>




<h3

className="
mt-3
text-2xl
font-bold
text-white
"

>

{item.title}

</h3>



<p

className="
text-red-300
"

>

{item.company}

</p>




<p

className="
mt-4
leading-7
text-gray-400
"

>

{item.description}

</p>






{/* Skills */}

<div

className="
mt-6
flex
flex-wrap
gap-2
"

>


{

item.skills.map(skill=>(


<span

key={skill}

className="
rounded-full
border
border-red-500/30
bg-red-500/10
px-3
py-1
text-xs
text-red-300
"

>

{skill}

</span>


))


}


</div>





</div>




</motion.div>


))


}



</div>



</div>



</section>


)

}