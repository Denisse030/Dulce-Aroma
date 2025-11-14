import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "3cc8f003-0562-4d51-9de1-7ebd2416cfa6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="Contact" className="container mx-auto p-14 md:p-20 w-full bg-[#f7efe9] rounded-2xl shadow-md shadow-[#8f564530] flex flex-col items-center mt-10">
      <h1 className="text-2xl sm:text-4xl font-serif text-[#8f5645] font-bold tracking-wide">
        Contact Us
      </h1>
      <div className="h-1 w-16 bg-[#c29b86] rounded-full mt-2 mb-6"></div>
      <p className="text-[rgb(143,86,69)] max-w-88 text-center leading-relaxed mb-10">
        Tell us your favorite coffee shop in NYC! Or let us know if you've tried
        any of the recipes!
      </p>
        <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-auto gap-6 mt-5 mb-8">
                <input className="flex-1 p-3 outline-none border-[0.5px] border-black rounded-md bg-white dark:text-black" type="text" placeholder="Enter your name:" name="name" required/>
                <input className="flex-1 p-3 outline-none border-[0.5px] border-black rounded-md bg-white dark:text-black" type="text" placeholder="Enter your email:" name="email" required/>
            </div>
            <textarea className="w-full p-4 outline-none border-[0.5px] border-black rounded-md bg-white mb-6 dark:text-black" rows="6" placeholder="Enter your message" name="message" required></textarea>
            <button type="submit" className="py-3 px-8 w-max border-[#bd9183] bg-[#3d2e29] text-white rounded-full mx-auto hover:bg-[#bd9183] hover:border-[#3d2e29] duration-500 border flex items-center justify-center">Submit now</button>
            <p className="mt-4 text-center">{result}</p>
        </form>
    </div>
  );
};

export default Contact;
