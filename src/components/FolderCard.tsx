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
      className="group relative overflow-hidden nothing-card-hover cursor-pointer bg-card border-border/50"
      onClick={onClick}
    >
      <div className="p-4 flex items-center gap-4">
        {/* Folder icon or thumbnail */}
        <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-secondary/50 border border-border flex items-center justify-center nothing-transition group-hover:border-primary/50">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover rounded-sm"
            />
          ) : (
            <Folder className="w-8 h-8 text-muted-foreground group-hover:text-primary nothing-transition" />
          )}
        </div>

        {/* Folder info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium truncate mb-1">{name}</h3>
          <p className="text-xs text-muted-foreground dot-matrix">
            {videoCount} {videoCount === 1 ? "VIDEO" : "VIDEOS"}
          </p>
        </div>

        {/* Arrow icon */}
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary nothing-transition flex-shrink-0" />
      </div>
    </Card>
  );
};
