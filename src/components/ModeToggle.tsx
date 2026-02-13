import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            className="fixed top-6 right-6 z-[999] rounded-full bg-background border-2 border-primary/30 shadow-2xl hover:scale-110 active:scale-95 transition-all p-2.5"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <div className="relative w-6 h-6">
                <Sun className="absolute inset-0 h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                <Moon className="absolute inset-0 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
