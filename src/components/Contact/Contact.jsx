"use client";

import React from "react";
import PageHeader from "../shared/PageHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <PageHeader title={"Contact Us"} />
      <ContactForm />
    </>
  );
};

export default Contact;
