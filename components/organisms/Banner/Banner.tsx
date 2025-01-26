import React, { useState } from 'react';
import styles from '../../../styles/Banner.module.css';

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

const extractName = (path: string) => {
  return path.split('/').pop()?.replace('.webp', '').replace(/([A-Z])/g, ' $1');
};

const Banner: React.FC = () => {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerTrack}>
          {agents.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Agent ${index + 1}`}
              className={styles.bannerImage}
              onMouseOver={() => setHoveredAgent(extractName(src))}
              onMouseOut={() => setHoveredAgent(null)}
            />
          ))}
          {agents.map((src, index) => (
            <img
              key={`duplicate-${index}`}
              src={src}
              alt={`Agent duplicate ${index + 1}`}
              className={styles.bannerImage}
              onMouseOver={() => setHoveredAgent(extractName(src))}
              onMouseOut={() => setHoveredAgent(null)}
            />
          ))}
        </div>
      </div>
      {hoveredAgent && (
        <div className={styles.agentName}>
          {hoveredAgent}
        </div>
      )}
    </div>
  );
};

export default Banner;
