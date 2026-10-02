export const site = {
  name: "Rajasthani Lok Sansthan",
  shortName: "Rajasthani Lok Sansthan",
  tagline: "Language, Culture & Social Empowerment",
  email: "rajasthaniloksansthan@gmail.com",
  phone: "94145-03130",
  phoneHref: "+919414503130",
  address: "37, Sector No. 5, Nohar, Hanumangarh, Rajasthan 335523",
  regNo: "18/Hanumangarh/2007-2008",
  foundedYear: 2007,
  pan: "AAAAR8963Q",
  bank: {
    name: "State Bank of India",
    accountName: "Rajasthani Lok Sansthan",
    accountNumber: "31056025293",
    ifsc: "SBIN0011303",
    branch: "Nohar",
  },
  ujaas: {
    name: "Ujaas Special Academy",
    formerName: "Horizon (Disabled Awareness, Education and Rehabilitation Institute)",
    tagline: "Light in Every Child, Potential in Every Ability",
    nitiAayogReg: "RJ/2025/0854771",
    studentsEnrolled: 32,
    educators: 3,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sansthan", label: "Our Work" },
  { href: "/ujaas", label: "Ujaas Academy" },
  { href: "/hathai", label: "Hathai" },
] as const;

export const footerLegalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/accessibility", label: "Accessibility Statement" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;
