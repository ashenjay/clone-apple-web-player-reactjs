export interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 2,
    title: "Forest Dreams",
    artist: "Echos",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&auto=format&fit=crop&q=80",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3"
  },
  {
    id: 3,
    title: "Midnight Wave",
    artist: "Luna Shadows",
    cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&auto=format&fit=crop&q=80",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
  }
];