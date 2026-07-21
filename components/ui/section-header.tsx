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
        <div className="mb-4 max-w-4xl">
            <p className="mb-8 text-md font-bold uppercase tracking-[0.3em] text-cyan-200">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {title}

                {highlight && (
                    <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {highlight}
                    </span>
                )}
            </h2>

            {description && (
                <p className="mt-4 text-lg leading-7 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}