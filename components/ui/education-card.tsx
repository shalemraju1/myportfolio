import { GlassCard } from "@/components/ui/glass-card";

interface EducationCardProps {
    year: string;
    degree: string;
    institution: string;
    score: string;
}

export default function EducationCard({
    year,
    degree,
    institution,
    score,
}: EducationCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="purple"
            glowIntensity="low"
            className="p-6"
        >
            <span className="text-sm font-semibold text-cyan-400">
                {year}
            </span>

            <h3 className="mt-2 text-2xl font-bold">
                {degree}
            </h3>

            <p className="mt-2 text-muted-foreground">
                {institution}
            </p>

            <p className="mt-4 font-semibold text-cyan-300">
                {score}
            </p>
        </GlassCard>
    );
}