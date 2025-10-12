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
import BoloingeSiteBolog from "@/components/AllBologPagass/BoloingeSiteBolog/BoloingeSiteBolog.tsx";
import SeoWorkingBolog from "@/components/AllBologPagass/SeoWorkingBolog/SeoWorkingBolog.tsx";
import KeywordRicercBolog from "@/components/AllBologPagass/KeywordRicercBolog/KeywordRicercBolog.tsx";
import LokilSeoBolog from "@/components/AllBologPagass/LokilSeoBolog/LokilSeoBolog.tsx";
import SchemaBolog from "@/components/AllBologPagass/SchemaBolog/SchemaBolog.tsx";
import DomienAtourteBolog from "@/components/AllBologPagass/DomienAtourteBolog/DomienAtourteBolog.tsx";
import WevSiteLoding from "@/components/AllBologPagass/WevSiteLoding/WevSiteLoding.tsx";
import HidenTagBolog from "@/components/AllBologPagass/HidenTagBolog/HidenTagBolog.tsx";
import SeoImasBolog from "@/components/AllBologPagass/SeoImasBolog/SeoImasBolog.tsx";
import Contenloungouse from "@/components/AllBologPagass/Contenloungouse/Contenloungouse.tsx";
import ContenWriting from "@/components/AllBologPagass/contenWriting/ContenWriting.tsx";
import WhatcontenWriten from "@/components/AllBologPagass/whatcontenWriten/whatcontenWriten.tsx";
import ContentypeBolog from "@/components/AllBologPagass/ContentypeBolog/ContentypeBolog.tsx";
import ContenBolog from "@/components/AllBologPagass/ContenBolog/ContenBolog.tsx";
import BanglaAritakelBolog from "@/components/AllBologPagass/BanglaAritakelBolog/BanglaAritakelBolog.tsx";
import NiseContenBolog from "@/components/AllBologPagass/NiseContenBolog/NiseContenBolog.tsx";






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
      {
        path: "/BoloingeSiteBolog",
        Component: BoloingeSiteBolog,
      },

      // seo bolog ruter
      {
        path: "/SeoWorkingBolog",
        Component: SeoWorkingBolog,
      },
      {
        path: "/KeywordRicercBolog",
        Component: KeywordRicercBolog,
      },
      {
        path: "/LokilSeoBolog",
        Component: LokilSeoBolog,
      },
      {
        path: "/SchemaBolog",
        Component: SchemaBolog,
      },
      {
        path: "/DomienAtourteBolog",
        Component: DomienAtourteBolog,
      },
      {
        path: "/WevSiteLoding",
        Component: WevSiteLoding,
      },
      {
        path: "/HidenTagBolog",
        Component: HidenTagBolog,
      },

      {
        path: "/SeoImasBolog",
        Component: SeoImasBolog,
      },

      // bolong router
      {
        path: "/Contenloungouse",
        Component: Contenloungouse,
      },

      {
        path: "/ContenWriting",
        Component: ContenWriting,
      },

      {
        path: "/WhatcontenWriten",
        Component: WhatcontenWriten,
      },

      {
        path: "/ContentypeBolog",
        Component: ContentypeBolog,
      },
      {
        path: "/ContenBolog",
        Component: ContenBolog,
      },
      {
        path: "/BanglaAritakelBolog",
        Component: BanglaAritakelBolog,
      },
      {
        path: "/NiseContenBolog",
        Component: NiseContenBolog,
      },



      // E business router




    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
