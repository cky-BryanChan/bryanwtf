interface screenSize {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  [index: string]: string;
}

const screen: screenSize = {
  sm: "(max-width: 480px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 992px)",
  xl: "(max-width: 1200p)x",
};

export default screen;
