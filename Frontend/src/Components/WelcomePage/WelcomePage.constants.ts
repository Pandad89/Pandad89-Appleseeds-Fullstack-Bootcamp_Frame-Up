import aurora1 from "../../assets/2e7b9863-85ac-4faa-aad3-096fc1826c20-GettyImages-841647034.jpg";
import aurora2 from "../../assets/alaska-1640762318208-1864.jpg";
import aurora3 from "../../assets/trees-and-aurora-rays-4k_1630069097-2048x1365.jpg";
import { I_CarouselListItem } from "./WelcomePage.types";


export const mockCarouselListItems:I_CarouselListItem[] = [
    {
        title: "aurora1",
        imageUrl: aurora1,
        rating: 0
    },
    {
        title: "aurora2",
        imageUrl: aurora2,
        rating: 2
    },
    {
        title: "aurora3",
        imageUrl: aurora3,
        rating: 1
    },
]

export default { aurora1, aurora2, aurora3 };