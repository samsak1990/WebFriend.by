import type {
  IGeneralContent,
  IHeadingBox,
} from "../../data/Interfaces/IGeneral";
import { ABOUT_CONSTANT as contacts } from "../../data/About/About.constant";
import { GENERAL_CONTENT as content } from "../HelloBox/HelloBox.content";

export const generalContacts = {
  name: content.ru.span,
  phone: contacts.phone,
  email: contacts.email,
  linkedIn: contacts.linkedIn,
  telegram: contacts.telegram,
  instargam: contacts.instargam,
} as const;

export type TKeyOfContact = keyof typeof generalContacts;

export type TAbout = {
  heding: string;
  text: string;
  name: string;
  phone: string | number;
  email: string;
  linkedIn: string;
  telegram: string;
  instargam: string;
};

export const HeadingAbout: IGeneralContent<IHeadingBox> = {
  ru: {
    title: "Кто я?",
  },
  en: {
    title: "About me",
  },
};

export const ABOUT_CONTENT: IGeneralContent<TAbout> = {
  ru: {
    heding: "Снова привет!",
    text: "Меня зовут Павел, и front-end разработка увлекла меня еще со времен колледжа. С тех пор я не просто изучаю эту сферу, но и занимаюсь ей профессионально. В 2018 и 2024 годах я окончил несколько школ программирования, освоил современные технологии и принципы веб-разработки. За годы работы я реализовал узконаправленные проекты, создавал скрипты и разрабатывал удобные и функциональные веб-интерфейсы. Помимо обучения, я самостоятельно изучил множество материалов по front-end, что помогло мне глубже разобраться в деталях и применять передовые решения. Если вам нужно современное и удобное веб-приложение, я готов помочь! Разработка интерфейсов, оптимизация, адаптивность, интерактивные решения — все это можно реализовать быстро и качественно. Свяжитесь со мной, и мы обсудим ваш проект!",
    ...generalContacts,
  },
  en: {
    heding: "Hi again!",
    text: "My name is Pavel, and front-end development has fascinated me since my college years. Since then, I have not only studied this field but also pursued it professionally. In 2018 and 2024, I completed several programming schools, mastering modern technologies and web development principles. Over the years, I have worked on specialized projects, created scripts, and developed user-friendly and functional web interfaces. In addition to formal education, I have independently studied numerous front-end materials, which has allowed me to gain deeper insights and apply cutting-edge solutions. What I Offer If you need a modern and efficient web application, I am ready to help! Interface development, optimization, adaptability, interactive solutions—all of this can be implemented quickly and with high quality. Contact me, and let's discuss your project!",
    ...generalContacts,
  },
};
