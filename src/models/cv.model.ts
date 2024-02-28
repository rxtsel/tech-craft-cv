export interface CV {
  meta: Meta;
  basics: Basics;
  education: Education[];
  references: Reference[];
  skills: Skill[];
  awards: Award[];
  work: Work[];
  interests: Interest[];
}

interface Award {
  title: string;
  awarder: string;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  summary: string;
  website: string;
  email: string;
  location: Location;
  profiles: Profile[];
}

interface Location {
  city: string;
  countryCode: string;
}

interface Profile {
  username: string;
  url: string;
  network: string;
}

interface Education {
  endDate: Date;
  startDate: Date;
  area: string;
  studyType: string;
  institution: string;
}

interface Interest {
  name: string;
}

interface Meta {
  theme: string;
}

interface Reference {
  reference: string;
  name: string;
}

interface Skill {
  keywords: string[];
  level: string;
  name: string;
}

interface Work {
  summary: string;
  website: string;
  name: string;
  location?: string;
  position: string;
  startDate: Date;
  highlights?: string[];
  endDate?: Date;
  pinned?: boolean;
}
