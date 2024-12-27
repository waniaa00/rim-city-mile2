import React from 'react'

const Contact = () => {
  return (
   <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
    <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Contact Us</h2>
    <form>
        <input type='text' placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-b-blue-950 rounded-md'required/>
        <input type= 'email'  placeholder='Email Address' className='w-full mb-4 px-4 py-2 border border-b-blue-950 rounded-md'required/>
        <input type= 'text'  placeholder='Phone Number' className='w-full mb-4 px-4 py-2 border border-b-blue-950 rounded-md'required/>
        <textarea  placeholder='Your Message' className='w-full mb-4 px-4 py-2 border border-b-blue-950 rounded-md'required/>
        <button type='submit' className='w-full mb-4 px-4 py-2 border text-white bg-blue-950 rounded-md'>Send Message </button>

    </form>

   </section>
  )
}

export default Contact
