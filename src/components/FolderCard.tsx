import { Folder, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FolderCardProps {
  name: string;
  videoCount: number;
  thumbnail?: string;
  onClick?: () => void;
}

export const FolderCard = ({
  name,
  videoCount,
  thumbnail,
  onClick,
}: FolderCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden nothing-card-hover cursor-pointer bg-card border-border/50 active:scale-[0.98] nothing-transition"
      onClick={onClick}
    >
      <div className="p-5 flex items-center gap-4">
        {/* Folder icon or thumbnail - Larger for mobile touch */}
        <div className="flex-shrink-0 w-20 h-20 rounded-sm bg-secondary/50 border border-border flex items-center justify-center nothing-transition group-hover:border-primary/50 group-active:border-primary">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover rounded-sm"
            />
          ) : (
            <Folder className="w-10 h-10 text-muted-foreground group-hover:text-primary nothing-transition" />
          )}
        </div>

        {/* Folder info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-medium truncate mb-1.5">{name}</h3>
          <p className="text-xs text-muted-foreground dot-matrix">
            {videoCount} {videoCount === 1 ? "VIDEO" : "VIDEOS"}
          </p>
        </div>

        {/* Arrow icon */}
        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary nothing-transition flex-shrink-0" />
      </div>
    </Card>
  );
};
