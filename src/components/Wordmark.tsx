import { Zap } from "lucide-react";
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={
          "w-9 h-9 rounded-xl grid place-items-center " +
          (tone === "light"
            ? "bg-gold-grad shadow-gold"
            : "bg-primary shadow-glow")
        }
      >
        <Zap
          size={18}
          strokeWidth={2.5}
          className={
            tone === "light"
              ? "text-gold-foreground"
              : "text-primary-foreground"
          }
        />
      </div>
      <span
        className={
          "font-display font-extrabold tracking-tight text-[19px] " +
          (tone === "light" ? "text-ink-foreground" : "text-foreground")
        }
      >
        FluxPay
      </span>
    </div>
  );
}
