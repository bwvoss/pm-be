import accountSettings from "./AccountSettings.route";
import home from "./Home.route";
import legal from "./Legal.route";
import userProfile from "./UserProfile.route";
import interview from "./Interview.route";

/**
 * The list of application routes (pages).
 */
export default [
  home,
  accountSettings,
  ...legal,
  userProfile,
  interview,
] as const;
