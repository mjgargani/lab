import { useLocation } from "@tanstack/react-router";
import randomId from "@/shared/utils/randomId";
import styles from "./Frame.module.css";

export type pages = "/" | "/projects" | "/about";

const FrameWrapper: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname as pages;
  const gradColors = {
    "/": ["#00137f", "#0095ff"],
    "/projects": ["#0095ff", "#1d8700"],
    "/about": ["#1d8700", "#00137f"],
  };

  const colors = gradColors[currentPath] || gradColors["/"];

  return (
    <div
      data-testid={randomId("frame-wrapper")}
      className={`${styles.frame__wrapper} z-[-50] animate-bgRotate`}
      style={{
        backgroundImage: `linear-gradient(0, ${colors[0]}, ${colors[1]})`,
      }}
    />
  );
};

export default FrameWrapper;
