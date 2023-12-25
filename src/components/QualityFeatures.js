import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">QUALITY FEATURES</span>
      <h2 className="title text-center ">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Lightning-speed delivery of top-tier tech services, ensuring swift and seamless solutions for your needs."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="Exploring tech collaborations, software ventures, and product distribution for mutual growth and innovation. Open to discussing partnership opportunities."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Pro Subscription unlocks exclusive features, priority support, and enhanced tools for unparalleled service excellence."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Responsive 24/7 Customer Support: Swift, reliable assistance ensuring your satisfaction and success in every interaction. Your success is ours."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
