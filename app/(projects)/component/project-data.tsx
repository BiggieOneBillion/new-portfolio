export type dataType = {
    name: string;
    description: string;
    stack: (string | undefined)[];
    links: {
        website: string;
    };
}[]

export const data:dataType = [
    {
      name: "Movie App (React Js + External API)",
      description:
        "Shows recent movies plus movies from different genres, and their trailers",
      stack: [
        "React Js",
        "Framer Motion",
        "React Router",
        "Axios",
        "Tanstack Query",
        "External API",
      ],
      links: {
        // github: "https://github.com/ray-BADA-1994/movieTv",
        website: "https://movie-tv-kappa.vercel.app/",
      },
    },
    {
      name: "Ecommerce Store (React Js + External API)",
      description:
        "Ecommerce store for cloths and other items for sale, React Js is used for the Front-end and it communicates with an external api to get the products and also uses STRIPE to handle payment and SupaBase to handle users details.",
      stack: [
        "React Js",
        "Framer Motion",
        "React Router",
        "Axios",
        "Tanstack Query",
        "External API",
        "Paystack Integration"
      ],
      links: {
        // github: "https://github.com/ray-BADA-1994/raystore",
        website: "https://raystore-sandy.vercel.app/",
      },
    },
    // {
    //   name: "Study Guild (Next.js)",
    //   description:
    //     "I created this website to serve as a study guild to help my student learning Web development. It contains exercises and quizes and videos, so that at anytime the student can always reference it for some information. To login use the email--'student@gmail.com' and password--'student' all in lowercase",
    //   stack: [
    //     "React Js",
    //     "React-Router-Dom",
    //     "React-Icons",
    //     "Axios",
    //    ,
    //   ],
    //   links: {
    //     website: "https://tutor-assistance.vercel.app/",
    //     // github: "",
    //   },
    // },
    {
      name: "Logistics Car Hire (React Js + SuparBase)",
      description:
        "A website for hiring luxury vehicles.(Still a work in progress) ",
      stack: [
        "Next Js",
        "Framer Motion",
        "Axios",
       ,
      ],
      links: {
        website: "https://luxury-logistics.vercel.app/",
        // github: "",
      },
    },
  ];