import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ScrollerWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  position: relative;

  @media (max-width: 576px) {
    padding: 10px 0;
  }
`;

const ScrollerContent = styled.div`
  display: inline-flex;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin: 0px 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 200px;
  height: 70px;
  object-fit: fill;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
    height: 75px;
  }

  @media (max-width: 576px) {
    width: 100px;
    height: 50px;
  }
`;

const ClientList = ({ images }) => {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    let animationFrameId;
    const scrollSpeed = 0.5; // Smaller is slower

    const animateScroll = () => {
      if (!isPaused && scroller) {
        scroller.scrollLeft += scrollSpeed;

        // Reset scroll when halfway through duplicated content
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate image list for seamless scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div id="clients">
      <center>
        <h6 style={{ color: 'black', marginTop: '20px' }}>
          Our Accreditations & Partnerships
        </h6>
      </center>
      <ScrollerWrapper
        ref={scrollerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ScrollerContent>
          {duplicatedImages.map((src, index) => (
            <ImageWrapper key={index}>
              <Image src={src} alt={`client-${index}`} />
            </ImageWrapper>
          ))}
        </ScrollerContent>
      </ScrollerWrapper>
    </div>
  );
};

export default ClientList;
