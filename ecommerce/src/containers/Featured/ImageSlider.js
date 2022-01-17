import { SliderData } from "./SliderData";

export const ImageSlider = () => {
    return (
        <>
            {SliderData.map((slide, index) => {
                return <img src="slide.image"></img>;
            })}
        </>
    );
};
