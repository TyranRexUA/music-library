export const cutText = (text: string): string => {
    return text.replace(/User-contributed text is available under the Creative Commons By-SA License; additional terms may apply\./i, "")
}