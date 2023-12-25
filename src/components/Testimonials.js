import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        Get working experience to work with this amazing team & in future want
        to work together for bright future projects and also make deposit to
        freelancer.
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">Naveen</h3>
          <Link
            href="https://professional-portfolio-6i2o.vercel.app/"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @Naveen
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialData = [
    { title: "Modern look & trending design", star: <StarHalfRoundedIcon /> },
    { title: "Layout and organized layers", star: null },
    { title: "Design Quality & performance", star: <StarRoundedIcon /> },
    { title: "Impressive User Experience", star: <StarHalfRoundedIcon /> },
  ];

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        {testimonialData.map((testimonial, index) => (
          <div key={index}>
            <Card
              star={testimonial.star}
              title={testimonial.title}
              imgSrc={`/testimonials/${index + 1}.png`}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyboardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
