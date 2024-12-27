import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover text-white' style={{backgroundImage: "url(about.jpg)"}}>
        <div className='g-black bg-opacity-0 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold-mb-4' data-aos="fade-up">About Us</h2>
            <p>Swing by Rim City and experience the ultimate wheel shopping experience. Our knowledgeable staff, combined with our impressive selection, will ensure you leave with the perfect rims to take your vehicle to the next level.</p>
        </div>

    </section>
  );
};

export default About
