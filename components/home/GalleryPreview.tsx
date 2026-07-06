"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
];

export default function GalleryPreview() {

return(

<section
id="gallery"
className="py-32 bg-[#090909]"
>

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Gallery

</h2>

<p className="text-center text-gray-400 mt-6">

Moments...
Memories...
Music...
Legacy...

</p>

<div className="grid md:grid-cols-3 gap-8 mt-20">

{images.map((img,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="overflow-hidden rounded-3xl"

>

<Image

src={img}

alt="gallery"

width={600}

height={800}

className="w-full h-[500px] object-cover transition duration-500 hover:scale-110"

/>

</motion.div>

))}

</div>

</div>

</section>

)

}
