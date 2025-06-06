import React, { useRef, useState, useCallback, useEffect } from "react";
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
        } catch (error) {
            setCopyState({
                isCopied: false,
                error: error instanceof Error ? error.message : 'Failed to copy'
            });
        }
    }, [contact]);

    useEffect(() => {
        if (copyState.isCopied) {
            const timer = setTimeout(() => setCopyState({ isCopied: false, error: null }), 2000);
            return () => clearTimeout(timer);
        }
    }, [copyState.isCopied]);

    const copyButtonTitle = copyState.isCopied
        ? (lang === 'en' ? 'Copied!' : 'Скопировано!')
        : (lang === 'en' ? 'Copy to clipboard' : 'Копировать');

    return (
        <div
            ref={spanElemCopy}
            className={s.contact__box}
            data-social="toCopy"
            role="listitem"
        >
            <button
                className={`${s.contact__copy} ${copyState.isCopied ? s.copy_wellDone : ''}`}
                onClick={handleCopy}
                title={copyButtonTitle}>
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
