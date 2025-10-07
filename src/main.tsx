import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import MineHomePages from "@/components/pages/Home/MineHomePages.tsx";
import Wevdesite from "@/components/pages/wev-desing/Wev-desgin.tsx";
import Seo from "@/components/pages/SeoSite/Seo.tsx";
import Bologing from "@/components/pages/bologing/Bologing.tsx";
import EBusiness from "@/components/pages/EBusiness/EBusiness.tsx";
import Onlineincome from "@/components/pages/Onlineincome/Onlineincome.tsx";
import DigtalMarketing from "@/components/pages/DigtalMarketing/DigtalMarketing.tsx";
import graphicsdesigning from "@/components/pages/GrifenDigen/graphicsdesigning.tsx";
import Aboutme from "@/components/pages/AboutME/Aboutme.tsx";
import policyContent from "@/components/pages/policyContent/policyContent.tsx";
import Contact from "@/components/pages/contact/Contact.tsx";
import OnlinePodateBologe from "@/components/HomeBolog/OnlinePordate/OnlinePodqate.tsx";
import MarketingBolog from "@/components/HomeBolog/MarketingBolog/MarketingBolog.tsx";
import DomoinHoistanBolog from "@/components/HomeBolog/domoinHoistanBolog/DomoinHoistanBolog.tsx";
import Midieamirkiten from "@/components/HomeBolog/midieaMIrkeden/MidieaMirkiten.tsx";
import Businessidea from "@/components/HomeBolog/ব্যবসার আইডিয়াbolog/ব্যবসার আইডিয়াBolog.tsx";
import MobillincomeBolog from "@/components/HomeBolog/মোবাইল দিয়ে ফ্রিল্যান্সিং/মোবাইল দিয়ে ফ্রিল্যান্সিংBolog.tsx";
import FreelancingBolog from "@/components/HomeBolog/ফ্রিল্যান্সিং/ফ্রিল্যান্সিংBolog.tsx";
import SeoBolog from "@/components/HomeBolog/seo/seobolog.tsx";
import ContentMarketing from "@/components/HomeBolog/Content Marketing/Content Marketing.tsx";
import ContentBlog from "@/components/HomeBolog/bologing/bologPagas.tsx";
import WevDigintBolog from "@/components/AllBologPagass/wevDigineBolog/WevDigint Bolog.tsx";
import CreateWevSiteBolog from "@/components/AllBologPagass/createwevsitebolog/CreateWevSiteBolog.tsx";
import CreatewevsiteitemBolg from "@/components/AllBologPagass/createwevsiteitemBolg/createwevsiteitemBolg.tsx";
import DomineNameBolog from "@/components/AllBologPagass/DomineNameBolog/DomineNameBolog.tsx";
import BestHostineCompineaBolog from "@/components/AllBologPagass/BestHostineCompineaBolog/BestHostineCompineaBolog.tsx";





const router = createBrowserRouter([
  {
    path: "/",

    Component: App,
    children: [
      {
        index: true,
        Component: MineHomePages,
      },

      {
        path: "/ওয়েবসাইট ডিজাইন",
        Component: Wevdesite,
      },
      {
        path: "/এসইও",
        Component: Seo,
      },
      {
        path: "/ব্লগিং",
        Component: Bologing,
      },
      {
        path: "/ই-ব্যবসা",
        Component: EBusiness,
      },
      {
        path: "/অনলাইন ইনকাম",
        Component: Onlineincome,
      },
      {
        path: "/ডিজিটাল মার্কেটিং",
        Component: DigtalMarketing,
      },
      {
        path: "/গ্রাফিক্স ডিজাইন",
        Component: graphicsdesigning,

      },
      // homebolog
      {
        path: "/আমার সম্পর্কে",
        Component: Aboutme,
      },
      {
        path: "/গোপনীয়তা নীতি",
        Component: policyContent,
      },

      {
        path: "/যোগাযোগ",
        Component: Contact,
      },
      {
        path: "/ContentBlog",
        Component: ContentBlog,
      },
      {
        path: "/ContentMarketing",
        Component: ContentMarketing,
      },
      {
        path: "/SeoBolog",
        Component: SeoBolog,
      },
      {
        path: "/ফ্রিল্যান্সিং",
        Component: FreelancingBolog,
      },
      {
        path: "/মোবাইলদিয়েফ্রিল্যান্সিংBolog",
        Component: MobillincomeBolog,
      },
      {
        path: "/Businessidea",
        Component: Businessidea,
      },
      {
        path: "/Midieamirkiten",
        Component: Midieamirkiten,
      },
      {
        path: "/DomoinHoistanBolog",
        Component: DomoinHoistanBolog,
      },
      {
        path: "/MarketingBolog",
        Component: MarketingBolog,
      },
      {
        path: "/OnlinePodateBologe",
        Component: OnlinePodateBologe,
      },
      // wev-Digien bolog
      {
        path: "/WevDigintBolog",
        Component: WevDigintBolog,
      },
      {
        path: "/CreateWevSiteBolog",
        Component: CreateWevSiteBolog,
      },
      {
        path: "/CreatewevsiteitemBolg",
        Component: CreatewevsiteitemBolg,
      },
      {
        path: "/DomineNameBolog",
        Component: DomineNameBolog,
      },
      {
        path: "/BestHostineCompineaBolog",
        Component: BestHostineCompineaBolog,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
