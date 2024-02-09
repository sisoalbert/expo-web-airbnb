import { useMediaQuery } from "react-responsive";

const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
const isTablet = useMediaQuery({
  query: "(min-width: 768px) and (max-width: 1024px)",
});
const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

if (isMobile) {
  // Handle mobile devices
} else if (isTablet) {
  // Handle tablets
} else if (isBigScreen) {
  // Handle big screens
} else {
  // Handle other devices (optional)
}

export { isMobile, isTablet, isBigScreen };
