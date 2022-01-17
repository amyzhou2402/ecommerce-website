import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import structure from "./Carousel.module.scss";

const CarouselComponent = () => {
    return (
        <div>
            <div class="carousel-wrapper" className={structure.img}>
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                >
                    <div>
                        <img
                            src="https://www.glassons.com/content/products/dina-chain-wrap-crop-blouse-white-front-bl50606vis.jpg?width=1029"
                            alt="Wrap Chain Crop Blouse"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.glassons.com/content/products/piper-puddle-baggy-jeans-bryce-light-wash-front-jd51910pdnm.jpg?width=1029"
                            alt="Low Rise Straight Leg Puddle Jean"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.glassons.com/content/products/co-dani-dressy-pant-milk-front-pw51358pln.jpg?width=1029"
                            alt="High Waist Pintuck Straight Leg Pant"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComponent;

// export const CarouselComponent = () => {
//     return (
//         <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
//             <div className={structure.section}>
//                 <img
//                     src="https://www.glassons.com/content/products/dina-chain-wrap-crop-blouse-white-front-bl50606vis.jpg?width=1029"
//                     alt="Wrap Chain Crop Blouse"
//                 />
//             </div>
//             <div className={structure.section}>
//                 <img
//                     src="https://www.glassons.com/content/products/piper-puddle-baggy-jeans-bryce-light-wash-front-jd51910pdnm.jpg?width=1029"
//                     alt="Low Rise Straight Leg Puddle Jean"
//                 />
//             </div>
//             <div className={structure.section}>
//                 <img
//                     src="https://www.glassons.com/content/products/co-dani-dressy-pant-milk-front-pw51358pln.jpg?width=1029"
//                     alt="High Waist Pintuck Straight Leg Pant"
//                 />
//             </div>
//         </Carousel>
//     );
// };
// export default CarouselComponent;
