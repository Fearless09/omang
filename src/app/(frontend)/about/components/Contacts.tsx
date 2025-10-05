import React from "react";
import Heading from "./Heading";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="wrapper mt-[58px]">
      <Heading>Contact Details</Heading>

      <ul className="mt-9.5 space-y-6">
        {contacts.map((contact, index) => (
          <li key={index} className="group text-xl text-black">
            {contact.name}:{" "}
            <Link
              href={contact.href}
              target="_blank"
              className="font-medium underline-offset-2 group-hover:underline"
            >
              {contact.value}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;

const contacts = [
  {
    name: "Email",
    value: "omangthomas001@gmail.com",
    href: "mailto:omangthomas001@gmail.com",
  },
  {
    name: "WhatsApp",
    value: "09150738871",
    href: "https://wa.me/2349055584700",
  },
  { name: "Phone Number", value: "09150738871", href: "tel:+2349150738871" },
];
