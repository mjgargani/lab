import React from "react";
import potion from "@/shared/assets/potion.webp";
import randomId from "@/shared/utils/randomId";
import styles from "./Frame.module.css";
import { useLocation } from "@tanstack/react-router";
import { pages } from "./wrapper";

const FramePotion: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname as pages;
  const opacityValue = currentPath !== "/" ? 0.1 : 1;

  return (
    <div
      data-testid={randomId("frame-potion")}
      className={`${styles.frame__potion} z-[-20] animate-potion`}
      style={{
        backgroundImage: `url(${potion})`,
        opacity: opacityValue,
      }}
    />
  );
};

export default FramePotion;
