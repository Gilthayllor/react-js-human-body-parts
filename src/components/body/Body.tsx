import type { ReactNode } from "react";
import { backBody } from "./backBody";
import { frontBody } from "./frontBody";
import { SvgWrapper } from "./SvgWrapper";
import type { BodyPart } from "./types/bodyPart";
import type { Slug } from "./types/slug";
import styles from "./Body.module.scss";

interface BodyProps {
    selectedParts: ReadonlyArray<Slug>;
    side: "front" | "back";
    onPartClick?: (part: Slug) => void;
    scale?: number;
}

export const Body: React.FC<BodyProps> = ({ selectedParts, side, scale, onPartClick }) => {
    const getBodyPath = (part: BodyPart): ReactNode => {
        const isSelected = selectedParts.includes(part.slug);
        return (
            <path
                key={part.slug}
                d={part.path}
                className={isSelected ? styles.bodyPartSelected : styles.bodyPart}
                onClick={() => onPartClick?.(part.slug)}
            />
        );
    }

    const bodyParts = side === "front" ? frontBody : backBody;

    return (
        <SvgWrapper side={side} scale={scale}>
            {bodyParts.filter(p => p.path).map(getBodyPath)}
        </SvgWrapper>
    );
};