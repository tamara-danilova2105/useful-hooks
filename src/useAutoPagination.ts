import { useState, useEffect } from "react";

interface UseAutoPaginationOptions {
    offsetHeight?: number
    rowHeight?: number
}

/**
 * useAutoPagination — рассчитывает количество строк, помещающихся в окно,
 * с учётом заданного смещения и высоты строки.
 *
 * @param offsetHeight Смещение в пикселях (например, высота хедера)
 * @param rowHeight Высота одной строки
 * @returns Количество строк, помещающихся в доступную часть окна
 */
export const useAutoPagination = ({
    offsetHeight = 420,
    rowHeight = 28,
}: UseAutoPaginationOptions = {}) => {
    const calculate = () =>
        Math.max(1, Math.floor((window.innerHeight - offsetHeight) / rowHeight));

    const [rowsPerPage, setRowsPerPage] = useState(() =>
        typeof window !== "undefined" ? calculate() : 1
    );

    useEffect(() => {
        const handleResize = () => {
            setRowsPerPage(calculate());
        }

        handleResize()
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [offsetHeight, rowHeight]);

    return rowsPerPage;
}
