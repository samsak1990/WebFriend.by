import type { IGeneralContent } from "../../data/Interfaces/IGeneral";

type TSkillsBox = {
    h2: string;
    p: string;

}
type Skill = 'HTML' | 'CSS' | 'JavaScript' | 'TypeScript' | 'React' | 'GIT' | 'Python';
type TSkillsLevel = Record<Skill, number>;


export const SKILLS_CONTENT: IGeneralContent<TSkillsBox> = {
    ru: {
        h2: "О моих навыках",
        p: "Я увлечён веб-разработкой и постоянно развиваюсь в этой сфере. Владею HTML, CSS, JavaScript, TypeScript, React, Git и Python — это мой основной стек технологий. Люблю писать чистый, оптимизированный код, создавать удобные интерфейсы и разбираться в сложных задачах. Всегда открыт к новым знаниям и интересным проектам."

    },
    en: {
        h2: "About my skills",
        p: "I'm passionate about web development and constantly improving in this field. I have expertise in HTML, CSS, JavaScript, TypeScript, React, Git, and Python—this is my core technology stack. I enjoy writing clean, optimized code, creating user-friendly interfaces, and tackling complex challenges. I'm always open to new knowledge and exciting projects.",
    },
};


export const SKILLS_LEVEL: TSkillsLevel = {
    HTML: 90,
    CSS: 90,
    JavaScript: 80,
    TypeScript: 50,
    React: 70,
    GIT: 70,
    Python: 40
};