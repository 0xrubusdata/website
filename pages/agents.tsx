import React from "react";
import styles from "../styles/Agents.module.css";

const agents = [
  {
    name: "1xrubusdata - Weather AI",
    description: "Creates haikus about the weather and posts them on X.",
    image: "/agents/1xrubusdata/1xrubusdata-full.jpg",
    socials: {
      twitter: "https://twitter.com/",
    },
    status: "In Development",
  },
  {
    name: "0xrubusdata",
    description:
      "Analyzes crypto data and predicts trends to help you make informed decisions.",
    image: "/agents/0xrubusdata/0xrubusdata-full.jpg",
    socials: {
      twitter: "https://x.com/Data0x88850",
    },
    status: "Active",
  },
  {
    name: "TBD",
    description:
      "Art critic.",
    image: "/agents/banner/NeoclassicalPainter.webp",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  {
    name: "101xrubusdata",
    description:
      "Social Media Moderator.",
    image: "/agents/101xrubusdata/101xrubusdata.png",
    socials: {
      twitter: "https://x.com/",
    },
    status: "In Development",
  },
  
  // Ajoute d'autres agents ici
];

export default function Agents() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={styles.title}>Our Agents</h1>
      <div className={styles.AgentGrid}>
        {agents.map((agent, index) => (
          <div key={index} className={styles.AgentCard}>
            <img
              src={agent.image}
              alt={agent.name}
              className={styles.AgentImage}
            />
            <h2 className={styles.AgentName}>{agent.name}</h2>
            <p className={styles.AgentDescription}>{agent.description}</p>
            <div className={styles.AgentSocials}>
              {agent.socials.twitter && (
                <a
                  href={agent.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
            <p
              className={`${styles.AgentStatus} ${
                agent.status === "Active"
                  ? styles.Active
                  : styles.InDevelopment
              }`}
            >
              {agent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
