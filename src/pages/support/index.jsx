import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants";
import Section from "../../components/Section";
import Header from "../../components/Header";

const Support = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${CONSTANTS.API_URL_PROD}/user/contact`;

    axios
      .post(url, { email, subject })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setEmail("");
        setSubject("");
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
          <div className="relative z-10 max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="text-center mx-auto">
              <h1 className="h1 mb-6 text-white">Contact us</h1>
              <p className="body-1 max-w-3xl mx-auto mb-6  lg:mb-8 text-white">
                Have any questions or need support? Feel free to reach out to
                our team, and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl space-y-6 mb-10"
          >
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
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white mb-2"
              >
                Subject
              </label>
              <textarea
                id="subject"
                className="w-full px-4 py-2 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-white placeholder:text-white"
                rows="4"
                value={subject}
                onChange={handleSubjectChange}
                required
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Support;
