'use client'

import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
export default function Home() {
  
  return (
    <main>
      <>
        <Hero />
        <section id="features">
          <div className="my-80 ">
            <h2 className="text-center font-bold text-4xl">FEATURES</h2>
            <div className="flex flex-row justify-around flex-wrap p-10 ">
              <FeatureCard
                img="/images/blog.svg"
                alt="Blogging illustration"
                description="Create your own blog and begin posting immediately"
              />
               <FeatureCard
                img="/images/community.svg"
                alt="A map of the world with connection lines across it"
                description="Connect with others around the world"
              />
               <FeatureCard
                img="/images/new.svg"
                alt="Blogging illustration"
                description="Create communities and spread your message!"
              />
            </div>
          </div>
        </section>
      </>
    </main>
  );
}
