
export type TCopyProps = {
    contact: string,
    element: HTMLSpanElement | null,
    className: string;
}

export default function handleCopyToClipboard({contact, element, className}: TCopyProps ): void{
    if (!element) return
    try{
        navigator.clipboard.writeText(contact)
        requestAnimationFrame(()=>{
            element.classList.add(className)

            setTimeout(() => {
                element.classList.remove(className);
            }, 1500);
        })
        
    } catch (error) {
        console.error("Копирование не удалось:", error);
    }
        

}
