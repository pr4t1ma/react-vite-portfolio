import { useState, ReactNode, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

type AnimationVariant =
  | "fade"
  | "fade-scale"
  | "slide"
  | "rotate"
  | "gradient"
  | "word-reveal"
  | "floating";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  triggerOnce?: boolean;
  variant?: AnimationVariant;
  withUnderline?: boolean;
  floating?: boolean;
}

export const AnimatedHeading = ({
  children,
  className = "",
  level = 1,
  triggerOnce = false,
  variant = "fade-scale",
  withUnderline = false,
  floating = false,
}: AnimatedHeadingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const ref = useIntersectionObserver((visible) => setIsVisible(visible), {
    threshold: 0.1,
    rootMargin: "50px",
    triggerOnce,
  });

  // Force animation restart by changing key when element becomes visible
  useEffect(() => {
    if (isVisible) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isVisible]);

  const HeadingTag = `h${level}` as const;

  // Map variant to CSS class
  const getVariantClass = () => {
    const baseClass = "animated-heading";
    const variantMap: Record<AnimationVariant, string> = {
      fade: `${baseClass}--hidden`,
      "fade-scale": `${baseClass}--premium-fade-scale`,
      slide: `${baseClass}--premium-slide`,
      rotate: `${baseClass}--premium-rotate`,
      gradient: "animated-heading-gradient",
      "word-reveal": "",
      floating: `${baseClass}--floating`,
    };
    return variantMap[variant] || `${baseClass}--hidden`;
  };

  const headingContent =
    typeof children === "string" && variant === "word-reveal"
      ? children.split(" ").map((word, idx) => (
          <span key={idx} className="animated-heading-word">
            {word}
          </span>
        ))
      : children;

  const visibilityClass = isVisible
    ? "animated-heading--visible"
    : "animated-heading--hidden";

  const finalClassName = `
    ${className}
    ${getVariantClass()}
    ${visibilityClass}
    ${floating ? "animated-heading--floating" : ""}
    ${withUnderline ? "animated-heading-underline" : ""}
  `.trim();

  return (
    <HeadingTag
      key={animationKey}
      ref={ref as any}
      className={finalClassName}
    >
      {headingContent}
    </HeadingTag>
  );
};
