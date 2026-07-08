import { GlassCard } from "@/components/ui/glass-card";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
}

export default function TimelineItem({
    year,
    title,
    company,
    description,
}: TimelineItemProps) {
    return (
        <div className="relative pl-10">
            {/* Timeline dot */}
            <div className="absolute left-0 top-4 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />

            <GlassCard
                interactive
                glowColor="blue"
                glowIntensity="low"
                className="p-6"
            >
                <span className="text-sm font-semibold text-cyan-400">
                    {year}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    {company}
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                    {description}
                </p>
            </GlassCard>
        </div>
    );
}