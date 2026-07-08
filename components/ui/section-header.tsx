interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
}

export default function SectionHeader({
    eyebrow,
    title,
    highlight,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {eyebrow}
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                {title}

                {highlight && (
                    <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {highlight}
                    </span>
                )}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}