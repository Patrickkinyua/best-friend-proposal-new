import { Heart } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const reasons = [
    {
        title: "Your Kind Heart",
        content: "The way you care for everyone around you and always find a way to make someone's day better is truly inspiring. You have the purest soul I've ever known.",
        icon: <Heart className="w-5 h-5 text-red-500 fill-red-500" />
    },
    {
        title: "Your Unwavering Support",
        content: "No matter what I'm going through, you're always there with the right words (or just a silent hug) to pick me back up. I never feel alone with you by my side.",
        icon: <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
    },
    {
        title: "The Way You Make Me Laugh",
        content: "Even on my darkest days, you know exactly how to trigger that deep belly laugh that makes everything feel okay again. Life is just better when we're laughing together.",
        icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
    },
    {
        title: "Your Beautiful Spirit",
        content: "There's a light you bring into every room. It's not just your smile, but the genuine warmth and energy you carry that makes everyone feel loved and noticed.",
        icon: <Heart className="w-5 h-5 text-red-400 fill-red-400" />
    },
    {
        title: "Our Shared History",
        content: "Every inside joke, every late-night conversation, and every milestone we've shared — they're all treasures to me. I'm so grateful for 'our story'.",
        icon: <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
    }
];

const ReasonsSection = () => {
    return (
        <section className="py-24 px-6 bg-secondary/10 backdrop-blur-md">
            <div className="max-w-2xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Why You're So Special</h2>
                        <p className="text-muted-foreground italic">A few things that make you so incredibly special to me...</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="glass-card rounded-3xl p-6 sm:p-10 border-border/50">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {reasons.map((reason, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-border/20 last:border-0"
                                >
                                    <AccordionTrigger className="hover:no-underline hover:bg-accent/50 rounded-xl px-4 transition-all">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="shrink-0 animate-pulse-soft">
                                                {reason.icon}
                                            </div>
                                            <span className="text-lg font-medium text-foreground">{reason.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-14 text-muted-foreground leading-relaxed text-base pt-2">
                                        {reason.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ReasonsSection;
