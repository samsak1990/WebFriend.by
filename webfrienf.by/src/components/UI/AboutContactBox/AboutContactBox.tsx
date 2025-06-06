import React, { useRef, useState, useCallback } from "react";
import s from "./AboutContactBox.module.css";
import { generalContacts, type TKeyOfContact } from "../../About/About.content";
import handleCopyToClipboard from "../../../features/clipBoard";
import type { TLang } from "../../../data/Interfaces/IGeneral";

interface AboutContactBoxProps {
    contact: TKeyOfContact;
    lang: TLang;
}

interface CopyState {
    isCopied: boolean;
    error: string | null;
}

export const AboutContactBox: React.FC<AboutContactBoxProps> = React.memo(({
    contact,
    lang
}) => {
    const spanElemCopy = useRef<HTMLSpanElement>(null);
    const [copyState, setCopyState] = useState<CopyState>({
        isCopied: false,
        error: null
    });

    const handleCopy = useCallback(async () => {
        try {
            await handleCopyToClipboard({ 
                contact: generalContacts[contact], 
                element: spanElemCopy.current, 
                className: s.copy_wellDone 
            });
            setCopyState({ isCopied: true, error: null });
            
            // Reset copy state after 2 seconds
            setTimeout(() => {
                setCopyState({ isCopied: false, error: null });
            }, 2000);
        } catch (error) {
            setCopyState({ 
                isCopied: false, 
                error: error instanceof Error ? error.message : 'Failed to copy' 
            });
        }
    }, [contact]);

    const copyButtonTitle = copyState.isCopied 
        ? (lang === 'en' ? 'Copied!' : 'Скопировано!')
        : (lang === 'en' ? 'Copy to clipboard' : 'Копировать');

    return (
        <div 
            className={s.contact__box} 
            data-social="toCopy"
            role="listitem"
        >
            <button
                ref={spanElemCopy}
                className={`${s.contact__copy} ${copyState.isCopied ? s.copy_wellDone : ''}`}
                onClick={handleCopy}
                title={copyButtonTitle}
                aria-label={copyButtonTitle}
                aria-live="polite"
            >
                {copyState.error && (
                    <span className={s.contact__error} role="alert">
                        {copyState.error}
                    </span>
                )}
            </button>
            <span className={s.contact__label} aria-label={`${contact} label`}>
                {contact}:
            </span>
            <span className={s.contact__value} aria-label={`${contact} value`}>
                {generalContacts[contact]}
            </span>
        </div>
    );
});

AboutContactBox.displayName = "AboutContactBox";
