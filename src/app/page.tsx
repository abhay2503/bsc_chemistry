
import Accordian from '@/components/Accordian'
import Youtube from '@/components/Youtube'
import Image from 'next/image'
import React from 'react'


const page = () => {

  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   if (isPlaying) {
  //     interval = setInterval(nextSlide, 6000);
  //   }
  //   return () => clearInterval(interval);
  // }, [isPlaying, nextSlide]);

  
  return (
    <>
    <div className="banner mt-3">
        <Image unoptimized={true} src="/bigban.gif" alt='Big Banner' className="image1 img-fluid"/>
        <Image unoptimized={true} src="/smallban.gif" alt='Small Banner' className="image img-fluid"/>
      </div>
    
    
    
      <section className="section" id="aboutus">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title mb-5 ab2 shadow">BSc Chemistry</h2>
            
            <div className="lead mt-5 justify"> BSc Chemistry is a 3-4 year undergraduate program designed for students who have completed 10+2 in Science with Chemistry as a core subject. The course covers key areas of chemistry, including Inorganic, Organic, Physical, and Analytical Chemistry, along with optional subjects like Analytical Methods in Chemistry, Polymer Chemistry, and Industrial Chemicals and Environment. This guide provides a complete overview of the BSc Chemistry syllabus, subjects, career scope, and Click to 
                &nbsp;<a href='/aboutus' className='text-danger'style={{cursor:"pointer"}}>Read More</a>
     </div>
            <div className="section-border"></div>
          </div>
        </div>
      </div>
    </section>
          
    
    
    
      {/* study material */}
    
    
      <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center head">
              <h2 className="section-title ab2 shadow"> Study Material</h2>
              
              
            </div>
          </div>
        </div>
      </section>
    
    
     <div className="container py-4 rounded-3 mt-3">
      <div className="row justify-content-center text-center py-5">
      <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-1</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
        <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-2</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
    
        <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-3</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
        
      </div>
    
      <div className="row justify-content-center text-center py-5">
      <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-4</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
        <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-5</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
    
        <div className="col-lg-4 mb-4">
          <a className="imp-notes" href="/Physics-Important-Questions">
            <div className="imp-box">
              <i>
                <svg width="100.963" height="70.295" viewBox="0 0 42.963 41.295">
                  <g id="homepage-tests-taken" transform="translate(0.307 0)">
                    <path id="Path_253" data-name="Path 253" d="M1036.433,576.2a1.454,1.454,0,0,0,1.065.449h20.841a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1037.5a1.478,1.478,0,0,0-1.5,1.5,1.428,1.428,0,0,0,.433,1.049" transform="translate(-1036 -540.47)" fill="#000000"></path>
                    <path id="Path_9956" data-name="Path 9956" d="M1036.573,576.3a2.208,2.208,0,0,0,1.41.468h27.591a2.12,2.12,0,0,0,1.389-.468,1.332,1.332,0,0,0,.595-1.092,1.378,1.378,0,0,0-.595-1.109,2.176,2.176,0,0,0-1.389-.451h-27.591a2.268,2.268,0,0,0-1.41.451,1.4,1.4,0,0,0-.573,1.109,1.348,1.348,0,0,0,.573,1.092" transform="translate(-1036 -535.475)" fill="#000000"></path>
                    <path id="Path_254" data-name="Path 254" d="M1037.433,561.2a1.453,1.453,0,0,0,1.065.449h6.675a1.536,1.536,0,0,0,1.5-1.5,1.453,1.453,0,0,0-.449-1.065,1.428,1.428,0,0,0-1.049-.433H1038.5a1.478,1.478,0,0,0-1.5,1.5,1.426,1.426,0,0,0,.433,1.049" transform="translate(-1036.668 -530.464)" fill="#000000"></path>
                    <path id="Path_258" data-name="Path 258" d="M1085.827,477.835l-3.363-3.5a1.205,1.205,0,0,0-.533-.316,1.257,1.257,0,0,0-.616,0,1.208,1.208,0,0,0-.516.316l-18.194,18.61-.067.066-.017.017a.615.615,0,0,1-.066.1.167.167,0,0,1-.033.05.238.238,0,0,1-.033.066c0,.011-.009.017-.017.017a.033.033,0,0,1-.017.033l-2.913,6.292a1.24,1.24,0,0,0-.083.716,1.179,1.179,0,0,0,.35.633,1.1,1.1,0,0,0,.649.3,1.046,1.046,0,0,0,.7-.133l6.126-3.312a.033.033,0,0,0,.033-.017l.083-.05a.728.728,0,0,0,.183-.133l14.532-14.365a.177.177,0,0,0,.033-.017V483.2a.15.15,0,0,0,.05-.033l3.712-3.7a1.067,1.067,0,0,0,.349-.8A1.143,1.143,0,0,0,1085.827,477.835Zm-22.788,19.559.783-1.681.849.8Zm3.6-2.247-1.531-1.432,12.634-12.934,1.8,1.631Zm14.565-14.382-1.831-1.648,2.247-2.3,1.731,1.814Z" transform="translate(-1051.569 -473.985)" fill="#FE5757"></path>
                    <path id="Path_9957" data-name="Path 9957" d="M-20910.3,12870.094v-23.956h22.939" transform="translate(20911.344 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                    <path id="Path_9958" data-name="Path 9958" d="M-20882.223,12846.138h5.154v37.938h-5.154" transform="translate(20918.375 -12844.134)" fill="none" stroke="darkcyan" stroke-linecap="round" stroke-width="2.7"></path>
                  </g>
                </svg>
              </i>
              <div className="imp-cont">
                <h3>Semester-6</h3>
                <p>Complete Syllabus</p>
              </div>
            </div>
          </a>
        </div>
    
        
      </div>
    
      
    
    
     </div>

     <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center head">
              <h2 className="section-title ab2 shadow"> Sample Papers</h2>
              
              
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
      <Accordian/>
    </div>


       <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center head">
              <h2 className="section-title ab2 shadow"> Youtube</h2>
              
              
            </div>
          </div>
        </div>
      </section>

    <Youtube/>

  );
    
       </>
  )
}

export default page