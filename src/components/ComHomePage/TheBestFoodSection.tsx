import BestFoodsCard from "./BestFoodsCard";
import SliderWrapper from "../SliderWraper/SliderWrapper";

const TheBestFoodSection = () => {
  return (
    <SliderWrapper numberOfShowSlider={4} ArrowPosition="42%">
      <BestFoodsCard
        image="/public/images/TheBastFood/image1.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        image="/public/images/TheBastFood/image2.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        image="/public/images/TheBastFood/image3.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        image="/public/images/TheBastFood/image4.jpg"
        name="ماکارونی"
      />
    </SliderWrapper>
    // </Box>
  );
};

export default TheBestFoodSection;
