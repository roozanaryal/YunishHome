import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactIcon from "./ContactIcon";

function Contact() {
   return (
      <>
         <div className="mt-6 bg-gray-200 px-10 py-6 rounded-md flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Contact the dealer</h1>
            <InputBox placeholder="First Name" />
            <InputBox placeholder="Last Name" />
            <InputBox placeholder="Email" type="email" />
            <InputBox placeholder="Phone" type="number" />
            <select
               name="Subject"
               id=""
               className="outline-none bg-white rounded-md p-3 w-full text-gray-400"
            >
               <option value="">Enquiry about car</option>
            </select>
            <Button className="rounded-md py-2 w-full bg-blue-400 text-center">
               Submit Query
            </Button>
            <p className="py-3 text-sm text-gray-500">
               By clicking here,you authorize Canaries.com and its
               seller/partners to contact you by text/calls which may include
               marketing.Calls may be prerecorded.You also agree to Privacy
               Notice.Consent is not required to purchase goods/services.
            </p>
            <div className="flex justify-evenly">

           <ContactIcon Icon={ BiPhoneCall} Title="Call"/>
           <ContactIcon Icon={ FaWhatsapp} Title="Whatsapp" className="px-1" />
           <ContactIcon Icon={ MdOutlineEmail} Title="Email" />

            </div>
         </div>
      </>
   );
}

export default Contact;
