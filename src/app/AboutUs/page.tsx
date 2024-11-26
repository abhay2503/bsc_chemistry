import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>

<section className="section" id="aboutus">
  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-title mb-5 ab shadow">About Us</h2>
        
        <div className="lead mt-5 justify">  &quot;Welcome to our B.Sc. Chemistry study hub, where we focus on making your studies easier and more successful. We offer a wide range of study materials organized by semester, with clear notes and helpful guides on all chemistry topics. From basic concepts to more advanced topics, our resources are created to break down complex ideas, boost your practical skills, and get you ready for exams. Explore our easy-to-use semester-wise library, designed to support you at every step of your B.Sc. Chemistry journey.&quot;
 </div>
        <div className="section-border"></div>
      </div>
    </div>
  </div>
</section>

    <section className="section secondary position-relative">
      <div className="bg-image overlay-secondary">
        <Image src="/about.jpg" alt="bg-image"/>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="row align-items-center">
              <div className="col-lg-4 mb-4 img">
                <Image src="/about.jpg" alt="feature-image" className="img-fluid top-image"/>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className="row marg">
                  <div className="col-12 reasonmarg">
                    <h2 className="text-black about">Reasons to Choose Us</h2>
                    <div className="section-border ml-0 ms-0"></div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="media d-flex align-items-baseline mt-2">
                    <i className="fa-solid fa-pen-to-square me-3 size text-black"></i>
                    <div className="media-body">
                        <h4 className="text-black">Easy To Learn</h4>
                        <p className="light">The notes on this website are written neatly and in simple language, making them easy for every student to understand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="media align-items-baseline d-flex mt-2">
                    <i className="fa-solid fa-pen-to-square me-3 size text-black"></i>
                    <div className="media-body">
                        <h4 className="text-black">Structured Material</h4>
                        <p className="light">Topics covered here are arranged in a very systematic order as per the prescribed syllabus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="media align-items-baseline d-flex mt-2">
                      <i className="fa-solid fa-pen-to-square me-3 size text-black"></i>
                      <div className="media-body">
                        <h4 className="text-black">Complete Syllabus</h4>
                        <p className="light">These notes cover every topic in each chapter, providing a complete syllabus. You only need to read and learn from these notes—no textbooks needed.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4 ">
                    <div className="media align-items-baseline d-flex mt-2">
                    <i className="fa-solid fa-pen-to-square me-3 size text-black"></i>
                    <div className="media-body">
                        <h4 className="text-black">Yearly Questions</h4>
                        <p className="light">These notes also include past exam questions and important questions that often appear, making them very helpful for your studies.</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      
    </section>

</> 
  )
}

export default page