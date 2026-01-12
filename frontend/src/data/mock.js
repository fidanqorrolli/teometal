// frontend/src/data/mock.js

export const businessInfo = {
  name: "Teo Metal",
  tagline: "Punime Profesionale me Metal",
  description: "Shkallë emergjente, rrethoja, gilindera, konstruksione metalike dhe punime të ndryshme sipas porosisë.",
  phone: "+383 44 561 777",
  phoneClean: "38344561777",
  email: "info.teometal@gmail.com",
  address: {
    full: "Rruga Burimi nr. 88, Fshati Rashincë, 72000 Shtime"
  }
};

// WICHTIG: Das 'export' vor 'const services' muss vorhanden sein!
export const services = [
  {
    id: 1,
    icon: "Stairs",
    title: "Shkallë emergjente",
    description: "Shkallë të sigurta dhe të qëndrueshme për çdo lloj ndërtese sipas normave të sigurisë."
  },
  {
    id: 2,
    icon: "Building2",
    title: "Konstruksione metalike",
    description: "Struktura dhe skelete metalike për ndërtesa, halla dhe objekte të ndryshme."
  },
  {
    id: 3,
    icon: "Fence",
    title: "Rrethoja dhe dyrë",
    description: "Rrethoja dekorative dhe dyrë automatike sipas porosisë tuaj."
  },
  {
    id: 4,
    icon: "Cylinder",
    title: "Gilindera",
    description: "Punim i gilinderave modernë dhe cilësorë për shtëpi dhe objekte afariste."
  },
  {
    id: 5,
    icon: "Wrench",
    title: "Punime sipas porosisë",
    description: "Riparime und montime të ndryshme që lidhen me përpunimin e metalit."
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Shkallë Emergjente",
    category: "Shkallë",
    img: "/WhatsApp Image 2026-01-02 at 20.35.43.jpg",
    description: "Punim profesional për siguri maksimale."
  },
  {
    id: 2,
    title: "Konstruksion Industrial",
    category: "Konstruksione",
    img: "/WhatsApp Image 2026-01-02 at 20.35.44.jpg",
    description: "Skelet metalik për objekte afariste."
  },
  {
    id: 3,
    title: "Rrethoja Moderne",
    category: "Rrethoja",
    img: "/WhatsApp Image 2026-01-02 at 20.38.03.jpeg",
    description: "Detaje estetike dhe cilësi e lartë."
  }
];

export const navLinks = [
  { id: 1, label: "Ballina", href: "#home" },
  { id: 2, label: "Shërbimet", href: "#services" },
  { id: 3, label: "Galeria", href: "#portfolio" },
  { id: 4, label: "Pse Ne", href: "#why-us" },
  { id: 5, label: "Kontakt", href: "#contact" }
];
