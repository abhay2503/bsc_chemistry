'use client'
import React, { useCallback, useState } from 'react'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


interface BlogPost {
    id: number;
    videoUrl: string;
    category: string;
    title: string;
    description: string;
  }

const Youtube = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const blogPosts: BlogPost[] = [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/ZFThHKSowco?si=-79YgzATsYWoKN0Y",
        category: "Technology",
        title: "The Future of AI in Web Development",
        description: "Discover how artificial intelligence is revolutionizing the way we build and maintain websites."
      },
      {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/InnmbAFV0SU?si=jgTJz11BbHh6QQKS",
        category: "Design",
        title: "Mastering Modern UI Design Principles",
        description: "Learn the essential principles of modern UI design and how to apply them effectively."
      },
      {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/aLp-5wGxxTY?si=Dsmk9falGEAofqEV",
        category: "Business",
        title: "Digital Marketing Strategies for 2024",
        description: "Explore the latest digital marketing trends and strategies for business growth."
      },
      {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/OOPzsQdfbkw?si=1gzaEjB8G4EIooxG",
        category: "Development",
        title: "Building Scalable Web Applications",
        description: "A comprehensive guide to developing scalable and maintainable web applications."
      },
      {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/ebzODfXJnQ0?si=hNKOQrQaVw6dOk7e",
        category: "Analytics",
        title: "Data-Driven Decision Making",
        description: "How to leverage data analytics to make informed business decisions."
      },
      {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/fygEniJD6oo?si=0EJdzYmP742RajPc",
        category: "Security",
        title: "Cybersecurity Best Practices",
        description: "Essential security measures to protect your digital assets and data."
      }
    ];
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1
      );
    }, [blogPosts.length]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1
      );
    };

    
  return (
   
      <div className="youtube-div py-2">
      <div className="position-relative">
        <div className="overflow-hidden">
          <div
            className="d-flex transition-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="col-4 px-2 youtube-videos"
                role="article"
                aria-label={post.title}
              
              >
                <div className="bg-white rounded shadow-lg overflow-hidden h-100 transition-transform hover-scale-105 ">
                  <iframe
                    id={`video-${post.id}`}
                    width="100%"
                    height="100%"
                    src={post.videoUrl}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-100"
                  />
                  <div className="p-4">
                    <span className="badge bg-info text-white">
                      {post.category}
                    </span>
                    <h2 className="mt-3 h5 text-dark">{post.title}</h2>
                    <p className="mt-2 text-muted">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="position-absolute top-50 start-0 translate-middle-y bg-white p-2 rounded-circle shadow-sm border-0"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6 text-dark" />
        </button>

        <button
          onClick={nextSlide}
          className="position-absolute top-50 end-0 translate-middle-y bg-white p-2 rounded-circle shadow-sm border-0"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-6 h-6 text-dark" />
        </button>
      </div>
    </div>
  )
}

export default Youtube