import React from 'react';


const ResponsibilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-opacity-80 block rounded-lg border shadow-xl border-gray-800 p-20 m-10 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10">
      <img className="w-38 h-28 object-cover mx-auto mb-2" src={imageUrl} alt={title} />
      <h2 className="text-3xl text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-2">{description}</p>
    </div>
  );
};

const responsibilities = [
  {
    title: "Responsibility 1",
    description: "Description for Responsibility 1",
    imageUrl: `${process.env.PUBLIC_URL}/undraw_energizer.svg`,
  },
  {
    title: "Responsibility 2",
    description: "Description for Responsibility 2",
    imageUrl:`${process.env.PUBLIC_URL}/undraw_social.svg`,
  },
  {
    title: "Responsibility 3",
    description: "Description for Responsibility 3",
    imageUrl:`${process.env.PUBLIC_URL}/undraw_join.svg`,
  },
  {
    title: "Responsibility 4",
    description: "Description for Responsibility 4",
    imageUrl: `${process.env.PUBLIC_URL}/undraw_projections.svg`,
  },
  {
    title: "Responsibility 5",
    description: "Description for Responsibility 5",
    imageUrl: `${process.env.PUBLIC_URL}/undraw_sharing.svg`,
  },
  {
    title: "Responsibility 6",
    description: "Description for Responsibility 6",
    imageUrl:`${process.env.PUBLIC_URL}/undraw_solution_mindset.svg`,
  },
];

const ResponsibilitiesSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-opacity-80">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mt-16 mb-10">Responsibilities of CA</h1>
        <div className="flex flex-col items-center">
          {responsibilities.map((responsibility, index) => (
            <ResponsibilityCard
              key={index}
              title={responsibility.title}
              description={responsibility.description}
              imageUrl={responsibility.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;
