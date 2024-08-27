// HomePage routes
import { BookOpenText, ScanFaceIcon, HomeIcon } from "lucide-react";

export const homepageRoutes = [
  {
    route: "HOME",
    href: "/",
    icon: HomeIcon,
  },
  {
    route: "ABOUT",
    href: "/about",
    icon: BookOpenText,
  },
  {
    route: "LOGIN",
    href: "/sign-up",
    icon: ScanFaceIcon,
  },
];

// Dashboard routes
import {
  IconAffiliate,
  IconArrowLeft,
  IconBolt,
  IconBrandTabler,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

export const dashboardRoutes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: IconBrandTabler,
  },
  {
    label: "Workflows",
    href: "/workflows",
    icon: IconBolt,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: IconSettings,
  },
  {
    label: "Connections",
    href: "/connections",
    icon: IconAffiliate,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: IconReceipt2,
  },
];

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];
