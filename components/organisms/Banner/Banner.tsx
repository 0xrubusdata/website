import React, { useState } from "react";
import styles from "../../../styles/Banner.module.css";

const agents = [
  "/agents/banner/0xRubusData.webp",
  "/agents/banner/1xRubusData.webp",
  "/agents/banner/BuddhistMonk.webp",
  "/agents/banner/FirstFlight.webp",
  "/agents/banner/Gothic.webp",
  "/agents/banner/King.webp",
  "/agents/banner/NeoclassicalPainter.webp",
  "/agents/banner/Pachamama.webp",
  "/agents/banner/Pirate.webp",
  "/agents/banner/Robin.webp",
  "/agents/banner/UnderwaterExplorer.webp",
  "/agents/banner/VanGogh.webp",
];

const Banner: React.FC = () => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  // Function to extract the agent's name from the path
  const extractName = (src: string): string => {
    const parts = src.split("/");
    return parts[parts.length - 1].replace(".webp", "").replace(/_/g, " ");
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerTrack}>
        {agents.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Agent ${index + 1}`}
            className={styles.bannerImage}
            onMouseOver={() => src && setHoveredAgent(extractName(src))}
            onMouseOut={() => setHoveredAgent(null)}
          />
        ))}
        {agents.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            alt={`Agent duplicate ${index + 1}`}
            className={styles.bannerImage}
            onMouseOver={() => src && setHoveredAgent(extractName(src))}
            onMouseOut={() => setHoveredAgent(null)}
          />
        ))}
      </div>
      {hoveredAgent && <div className={styles.agentTooltip}>{hoveredAgent}</div>}
    </div>
  );
};

export default Banner;
