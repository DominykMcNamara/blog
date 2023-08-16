import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

type Props = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string;
  bio: string;
  link: string;
  pronouns: string;
};

export default function ProfileCard({
  firstName,
  lastName,
  username,
  email,
  location,
  bio,
  link,
  pronouns,
}: Props): JSX.Element {
  
  return (
    <section className="mx-auto space-y-6 text-center" id="profileInfo">
      <h1 data-cy="name">
        {firstName} {lastName} {pronouns !== "N/A" ? `| ${pronouns}` : ""}
      </h1>
      <h2 data-cy='username' className="text-indigo-800">@{username}</h2>
    
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faLocationDot} />
        <h2 data-cy="location" className="ml-1">{location}</h2>
      </div>
      {link !== "N/A" && (
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faLink} />
          <Link data-cy="link" href={link} className="text-blue-800 hover:underline hover:opacity-90" >{link}</Link>
        </div>
        
      )}
      {bio && <p data-cy="bio">{bio}</p>}
    </section>
  );
}
