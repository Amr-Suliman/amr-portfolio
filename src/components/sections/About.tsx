"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, TorusKnot, Stars } from "@react-three/drei";


function Background3D() {
  return (
    <Canvas
      className="absolute inset-0 opacity-40"
      camera={{ position: [0, 0, 5] }}
    >

      <ambientLight intensity={1}/>

      <pointLight
        position={[3,3,3]}
        color="#c0392b"
        intensity={5}
      />


      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={2}
      >

        <TorusKnot
          args={[1,0.35,100,16]}
        >

          <meshStandardMaterial
            color="#c0392b"
            metalness={0.8}
            roughness={0.2}
          />

        </TorusKnot>


      </Float>


      <Stars
        radius={50}
        depth={20}
        count={2000}
        factor={3}
        fade
      />


    </Canvas>
  );
}



export default function About(){


const skills=[
"React",
"Next.js",
"TypeScript",
"Tailwind",
"Node.js",
"Git",
"UI/UX",
"Responsive Design"
];



return (

<section
id="about"
className="
relative
min-h-screen
overflow-hidden
bg-background
py-28
"
>


{/* 3D BACKGROUND */}

<Background3D/>



{/* red glow */}

<div
className="
absolute
left-0
top-1/2
h-[400px]
w-[400px]
-translate-y-1/2
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
max-w-6xl
px-6
"
>


{/* Title */}

<motion.div

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

className="text-center"

>


<h2
className="
text-5xl
font-bold
text-white
"
>

About Me

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





<div
className="
mt-20
grid
items-center
gap-14
md:grid-cols-2
"
>



{/* LEFT */}

<motion.div

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

>


<p
className="
leading-8
text-gray-400
"
>

I'm Amr, a Frontend Developer passionate about
building modern web experiences.
I create responsive and interactive applications
using React, Next.js and TypeScript.

</p>



<h3
className="
mt-10
mb-5
text-xl
font-semibold
text-white
"
>

Skills & Technologies

</h3>



<div
className="
flex
flex-wrap
gap-3
"
>


{
skills.map(skill=>(

<span
key={skill}

className="
rounded-full
border
border-red-500/30
bg-red-500/10
px-4
py-2
text-sm
text-red-300
backdrop-blur
transition
hover:bg-red-500/20
"
>

{skill}

</span>


))
}



</div>



</motion.div>






{/* RIGHT CODE CARD */}


<motion.div

initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="
rounded-2xl
border
border-red-500/20
bg-black/40
p-8
shadow-[0_0_40px_rgba(192,57,43,0.15)]
backdrop-blur-xl
"

>


<pre
className="
overflow-hidden
text-sm
leading-7
text-red-300
"
>

{`const developer = {

  name: "Amr",

  role: "Frontend Developer",

  stack: [
    "React",
    "Next.js",
    "TypeScript"
  ],

  passion:
  "Building beautiful digital experiences"

};`}

</pre>



</motion.div>



</div>


</div>


</section>


)

}