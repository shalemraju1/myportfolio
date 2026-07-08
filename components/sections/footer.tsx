import { siteConfig } from "@/constants/site";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
                <p>
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-cyan-400"
                    >
                        GitHub
                    </a>

                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-cyan-400"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}