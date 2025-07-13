import { useState } from "react";

interface UseExpandableTextProps {
    text: string;
    maxLength: number;
    ellipsis?: string
}

/**
 * useExpandableText — управляет отображением длинного текста с возможностью разворачивания.
 *
 * @param text Текст, который нужно обрезать
 * @param maxLength Максимальная длина до обрезки
 * @param ellipsis Суффикс для обрезанного текста (по умолчанию '...')
 * @returns displayText, isExpanded, toggleExpanded
 */
export const useExpandableText = ({ text, maxLength, ellipsis = "..." }: UseExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    const displayText = isExpanded || text.length <= maxLength
        ? text
        : `${text.slice(0, maxLength)}${ellipsis}`;

    return { isExpanded, displayText, toggleExpanded };
};
