export type IconName =
  | "GraduationCap"
  | "HeartPulse"
  | "Users"
  | "Baby"
  | "Utensils"
  | "Lightbulb"
  | "Droplets"
  | "Leaf"
  | "Handshake"
  | "Target"
  | "Heart"
  | "MapPin";
export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}
export interface SectionHeading {
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
}
export interface Link {
  name: string;
  href: string;
}
export interface ComponentReference {
  key: string;
  component: string;
}
export interface LandingContent {
  NGO: {
    templateComponents: {
      "template-1": {
        shared: { Header: string; Footer: string };
        pages: { home: { components: ComponentReference[] } };
      };
    };
    sections: {
      Header: {
        variants: {
          NGOHeader1: { logo: string; links: Link[]; button: string };
        };
      };
      Banner: { variants: { NGOBanner1: SectionHeading & { image: string } } };
      CompanyStatistics: {
        variants: {
          NGOStats1: {
            stats: { value: string; label: string; icon: IconName }[];
          };
        };
      };
      About: {
        variants: {
          NGOAbout1: SectionHeading & {
            mainImage: string;
            smallImage: string;
            features: Feature[];
          };
        };
      };
      Services: {
        variants: { NGOServices1: SectionHeading & { items: Feature[] } };
      };
      WhyChooseUs: {
        variants: {
          NGOWhyChooseUs1: SectionHeading & {
            image: string;
            features: Feature[];
          };
        };
      };
      Gallery: {
        variants: {
          NGOGallery1: SectionHeading & {
            items: { image: string; label: string }[];
          };
        };
      };
      Testimonial: {
        variants: {
          NGOTestimonial1: SectionHeading & {
            items: {
              name: string;
              title: string;
              quote: string;
              image: string;
              rating: number;
            }[];
          };
        };
      };
      Contact: {
        variants: {
          NGOContact1: {
            cursiveText: string;
            heading: string;
            description: string;
            fields: {
              name: string;
              email: string;
              phone: string;
              message: string;
            };
            button: string;
          };
        };
      };
      Donate: {
        variants: {
          NGODonate1: {
            cursiveText: string;
            headingPart1: string;
            headingPart2: string;
            description: string;
            items: { title: string; icon: IconName }[];
          };
        };
      };
      Footer: {
        variants: {
          NGOFooter1: {
            logo: string;
            description: string;
            quickLinks: Link[];
            contact: { address: string; phone: string; email: string };
            copyright: string;
            socialLinks?: Link[];
          };
        };
      };
    };
  };
}
