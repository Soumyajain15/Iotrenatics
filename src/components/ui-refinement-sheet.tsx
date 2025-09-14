"use client";

import { useState } from "react";
import { Bot, Loader2, Lightbulb, ShieldCheck, Architecture, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { uiImprovementSuggestions, UIImprovementSuggestionsOutput } from "@/ai/flows/ui-improvement-suggestions";

const SuggestionContent = ({ children }: { children: React.ReactNode }) => (
    <div className="text-sm text-muted-foreground space-y-2 whitespace-pre-wrap">{children}</div>
);

export function UIRefinementSheet() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<UIImprovementSuggestionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const websiteContent = document.documentElement.outerHTML;
      const result = await uiImprovementSuggestions({ websiteContent });
      setSuggestions(result);
    } catch (e) {
      console.error(e);
      setError("Failed to get suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Bot className="h-5 w-5" />
          <span className="hidden sm:inline">UI Refinements</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="font-headline flex items-center gap-2">
            <Bot /> AI-Powered UI Refinements
          </SheetTitle>
          <SheetDescription>
            Let our AI analyze this page for visual layout, accessibility, and information architecture improvements.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Button onClick={handleAnalysis} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze This Page"
            )}
          </Button>
        </div>

        {error && (
            <div className="mt-4 rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                {error}
            </div>
        )}

        {suggestions && (
          <ScrollArea className="mt-4 h-[calc(100vh-250px)]">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full pr-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-base">
                    <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-accent" />
                        Overall Design
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <SuggestionContent>{suggestions.overallDesignSuggestions}</SuggestionContent>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-base">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-accent" />
                        Accessibility
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <SuggestionContent>{suggestions.accessibilitySuggestions}</SuggestionContent>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold text-base">
                    <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-accent" />
                        Layout
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <SuggestionContent>{suggestions.layoutSuggestions}</SuggestionContent>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-semibold text-base">
                    <div className="flex items-center gap-2">
                        <Architecture className="h-5 w-5 text-accent" />
                        Information Architecture
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <SuggestionContent>{suggestions.informationArchitectureSuggestions}</SuggestionContent>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
}
