import { GlassCard } from "@/components/ui/glass-card";

interface CertificationCardProps {
    title: string;
    issuer: string;
    year: string;
    credentialUrl?: string;
}

export default function CertificationCard({
    title,
    issuer,
    year,
    credentialUrl,
}: CertificationCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="purple"
            glowIntensity="low"
            className="p-6"
        >
            <p className="text-sm font-semibold text-cyan-400">{year}</p>

            <h3 className="mt-2 text-xl font-bold">{title}</h3>

            <p className="mt-2 text-muted-foreground">{issuer}</p>

            {credentialUrl && (
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-cyan-400 transition hover:text-cyan-300"
                >
                    View Credential →
                </a>
            )}
        </GlassCard>
    );
}