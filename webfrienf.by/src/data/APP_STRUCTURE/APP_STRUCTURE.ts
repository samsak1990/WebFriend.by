import { HelloBox } from "../../components/HelloBox/HelloBox";
import { Services } from "../../components/Services/Services";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Gallary } from "../../components/Gallary/Gallary";
import { Price } from "../../components/Price/Price";
import { Experience } from "../../components/Experience/Experience";
import { Feedbacks } from "../../components/Feedbacks/Feedbacks";
import { Blog } from "../../components/Blog/Blog";

import type { TLang } from "../Interfaces/IGeneral";



export const AppStructure: React.ComponentType<{lang: TLang}>[] = [
    HelloBox,
    Services,
    About,
    Skills,
    Gallary,
    Price,
    Experience,
    Feedbacks,
    Blog
  ] 