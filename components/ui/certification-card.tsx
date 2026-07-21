import { GlassCard } from "@/components/ui/glass-card";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface CertificationCardProps {
    title: string;
    issuer: string;
    year: string;
    credential?: string;
}

export default function CertificationCard({
    title,
    issuer,
    year,
    credential,
}: CertificationCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="blue"
            glowIntensity="low"
            className="flex h-full flex-col p-6"
        >
            <span className="text-sm font-semibold text-cyan-400">
                {year}
            </span>

            <h3 className="mt-3 text-xl font-bold">
                {title}
            </h3>

            <p className="mt-2 text-slate-400">
                {issuer}
            </p>

            <div className="mt-auto pt-6">
                {credential ? (
                    <a
                        href={credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                        Verify Credential
                        <HiArrowTopRightOnSquare size={16} />
                    </a>
                ) : (
                    <span className="text-sm text-slate-500">
                        Credential Coming Soon
                    </span>
                )}
            </div>
        </GlassCard>
    );
}