import { GlassCard } from "@/components/ui/glass-card";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
    technologies?: string[];
    link?: string;
}

export default function TimelineItem({
    year,
    title,
    company,
    description,
    technologies = [],
    link,
}: TimelineItemProps) {
    return (
        <div className="relative pl-10">
            {/* Timeline Dot */}
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

                {technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {link && (
                    <div className="mt-6">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                            View Credential
                            <HiArrowTopRightOnSquare size={16} />
                        </a>
                    </div>
                )}
            </GlassCard>
        </div>
    );
}