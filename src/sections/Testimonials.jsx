import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { testimonials } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title="Peolple's thoughts about me"
         sub="⭐ Peer Feedback Highlights" 

         />
           <div className='lg:columns-3 md:columns-2 columns-1 gap-6 mt-16'>
               {testimonials.map((testimonials)=>(
               <GlowCard card={testimonials}>
                <div className="flex items-center gap-3">
                <div>
                    <img
                        src={testimonials.imgPath}
                        alt={testimonials.name}
                        className="w-16 h-16 rounded-full object-cover"
                     />
                </div>
                </div>
                <div>
                    <p className='font-bold'>{testimonials.name} </p>
                    <p className='text-white-50 text-sm'>{testimonials.mentions}</p>
                </div>
               </GlowCard>

               ))}
           </div>

      </div>
    </section>
  )
}

export default Testimonials
