import { useState } from "react";
import { Header } from "@/components/Header";
import { FolderCard } from "@/components/FolderCard";
import { VideoCard } from "@/components/VideoCard";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for folders
  const folders = [
    { id: 1, name: "Downloads", videoCount: 24, thumbnail: videoThumb1 },
    { id: 2, name: "Movies", videoCount: 156 },
    { id: 3, name: "Series", videoCount: 89 },
    { id: 4, name: "Documentaries", videoCount: 42 },
  ];

  // Mock data for recent videos
  const recentVideos = [
    {
      id: 1,
      title: "The Art of Minimalism",
      thumbnail: videoThumb1,
      duration: "24:16",
      resolution: "4K",
      codec: "HEVC",
      isNew: true,
      progress: 0,
    },
    {
      id: 2,
      title: "Nothing Phone Design Philosophy",
      thumbnail: videoThumb2,
      duration: "18:42",
      resolution: "1080p",
      codec: "H.264",
      isNew: false,
      progress: 47,
    },
    {
      id: 3,
      title: "Modern Architecture Documentary",
      thumbnail: videoThumb3,
      duration: "52:08",
      resolution: "4K",
      codec: "AV1",
      isNew: false,
      progress: 23,
    },
    {
      id: 4,
      title: "Geometric Abstractions",
      thumbnail: videoThumb1,
      duration: "12:34",
      resolution: "1080p",
      codec: "H.265",
      isNew: true,
      progress: 0,
    },
    {
      id: 5,
      title: "Tech Minimalism Showcase",
      thumbnail: videoThumb2,
      duration: "31:45",
      resolution: "4K",
      codec: "HEVC",
      isNew: false,
      progress: 78,
    },
    {
      id: 6,
      title: "Black & White Cinema",
      thumbnail: videoThumb3,
      duration: "1:42:16",
      resolution: "1080p",
      codec: "H.264",
      isNew: false,
      progress: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header viewMode={viewMode} onViewModeChange={setViewMode} />

      <main className="px-4 py-6 md:py-8 space-y-8 md:space-y-12 max-w-7xl mx-auto">
        {/* Folders Section */}
        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Folders</h2>
            <span className="text-xs md:text-sm text-muted-foreground dot-matrix">
              {folders.length} FOLDERS
            </span>
          </div>
          <div
            className={`grid gap-3 md:gap-4 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {folders.map((folder) => (
              <FolderCard
                key={folder.id}
                name={folder.name}
                videoCount={folder.videoCount}
                thumbnail={folder.thumbnail}
                onClick={() => console.log("Open folder:", folder.name)}
              />
            ))}
          </div>
        </section>

        {/* Recent Videos Section */}
        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Recent</h2>
            <span className="text-xs md:text-sm text-muted-foreground dot-matrix">
              {recentVideos.length} VIDEOS
            </span>
          </div>
          <div
            className={`grid gap-3 md:gap-4 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {recentVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                resolution={video.resolution}
                codec={video.codec}
                isNew={video.isNew}
                progress={video.progress}
                onClick={() => console.log("Play video:", video.title)}
              />
            ))}
          </div>
        </section>

        {/* Stats footer */}
        <div className="pt-6 md:pt-8 pb-4 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="dot-matrix">STORAGE:</span>
              <span className="text-foreground">256.8 GB</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="dot-matrix">VIDEOS:</span>
              <span className="text-foreground">311</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="dot-matrix">FOLDERS:</span>
              <span className="text-foreground">4</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
