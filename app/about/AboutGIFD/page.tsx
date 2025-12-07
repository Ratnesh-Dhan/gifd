import Image from 'next/image'
import React from 'react'

const AboutGIFD = () => { 
  return (
    <div className='min-h-screen'>
      <div>
      <section className="w-full pt-8 pb-16 px-5 md:px-20 bg-gray-100">
<h2 className="text-3xl md:text-5xl font-bold text-center text-amber-500 mb-12">
Message From Leadership
</h2>


<div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
{/* Founder */}
<div className="rounded-xl p-6 bg-white shadow hover:shadow-xl transition duration-300">
<div className="flex items-center gap-4 mb-5">
<Image
src="/founder.jpg"
alt="Founder Image"
width={70}
height={70}
className="rounded-full object-cover border-2 border-amber-500"
/>
<div>
<h3 className="text-xl font-semibold">Founder</h3>
<p className="text-sm text-gray-500">Glam Institute of Fashion Designing</p>
</div>
</div>


<p className="text-gray-700 leading-relaxed text-sm md:text-base">
Fashion isn&apos;t just clothing — it&apos;s identity, confidence, and expression. When I started Glam Institute of Fashion Designing, my goal wasn&apos;t to build another classroom. It was to create a space where raw ambition transforms into skill, and talent evolves into mastery.
<br /><br />
Every student who walks through our doors carries potential. Our job is to shape it, sharpen it, and launch it into the world with purpose. Here, you don&apos;t just learn design — you learn discipline, creativity, professionalism, and the mindset required to lead in the fashion industry.
<br /><br />
The fashion world rewards courage, originality, and consistency. At Glam Institute, that&apos;s exactly what we build. 
</p>
</div>


{/* Co-Founder */}
<div className="rounded-xl p-6 bg-white shadow hover:shadow-xl transition duration-300">
<div className="flex items-center gap-4 mb-5 justify-end">
<Image
src="/cofounder.jpg"
alt="Co-Founder Image"
width={70}
height={70}
className="rounded-full object-cover border-2 border-amber-500"
/>


<div>
<h3 className="text-xl font-semibold">Co‑Founder</h3>
<p className="text-sm text-gray-500">Glam Institute of Fashion Designing</p>
</div>
</div>


<p className="text-gray-700 leading-relaxed text-sm md:text-base">
Glam Institute was created with the belief that education should feel empowering, practical, and forward-focused. The fashion industry is evolving faster than ever — and so should the people preparing to enter it.
<br />
<br />
We provide exposure, industry-driven curriculum, hands-on experience, and a platform for every student to discover their unique voice. Whether you're here to become a designer, stylist, merchandiser, or creative leader — you&apos;ll find the tools, guidance, and ecosystem to grow.
<br />
<br />
This institute isn&apos;t just the beginning of your education. It&apos;s the beginning of your journey into the real world of fashion.
</p>
</div>
</div>
</section>
      </div>
      <div className='flex justify-center my-20 gap-5'>
        <div>
        <span className='text-amber-500 font-bold'>About Glam Institute of Fashion Designing </span>
        <h3 className='text-3xl font-bold mt-4 mb-8'>A Best Platform To Learn<br />Fashion Designing Courses </h3>
        <p className='max-w-xl'>A passionate impulse, determinacy of purpose and the knowledge are the basic traits which one must own to be a Winner. If you promise to invest with passion, perseverance and passion, we promise to convert your potential into a highly rewarding career. It is our intense dream to make Glam Institute of Fashion Designing a leader in the Fashion fraternity and this will be achieved by inspiring arty expression and skilled exchange of encounters which magnifies creation and newness in the industry and enables trend to shine forth. With the spirit of managing volatile changes in the world of Fashion Technology, our well prepared and trained faculty invite you wholeheartedly to join the GIFD fraternity and make our journey still beautiful and prosperous. </p>
        </div>
        <Image src="/about/about-background.png" alt="about" width={500} height={350} />
      </div>
      
    </div>
  )
}

export default AboutGIFD