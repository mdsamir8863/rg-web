import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from "../../assets/startup-screens/F1.png";
import F2 from "../../assets/startup-screens/F2.png";
import F3 from "../../assets/startup-screens/F3.png";
import F4 from "../../assets/startup-screens/F4.png";
import RgLogo from "../../assets/RG-logo2.png";
import { Link } from "react-router-dom";

const Frames = () => {
  const slides = [
    {
      id: 1,
      image: F1,
      text:
        "“Unlock the power of e-learning! Access millions of video lessons by top educators, paired with expertly crafted notes and study materials. Boost your skills with daily practice, DDP, mock tests, and self-learning kits. Learn from the best, anytime,  anywhere.”",
    },
    {
      id: 2,
      image: F2,
      text:
        "Discover discounted scholarships, offers, and top tutors worldwide for kindergartens, schools, colleges, universities, and tuition centers. Connect with us today for educational excellence.",
    },
    {
      id: 3,
      image: F3,
      text:
        "“Gear up for success in competitive exams like NEET, IIT JEE, and IPS IAS! Conquer tests and exams through our Q&A game. Aim high with country, state, and district level challenges. Achieve your goals now!”",
    },
    {
      id: 4,
      image: F4,
      text:
        "“Unlock internship opportunities in India and worldwide! Discover the best full-time and part-time jobs in your district and county with our community’s support. Let’s shape your career together!”",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        document.body.style.overflowX = "hidden";
      } else {
        document.body.style.overflowX = "visible";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to handle initial window size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full  cursor-move  h-full md:h-screen mx-auto  text-center overflow-hidden bg-gradient-to-r from-blue-400 via-purple-100 to-blue-300">
      <div className="flex items-center justify-between w-full border-b-1 mb-2 border-gray-300 shadow">
        <img
          className="h-24  rounded-lg cursor-default"
          src={RgLogo}
          alt="Ranker Guide Logo"
        />
        <div className="">
          {/* <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign up
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button> */}
          <Link to={"/register"}>
            <button
              type="button"
              className="text-black border border-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign up
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              type="button"
              className="text-black border border-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <Slider className="md:pl-3" {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none focus:outline-none">
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-auto max-h-96 object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <p className="text-lg font-semibold md:leading-9 text-blue-900">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Frames;
