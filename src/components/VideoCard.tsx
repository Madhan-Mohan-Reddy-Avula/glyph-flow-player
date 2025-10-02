import { Play, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  resolution?: string;
  codec?: string;
  isNew?: boolean;
  progress?: number;
  onClick?: () => void;
}

export const VideoCard = ({
  title,
  thumbnail,
  duration,
  resolution,
  codec,
  isNew,
  progress,
  onClick,
}: VideoCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden nothing-card-hover cursor-pointer bg-card border-border/50 active:scale-[0.98] nothing-transition"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-nothing-gray-dark touch-manipulation">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover nothing-transition group-hover:scale-105"
        />
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 nothing-transition flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
            <Play className="w-8 h-8 text-primary fill-primary ml-1" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-xs dot-matrix">
          {duration}
        </div>

        {/* Progress bar */}
        {progress !== undefined && progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
            <div
              className="h-full bg-accent nothing-transition"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm md:text-base font-medium line-clamp-2 flex-1 leading-snug">{title}</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 flex-shrink-0 md:opacity-0 md:group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {isNew && <Badge variant="new">NEW</Badge>}
          {progress !== undefined && progress > 0 && (
            <Badge variant="resume">{progress}% Watched</Badge>
          )}
          {resolution && (
            <span className="text-xs text-muted-foreground dot-matrix">
              {resolution}
            </span>
          )}
          {codec && (
            <span className="text-xs text-muted-foreground">• {codec}</span>
          )}
        </div>
      </div>
    </Card>
  );
};
