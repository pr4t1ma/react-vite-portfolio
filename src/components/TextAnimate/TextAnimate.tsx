import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

type AnimationType = "chars" | "words" | "gradient" | "emphasis" | "unblur";

interface TextAnimateProps {
  children: string;
  type?: AnimationType;
  className?: string;
  as?: "span" | "p" | "div" | "h3";
}

export const TextAnimate = ({
  children,
  type = "words",
  className = "",
  as: Component = "span",
}: TextAnimateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const ref = useIntersectionObserver((visible) => setIsVisible(visible), {
    threshold: 0.1,
    rootMargin: "50px",
    triggerOnce: false,
  });

  // Force animation restart
  useEffect(() => {
    if (isVisible) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isVisible]);

  const renderAnimatedText = () => {
    if (type === "chars") {
      return children
        .split("")
        .map((char, idx) => <span key={idx}>{char}</span>);
    }

    if (type === "words") {
      return children
        .split(" ")
        .map((word, idx) => <span key={idx}>{word}</span>);
    }

    return children;
  };

  const classMap = {
    chars: "text-animate-chars",
    words: "text-animate-words",
    gradient: "text-animate-gradient",
    emphasis: "text-animate-emphasis",
    unblur: "text-animate-unblur",
  };

  const animateClass = classMap[type];
  const visibleClass = isVisible ? "visible" : "";
  const baseClassName = `${animateClass} ${visibleClass} ${className}`;

  return React.createElement(
    Component,
    {
      key: animationKey,
      ref: ref as any,
      className: baseClassName,
    },
    type === "chars" || type === "words" ? renderAnimatedText() : children,
  );
};
