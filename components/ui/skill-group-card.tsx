import { GlassCard } from "@/components/ui/glass-card";

interface SkillGroupCardProps {
    title: string;
    children: React.ReactNode;
}

export default function SkillGroupCard({
    title,
    children,
}: SkillGroupCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="purple"
            glowIntensity="low"
            className="p-6"
        >
            <h3 className="mb-5 text-xl font-semibold text-white">
                {title}
            </h3>

            <div className="flex flex-wrap gap-3">
                {children}
            </div>
        </GlassCard>
    );
}