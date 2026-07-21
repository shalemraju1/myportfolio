import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { GlassCard } from "@/components/ui/glass-card";

interface HackathonCardProps {
    title: string;
    organizer: string;
    duration: string;
    year: string;
    certificate?: string;
}

export default function HackathonCard({
    title,
    organizer,
    duration,
    year,
    certificate,
}: HackathonCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="purple"
            glowIntensity="low"
            className="flex h-full flex-col p-6"
        >
            <span className="text-sm font-semibold text-cyan-400">
                {year}
            </span>

            <h3 className="mt-3 text-2xl font-bold">
                {title}
            </h3>

            <p className="mt-2 text-slate-400">
                {organizer}
            </p>

            <span className="mt-4 inline-flex w-fit rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                {duration}
            </span>

            <div className="mt-auto pt-6">
                {certificate ? (
                    <a
                        href={certificate}
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