import React, { useState } from "react";
import GitHub from "../img/github.png";
import Linkedin from "../img/linkedinc.png";
import Instagram from "../img/instagram.png";
import { Resend } from "resend";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const resend = new Resend("re_123456789");

  (async function () {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["spaithane9172@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  })();
  const submitForm = async () => {
    if (
      formData.fname.length < 3 ||
      formData.lname.length < 3 ||
      !formData.email.includes("@") ||
      formData.email.length < 10 ||
      formData.message.length < 5
    ) {
      setError(true);
    } else {
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 flex justify-center items-center h-[75vh] md:h-[85vh]">
          <div className="w-[90%] border-[1px] border-gray-400 rounded-xl bg-slate-900 md:bg-transparent bg-clip-padding backdrop-filter  bg-opacity-40 shadow-xl px-[1rem] md:px-[2rem] pt-[1rem] pb-[2rem]">
            <h1 className="text-[1.6rem] md:text-[2rem] bungee-inline-regular text-gray-400 drop-shadow-xl text-center underline underline-offset-[0.5rem] mb-[2.5rem]">
              Contact Me
            </h1>
            <div className="flex flex-col amaranth-regular">
              <div
                className={`flex ${
                  formData.email.length < 3 && error ? "mb-[1rem]" : "mb-[2rem]"
                }`}
              >
                <div className="w-1/2">
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    className={`focus:outline-none text-gray-400 pl-[1rem] font-semibold md:font-bold w-[95%] bg-transparent rounded-lg border-[1px]  h-[2.5rem] ${
                      formData.fname.length < 3 && error
                        ? "border-red-400"
                        : "border-slate-900"
                    }`}
                    placeholder="First Name"
                  />
                  <p>
                    {formData.fname.length < 3 && error && (
                      <span className="text-red-400">
                        Fill Correct First Name
                      </span>
                    )}
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-end items-end">
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    className={`focus:outline-none text-gray-400 pl-[1rem] font-semibold md:font-bold w-[95%] bg-transparent rounded-lg border-[1px] ${
                      formData.lname.length < 3 && error
                        ? "border-red-400"
                        : "border-slate-900"
                    } h-[2.5rem]`}
                    placeholder="Last Name"
                  />
                  <p className="text-start w-full pl-[1vw]">
                    {formData.lname.length < 3 && error && (
                      <span className="text-red-400">
                        Fill Correct Last Name
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-col ${
                  formData.email.length < 3 && error ? "mb-[1rem]" : "mb-[2rem]"
                }
                   `}
              >
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`focus:outline-none text-gray-400 pl-[1rem] font-semibold md:font-bold  bg-transparent rounded-lg border-[1px] ${
                    formData.email.length < 3 && error
                      ? "border-red-400"
                      : "border-slate-900"
                  } h-[2.5rem]`}
                  placeholder="Email"
                />
                <p>
                  {formData.email.length < 3 && error && (
                    <span className="text-red-400">Fill Correct Email</span>
                  )}
                </p>
              </div>
              <div
                className={`flex flex-col ${
                  formData.email.length < 3 && error ? "mb-[1rem]" : "mb-[2rem]"
                }`}
              >
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`focus:outline-none text-gray-400 pl-[1rem] pt-[0.5rem] h-[10rem] md:h-[15rem] font-semibold md:font-bold bg-transparent rounded-lg border-[1px] ${
                    formData.message.length < 3 && error
                      ? "border-red-400"
                      : "border-slate-900"
                  }`}
                  placeholder="Message"
                ></textarea>
                <p>
                  {formData.message.length < 5 && error && (
                    <span className="text-red-400">
                      Fill Correct Message of min length 5
                    </span>
                  )}
                </p>
              </div>
              <button
                className="bg-slate-900 text-gray-400 font-bold py-[0.5rem] rounded-lg"
                onClick={submitForm}
              >
                Submit <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-[1rem] md:px-[3rem] pb-[2rem] md:py-[4rem] h-fitmd:h-[85vh]">
          <h1 className="mb-[0.5rem] md:mb-[1rem]">
            <span className="font-bold text-[1.2rem] text-gray-400">
              <i class="fa-solid fa-envelope"></i> Email :
            </span>
            <a href="mailto:spaithane9172@gmail.com">
              <span className="text-[1.1rem] text-gray-400">
                {" "}
                spaithane9172@gmail.com
              </span>
            </a>
          </h1>
          <h1 className="mb-[1rem]">
            <span className="font-bold text-[1.2rem] text-gray-400">
              <i class="fa-solid fa-mobile"></i> Mobile No. :
            </span>
            <span className="text-[1.1rem] text-gray-400">
              {" "}
              +91 - 9307877566
            </span>
          </h1>
          <hr />

          <h1 className="mb-[1rem] mt-[2rem]">
            <span className="font-bold text-[1.2rem] text-gray-400">
              <i class="fa-solid fa-link"></i> Links :
            </span>
          </h1>

          <h1 className=" mb-[0.5rem] md:mb-[1rem] flex">
            <a href="https://www.linkedin.com/in/sachin-paithane/">
              <span className="font-bold text-[1rem] md:text-[1.2rem] text-gray-400 flex items-center mr-[2rem]">
                <img
                  src={Linkedin}
                  alt=""
                  className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]"
                />{" "}
                <span>Linkedin</span>
              </span>
            </a>
            <a href="https://github.com/spaithane9172">
              <span className="font-bold text-[1rem] md:text-[1.2rem] text-gray-400 flex items-center mr-[2rem]">
                <img
                  src={GitHub}
                  alt=""
                  className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]"
                />{" "}
                <span>GitHub</span>
              </span>
            </a>
            <a href="https://www.instagram.com/sachinp9172/">
              <span className="font-bold text-[1rem] md:text-[1.2rem] text-gray-400 flex items-center">
                <img
                  src={Instagram}
                  alt=""
                  className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]"
                />{" "}
                <span>Instagram</span>
              </span>
            </a>
          </h1>
          <hr />
          <h1 className="mb-[1rem] mt-[2rem]">
            <span className="font-bold text-[1.2rem] text-gray-400">
              <i class="fa-solid fa-file"></i> Files :
            </span>
          </h1>
          <h1 className="mb-[1rem]">
            <a href="https://drive.google.com/file/d/1N3yCnRFsW9j52-lK05CR1SH5-JhFi1w6/view?usp=sharing">
              <span className="text-[1.1rem] text-gray-400">My Resume</span>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
