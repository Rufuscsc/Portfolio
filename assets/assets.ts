import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import react from "./react.png";
import nextjs from "./nextjs.png";
import nextjs_darkmode from "./nextjs_darkmode.png";
import twitter from "./twitter.png";
import github from "./github.png";
import linkedin from "./linkdin.png";
import sawtrax from "./sawtrax.png";
import sawtrax_darkmode from "./sawtrax_darkmode.png";
import smsam from "./smsam.jpeg";
import smsam_darkmode from "./smsam_darkmode.png";
import spectrum from "./spectrum.png";
import spectrum_darkmode from "./spectrum_darkmode.png";
import figma from "./figma.png";
import git from "./git.png";
import flutter from "./flutter.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import dark_send_icon from "./whitearrow.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import glo from "./glo.png";
import wellens_consulting from "./well.png";
import crypto_app from "./crypto.jpeg";
import natours from "./nature.png";
import number_one from "./number_one.jpg";
import number_one_darkmode from "./number_one_darkmode.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  figma,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  dark_send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  flutter,
  react,
  nextjs,
  nextjs_darkmode,
  twitter,
  github,
  linkedin,
  sawtrax,
  sawtrax_darkmode,
  smsam,
  smsam_darkmode,
  spectrum,
  spectrum_darkmode,
  number_one,
  number_one_darkmode,
};

export const workData = [
  {
    title: "Sawtraw Glo Isebwebsite",
    description: "Glo Iseb landing page",
    bgImage: glo,
    link: "https://sawtrax-glo-website.netlify.app/",
  },
  {
    title: "Wellens Consulting",
    description: "Consulting service landing page",
    bgImage: wellens_consulting,
    link: "https://wellens-consulting.netlify.app/",
  },
  {
    title: "Crypto app",
    description: "Crypto webapp preview",
    bgImage: crypto_app,
    link: "https://bitcoin-app-one.vercel.app/",
  },
  {
    title: "Natours Project",
    description: "Tours booking landing page",
    bgImage: natours,
    link: "https://rufus-natours-project.netlify.app/",
  },
];

export const getServiceData = (isDarkMode: boolean) => [
  {
    icon: isDarkMode ? assets.sawtrax_darkmode : assets.sawtrax,
    title: "Sawtrax Limited",
    description:
      "A responsive corporate website designed for Sawtrax, showcasing their material handling equipment and panel saws with a focus on user experience and product accessibility.",
    link: "https://sawtraxltd.com/",
  },
  {
    icon: isDarkMode ? assets.smsam_darkmode : assets.smsam,
    title: "SMSAM System Ltd",
    description:
      "A dynamic e-commerce platform developed for SMSAM System Ltd, featuring a user-friendly interface and seamless shopping experience for a wide range of tech products.",
    link: "https://smsam.net/",
  },
  {
    icon: isDarkMode ? assets.spectrum_darkmode : assets.spectrum,
    title: "Spectrum Ltd",
    description:
      "A modern website created for Spectrum Ltd, highlighting their innovative technology solutions and services with an emphasis on sleek design and intuitive navigation.",
    link: "https://spectrumonline.ng/",
  },
  {
    icon: isDarkMode ? assets.number_one_darkmode : assets.number_one,
    title: "Number One Geeks Hubs",
    description:
      "A vibrant online presence for Number One Geeks Hubs, showcasing their tech community initiatives and services through an engaging and visually appealing website design.",
    link: "https://www.numberonegeekshubber.com.ng/",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const getToolsData = (isDarkMode: boolean) => [
  assets.vscode,
  isDarkMode ? assets.nextjs_darkmode : assets.nextjs,
  assets.react,
  assets.figma,
  assets.git,
];
