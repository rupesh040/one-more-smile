import data from "./content.json";
import type { LandingContent } from "./type";
export const content = data as LandingContent;
export const sections = content.NGO.sections;
export default content;
