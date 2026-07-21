export default function HeroVideo() {
    return (
        <div className="relative h-[460px] w-[720px] overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.20)]">            <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        </div>
    );
}
