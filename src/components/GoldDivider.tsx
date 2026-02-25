import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GoldDivider({ className = "" }: { className?: string }) {
  const { ref, isVisible } = useScrollReveal(0.5);

  return (
    <div ref={ref} className={`flex justify-center ${className}`}>
      <div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        style={{
          width: isVisible ? "120px" : "0px",
          transition: "width 1.2s ease-out",
        }}
      />
    </div>
  );
}
