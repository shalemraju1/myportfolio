import { GlassCard } from "@/components/ui/glass-card";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface HighlightCardProps {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    link?: string;
}

export default function HighlightCard({
    icon,
    title,
    subtitle,
    description,
    link,
}: HighlightCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="blue"
            glowIntensity="low"
            className="flex h-full flex-col p-6"
        >
            <div className="text-4xl">{icon}</div>

            <h3 className="mt-5 text-2xl font-bold">
                {title}
            </h3>

            <p className="mt-2 font-medium text-cyan-400">
                {subtitle}
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
                {description}
            </p>

            <div className="mt-auto pt-6">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                        View Certificate
                        <HiArrowTopRightOnSquare size={16} />
                    </a>
                ) : (
                    <span className="text-sm text-slate-500">
                        Certificate Coming Soon
                    </span>
                )}
            </div>
        </GlassCard>
    );
}