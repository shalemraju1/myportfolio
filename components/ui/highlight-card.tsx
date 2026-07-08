import { GlassCard } from "@/components/ui/glass-card";

interface HighlightCardProps {
    icon: string;
    title: string;
    description: string;
    year: string;
}

export default function HighlightCard({
    icon,
    title,
    description,
    year,
}: HighlightCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="blue"
            glowIntensity="medium"
            className="p-6"
        >
            <div className="flex items-start gap-4">
                <div className="text-4xl">
                    {icon}
                </div>

                <div className="flex-1">
                    <p className="text-sm text-cyan-400 font-semibold">
                        {year}
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                        {title}
                    </h3>

                    <p className="mt-3 text-muted-foreground leading-7">
                        {description}
                    </p>
                </div>
            </div>
        </GlassCard>
    );
}