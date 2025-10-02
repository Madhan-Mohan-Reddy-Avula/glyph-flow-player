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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-background" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              MONOLITH
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search videos..."
              className="pl-10 bg-secondary/50 border-border/50 focus-visible:border-primary/50"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-secondary/50 border border-border/50 rounded-sm">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onViewModeChange("grid")}
                className={`rounded-none ${
                  viewMode === "grid" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onViewModeChange("list")}
                className={`rounded-none ${
                  viewMode === "list" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="nothing" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
