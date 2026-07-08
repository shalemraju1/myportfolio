import CountUp from "react-countup";
import { GlassCard } from "@/components/ui/glass-card";

interface StatCardProps {
    value: number;
    label: string;
    suffix?: string;
    inView: boolean;
}

export default function StatCard({
    value,
    label,
    suffix = "",
    inView,
}: StatCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="blue"
            glowIntensity="low"
            className="p-6"
        >
            <h3 className="text-3xl font-bold text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                {inView && <CountUp end={value} duration={2} />}
                {suffix}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
                {label}
            </p>
        </GlassCard>
    );
}