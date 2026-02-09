import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';

interface Props {
  children: ReactNode;
}

export default function MagneticButton({ children }: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current!.getBoundingClientRect();

    // Bereken het midden van de knop
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Bereken de afstand tussen de muis en het midden
    const moveX = (clientX - centerX) * 0.4; // 0.4 is de 'kracht' van de magneet
    const moveY = (clientY - centerY) * 0.4;

    gsap.to(buttonRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    // Breng de knop weer terug naar het midden
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)" // Een lekker verend effect
    });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block" // Zorgt dat de container niet de hele breedte pakt
    >
      {children}
    </div>
  );
}
