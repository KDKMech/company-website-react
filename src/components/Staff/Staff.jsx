import React from "react";

const Staff = (props) => {
  const staffMembers = [
    {
      name: "Sophia Martinez",
      role: "Chief Technology Officer",
      skills: ["Cloud Computing", "Cybersecurity", "AI/ML"],
      hobbies: ["Reading sci-fi novels", "Rock climbing"],
      funFact: "Holds a patent for a cybersecurity algorithm.",
    },
    {
      name: "Daniel Kim",
      role: "Marketing Manager",
      skills: ["Digital Marketing", "SEO", "Content Creation"],
      hobbies: ["Photography", "Traveling"],
      funFact: "Has visited 30 countries and counting.",
    },
    {
      name: "Olivia Johnson",
      role: "Human Resources Specialist",
      skills: [
        "Employee Relations",
        "Talent Acquisition",
        "Conflict Resolution",
      ],
      hobbies: ["Painting", "Yoga"],
      funFact: "Runs a local art gallery on weekends.",
    },
    {
      name: "James Wang",
      role: "Lead Software Engineer",
      skills: ["Full-Stack Development", "Python", "JavaScript"],
      hobbies: ["Gaming", "Playing the guitar"],
      funFact: "Developed a popular open-source project used worldwide.",
    },
    {
      name: "Emily Thompson",
      role: "Customer Support Representative",
      skills: ["Communication", "Problem-Solving", "CRM Software"],
      hobbies: ["Baking", "Gardening"],
      funFact:
        "Once won a local baking competition with her famous chocolate cake.",
    },
  ];

  return (
    <>
      <h2>Staff page</h2>
    </>
  );
};
export default Staff;
