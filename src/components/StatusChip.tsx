import { cn } from "@/lib/utils";

const StatusChip = () => {
    return (
        <div className="fixed top-8 left-8 z-[100] animate-fade-up">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-primary/20 transition-all cursor-default select-none animate-diagonal-swing">
                <span className="relative flex h-2 w-2">
                    <span className="animate-dot-glow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground/80 tracking-widest uppercase">
                    heyy beautiful — you are absolutely glowing today ✨
                </span>
            </div>
        </div>
    );
};

export default StatusChip;
