"use client";

import React, { useState } from "react";
import { AppWrap, MotionWrap } from "@/Wrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import "./Contact.scss";

type FormType = {
  name: string;
  email: string;
  message: string;
};

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const handlePost: SubmitHandler<FormType> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      if (!response.ok) {
        throw Error("Failed to Send an message");
      }

      setIsFormSubmitted(true);
    } catch (error: any) {
      console.log(error);
      setIsFormSubmitted(false);
    } finally {
      setLoading(false);
      reset({ name: "", email: "", message: "" });
    }
  };

  return (
    <React.Fragment>
      <h2 className="head-text">Contact Us</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <MdOutlineMail />
          <a href="mailto:" className="p-text">
            Email
          </a>
        </div>
        <div className="app__footer-card">
          <BsTelephoneForward />
          <a href="tel:+91 9363901791" className="p-text">
            +91 93639 01791
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          onSubmit={handleSubmit(handlePost)}
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors?.name?.message && (
            <p className="p-text_error">{errors?.name?.message}</p>
          )}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors?.email?.message && (
            <p className="p-text_error">{errors?.email?.message}</p>
          )}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
            />
          </div>
          {errors?.message?.message && (
            <p className="p-text_error">{errors?.message?.message}</p>
          )}
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
