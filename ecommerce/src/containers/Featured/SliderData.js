import { databaseFactory } from "../../services/data";
///hardcoded rn but need to get img from firebase where featured is true

export const SliderData = [
    databaseFactory(
        "Linen Button Front Crop Top",
        30,
        "https://www.glassons.com/content/products/t-billie-short-sleeve-crop-black-front-bs51446tlv.jpg?width=1029",
        4,
        true
    ),
    databaseFactory(
        "Traceable Linen Wide Leg Pant",
        40,
        "https://www.glassons.com/content/products/t-draco-linen-pants-head-in-the-sandmilk-front-pw50562tyd.jpg?width=1029",
        3,
        false
    ),
];
