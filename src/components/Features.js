import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Meet the feature of product</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Lightning-fast performance: Seamlessly delivering top-tier tech services for swift, efficient solutions tailored to your needs."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="Exploring tech collaborations, software ventures, and product distribution for mutual growth and innovation. Open to discussing partnership opportunities."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Upgrade to Pro Subscription for exclusive features, priority support, and enhanced tools for unparalleled service excellence."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="24/7 Responsive Customer Support: Swift assistance ensuring your satisfaction and success in every interaction. Your success, our priority."
        />
      </div>
    </section>
  );
};

export default Features;
