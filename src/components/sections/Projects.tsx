"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce platform with shopping cart, products management and admin features.",

    image: "/images/projects/ecommerce.png",

    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "JSON Server"
    ],

    demo:"#",
    github:"#"
  },


  {
    title: "Linked Posts",

    description:
      "A social media platform where users can create posts, interact and manage profiles.",

    image:"/images/projects/linked-posts.png",

    tags:[
      "React",
      "TypeScript",
      "API",
      "Firebase"
    ],

    demo:"#",
    github:"#"

  },


  {
    title:"Dashboard System",

    description:
      "A modern dashboard interface with analytics, charts and responsive UI components.",

    image:"/images/projects/dashboard.png",

    tags:[
      "Next.js",
      "Charts",
      "Tailwind",
      "Framer Motion"
    ],

    demo:"#",
    github:"#"

  }

];





export default function Projects(){


return (

<section
id="projects"
className="
relative
min-h-screen
overflow-hidden
bg-background
py-28
"
>



{/* background glow */}

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
max-w-7xl
px-6
"
>


{/* TITLE */}


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


<h2
className="
text-5xl
font-bold
text-white
"
>

My Projects

</h2>


<div
className="
mx-auto
mt-4
h-1
w-16
bg-red-500
"
/>


</motion.div>






{/* CARDS */}


<div
className="
mt-16
grid
gap-8
md:grid-cols-3
"
>


{

projects.map((project,index)=>(


<motion.div

key={project.title}


initial={{
opacity:0,
y:50
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
overflow-hidden
rounded-2xl
border
border-red-500/20
bg-black/40
backdrop-blur-xl
transition-all
duration-300

hover:-translate-y-3

hover:border-red-500/60

hover:shadow-[0_0_35px_rgba(192,57,43,0.25)]
"

>


{/* IMAGE */}

<div
className="
relative
h-52
overflow-hidden
"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
transition
duration-500

group-hover:scale-110
"

/>


<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
to-transparent
"
/>


</div>





{/* CONTENT */}


<div
className="
p-6
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

{project.title}

</h3>

<p
className="
mb-5
text-sm
leading-6
text-gray-400
"
>

{project.description}

</p>





{/* TAGS */}


<div
className="
mb-6
flex
flex-wrap
gap-2
"
>


{

project.tags.map(tag=>(

<span

key={tag}

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

{tag}

</span>

))

}


</div>






{/* BUTTONS */}


<div
className="
flex
gap-3
"
>


<a

href={project.demo}

className="
flex
items-center
gap-2
rounded-lg
border
border-red-500/50
px-4
py-2
text-sm
text-red-400

transition

hover:bg-red-500
hover:text-white
"

>

Live Demo

<FaExternalLinkAlt size={12}/>

</a>



<a

href={project.github}

className="
flex
items-center
gap-2
rounded-lg
border
border-white/10
px-4
py-2
text-sm
text-gray-300

transition

hover:border-white/40
hover:text-white
"

>

GitHub

<FaGithub/>

</a>


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