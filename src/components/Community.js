import Image from "next/image";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const Community = () => {
  const cardContents = [
    {
      imgSrc: "/community/1.svg",
      title: "Join the Community",
      description:
        "Connect with like-minded individuals and become a part of our vibrant community.",
    },
    {
      imgSrc: "/community/2.svg",
      title: "Interactive Chats",
      description:
        "Engage in real-time conversations and discussions through our chat platform.",
    },
    {
      imgSrc: "/community/3.svg",
      title: "Access to Repositories",
      description:
        "Explore and contribute to various projects with access to our GitHub repositories.",
    },
  ];

  return (
    <section className="container mx-auto px-16 lg:px-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        {cardContents.map((content, index) => (
          <Card key={index} {...content} />
        ))}
      </div>
    </section>
  );
};

export default Community;
