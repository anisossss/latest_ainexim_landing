import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants";
import Section from "../../components/Section";
import Header from "../../components/Header";

const JoinWaitlist = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCareerChange = (e) => {
    setCareer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${CONSTANTS.API_URL_PROD}/user/waitlist`;

    axios
      .post(url, { email, career, fullName })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setFullName("");
        setEmail("");
        setCareer("");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response?.data?.message || "Something went wrong!");
      });
  };
  return (
    <>
      <Header />
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />

      <Section
        id="contact"
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container relative">
          <div className="relative z-10 max-w-[62rem] mx-auto  mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="text-center mx-auto">
              <h1 className="h1 mb-6 text-white">JOIN OUR WAITLIST! </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-10 backdrop-blur-xl rounded-xl p-8 shadow-lg space-y-6"
            >
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-white placeholder:text-white"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-white placeholder:text-white"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="career"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Current / Desired Career
                </label>
                <input
                  type="text"
                  id="career"
                  className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-white placeholder:text-white"
                  value={career}
                  onChange={handleCareerChange}
                  required
                  placeholder="Enter your current or desired career"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default JoinWaitlist;
