"use client";
import React, { useState } from "react";
import FAQItem from "../components/ui/FAQItem"; // Importing FAQItem Component

function QA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      number: "01.",
      question: "How do you ensure that my uploaded photos and videos are safe?",
      answer:
        "Your data is safe with us and your privacy is always respected. Keeping your data secure is our number one priority and we have implemented robust technical, physical and administrative protocols to safeguard your data. Click here to read our privacy policy.",
    },
    {
      number: "02.",
      question: "What is the best device for using the site?",
      answer:
        "Our platform works best on desktop computers and laptops, but you can also use tablets and smartphones.",
    },
    {
      number: "03.",
      question: "Do I need an account to create and purchase photo books?",
      answer: "Yes, you need an account to save your progress and make purchases.",
    },
    {
      number: "04.",
      question: "How many photos can I add to a book?",
      answer: "You can add up to 140 photos in a standard book.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-medium md:text-[56px] mb-4 text-black font-cabin">
          Got Questions? We've Got Answers!
        </h2>
        <p className="text-gray-600 mt-6 text-[18px] mb-12">
          Find quick answers to common queries and get the clarity you need.
        </p>

        {/* FAQ List */}
        <div className="font-cabin ">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              number={faq.number}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QA;
