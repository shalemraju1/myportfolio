import { GlassCard } from "@/components/ui/glass-card";

interface ContactCardProps {
    title: string;
    value: string;
    href: string;
}

export default function ContactCard({
    title,
    value,
    href,
}: ContactCardProps) {
    return (
        <GlassCard
            interactive
            glowColor="blue"
            glowIntensity="medium"
            className="p-6"
        >
            <p className="text-sm font-semibold text-cyan-400">
                {title}
            </p>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block break-all text-lg font-semibold transition hover:text-cyan-300"
            >
                {value}
            </a>
        </GlassCard>
    );
}