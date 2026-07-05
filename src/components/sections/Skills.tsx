"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiPostman,
} from "react-icons/si";



const skillGroups = [

{
title:"Frontend Development",

description:
"Building modern, scalable and interactive web applications.",

skills:[

{
name:"React",
icon:<FaReact/>,
level:"Advanced"
},

{
name:"Next.js",
icon:<SiNextdotjs/>,
level:"Advanced"
},

{
name:"TypeScript",
icon:<SiTypescript/>,
level:"Intermediate"
},

{
name:"JavaScript",
icon:<FaJs/>,
level:"Advanced"
},

{
name:"HTML5",
icon:<FaHtml5/>,
level:"Advanced"
},

{
name:"CSS3",
icon:<FaCss3Alt/>,
level:"Advanced"
}

]

},




{
title:"UI Engineering",

description:
"Creating premium interfaces with smooth user experiences.",

skills:[

{
name:"Tailwind",
icon:<SiTailwindcss/>,
level:"Advanced"
},

{
name:"Framer Motion",
icon:<SiFramer/>,
level:"Intermediate"
},

{
name:"Figma",
icon:<FaFigma/>,
level:"Intermediate"
}

]

},




{
title:"Tools & Backend",

description:
"Working with APIs, version control and development tools.",

skills:[

{
name:"Git",
icon:<FaGitAlt/>,
level:"Advanced"
},

{
name:"GitHub",
icon:<FaGithub/>,
level:"Advanced"
},

{
name:"Node.js",
icon:<FaNodeJs/>,
level:"Basics"
},

{
name:"Axios",
icon:<SiAxios/>,
level:"Intermediate"
},

{
name:"Postman",
icon:<SiPostman/>,
level:"Intermediate"
}

]

}


];





export default function Skills(){



return (

<section

id="skills"

className="
relative
overflow-hidden
bg-background
py-28
"


>



{/* glow */}

<div

className="
absolute
left-1/2
top-0
h-[400px]
w-[400px]
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



{/* title */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
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

MY SKILLS

</p>


<h2

className="
text-5xl
font-bold
text-white
"

>

Technologies I Use

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







{/* cards */}

<div

className="
mt-16
grid
gap-8
md:grid-cols-3
"

>



{

skillGroups.map((group,index)=>(



<motion.div


key={group.title}


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
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

transition

hover:-translate-y-3

hover:border-red-500/60

hover:shadow-[0_0_40px_rgba(192,57,43,.2)]

"


>



<h3

className="
mb-3
text-xl
font-bold
text-white
"

>

{group.title}

</h3>



<p

className="
mb-8
text-sm
leading-6
text-gray-400
"

>

{group.description}

</p>





<div

className="
space-y-4
"

>



{

group.skills.map(skill=>(


<div

key={skill.name}


className="

flex

items-center

justify-between


border

border-white/10

bg-white/5

p-4

transition

hover:border-red-500/40

"


>


<div

className="
flex
items-center
gap-4
"

>


<span

className="
text-2xl
text-red-400
"

>

{skill.icon}

</span>



<span

className="
font-medium
text-white
"

>

{skill.name}

</span>


</div>





<span

className="
text-xs
text-red-300
"

>

{skill.level}

</span>



</div>



))


}



</div>





</motion.div>



))



}


</div>





</div>


</section>


)


}