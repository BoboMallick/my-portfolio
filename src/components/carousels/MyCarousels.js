import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MyCarousels.css';
import Slide1 from '../../img/img/carousal/bg1.webp'
import Slide2 from '../../img/img/carousal/bbb.jpeg'
import Slide3 from '../../img/img/carousal/bg3.jpeg'

const MyCarousels = () => {
    return (
      <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* <ScrollDown /> */}
    </div>
//         <>
//         <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={slide1}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={slide2}
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={slide3}
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> 
//         </>
    );
};

export default MyCarousels;