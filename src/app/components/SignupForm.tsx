"use client";

import { FormEvent, useState } from "react";
import { pronouns } from "lib/pronounData";
import Link from "next/link";

export default function SignupForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [preferredPronouns, setPreferredPronouns] = useState("");
  const [link, setLink] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dab5zmbvd/image/upload/v1691437826/undraw_monster_artist_2crm_kvoet0.svg"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),

        username,
        firstName,
        lastName,
        password,
        image: image,
        location,
        pronouns: preferredPronouns,
        link: link.toLowerCase(),
        bio,
      }),
    });

    if (res.status === 409) {
      setLoading(false);
      setError("Username or Email is already in use");
    }
    if (res.status === 400) {
      setLoading(false);
      setError("Required data is missing");
    }
    if (res.status === 500) {
      setLoading(false);
      setError("Unable to create account");
    } else if (res.status === 200) {
      setLoading(false);
      setError("");
      setSuccess("Account successfully created click here to login!");
    }
  };

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as any);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  mx-auto my-5 p-5 bg-slate-200 rounded-lg"
      >
        <div className="flex flex-row mx-auto">
          <div className="flex flex-col">
            <label className="mx-5" htmlFor="firstName">
              First Name *
            </label>
            <input
              name="firstName"
              className="my-5 p-2 outline-none rounded-sm mx-5"
              onChange={(e) => setFirstName(e.target.value)}
              required
              value={firstName}
              type="text"
              cy-data="firstName"
            />
          </div>
          <div className="flex flex-col">
            <label className="mx-5" htmlFor="lastName">
              Last Name *
            </label>
            <input
              name="lastName"
              className="my-5  mx-5 p-2 outline-none rounded-sm"
              onChange={(e) => setLastName(e.target.value)}
              required
              value={lastName}
              type="text"
              cy-data="lastName"
            />
          </div>
        </div>
        <div className="flex flex-row mx-auto">
          <div className="flex flex-col">
            <label className="mx-5" htmlFor="lastName">
              Username *
            </label>
            <input
              className="my-5 mx-5 p-2 outline-none rounded-sm"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              cy-data="username"
              value={username}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mx-5" htmlFor="email">
              Email *
            </label>
            <input
              className="my-5  mx-5 p-2 outline-none rounded-sm"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              cy-data="email"
              value={email}
              required
            />
          </div>
        </div>
        <div className="flex flex-row mx-auto">
          <div className="flex flex-col">
            <label htmlFor="password">Password *</label>
            <input
              className="my-5 p-2 mx-auto outline-none rounded-sm"
              name="password"
              type="password"
              value={password}
              cy-data="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mx-10" htmlFor="location">
              Location
            </label>

            <input
              className="my-5 ml-10 p-2 outline-none rounded-sm"
              name="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label className="mx-5" htmlFor="preferredPronouns">
              Preferred Pronouns{" "}
            </label>

            <select
              className="my-5 mx-5 p-2 outline-none rounded-sm"
              name="preferredPronouns"
              value={preferredPronouns}
              id="pronouns"
              onChange={(e) => setPreferredPronouns(e.target.value)}
            >
              <option value="N/A">N/A</option>
              {pronouns.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="ml-28" htmlFor="link">
              Personal Website
            </label>
            <input
              className="my-5 ml-28 p-2 outline-none rounded-sm"
              name="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mx-5" htmlFor="bio">
            Bio{" "}
          </label>
          <textarea
            className="my-5 mx-5 p-2 outline-none rounded-sm"
            name="bio"
            rows={5}
            value={bio}
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="flex mx-5 flex-col">
          <label className="">Profile pic</label>
          <input
            name="profilePic"
            className="my-2 outline-none rounded-sm"
            type="file"
            cy-data="image"
            placeholder="Profile Picture"
            onChange={handleImageChange}
          />
        </div>

        {error && (
          <p
            data-cy="signup-error-message"
            className="text-center text-red-500"
          >
            {error}
          </p>
        )}
        {success && (
          <Link
            data-cy="login-link"
            href="/login"
            className="hover:underline text-green-500 text-center"
          >
            {success}
          </Link>
        )}
        <button
          disabled={loading}
          className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90 mx-5 my-5"
          type="submit"
          cy-data="signup-button"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </>
  );
}
