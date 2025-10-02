import { Search, Settings, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const Header = ({ viewMode, onViewModeChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo - Optimized for mobile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-background" />
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight">
              MONOLITH
            </h1>
          </div>

          {/* Actions - Mobile optimized touch targets */}
          <div className="flex items-center gap-2">
            <Button
              variant="nothing"
              size="icon"
              className="h-10 w-10"
            >
              <Search className="w-5 h-5" />
            </Button>
            <div className="flex items-center bg-secondary/50 border border-border/50 rounded-sm">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onViewModeChange("grid")}
                className={`rounded-none h-10 w-10 ${
                  viewMode === "grid" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <Grid className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onViewModeChange("list")}
                className={`rounded-none h-10 w-10 ${
                  viewMode === "list" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
            <Button variant="nothing" size="icon" className="h-10 w-10">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
