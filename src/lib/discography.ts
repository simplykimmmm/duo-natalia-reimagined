export interface Album {
  id: string;
  title: string;
  subtitle: string;
  performers: string;
  label: string;
  spotifyId: string;
  links: {
    spotify?: string;
    apple?: string;
    amazon?: string;
    shop?: string;
  };
}

export const albums: Album[] = [
  {
    id: "grieg",
    title: "Grieg Violin Sonatas",
    subtitle: "Edvard Grieg",
    performers: "Natalia van der Mersch | Natalia Kovalzon",
    label: "Ars Produktion",
    spotifyId: "004mIDGcUyAA1TjiNHVW66",
    links: {
      spotify: "https://open.spotify.com/album/004mIDGcUyAA1TjiNHVW66",
      apple: "https://classical.music.apple.com/us/album/1828878671?l=en-US",
      shop: "https://www.jpc.de/jpcng/classic/detail/-/art/violinsonaten/hnum/12369997",
    },
  },
  {
    id: "kreisler",
    title: "My Kreisler Album",
    subtitle: "Fritz Kreisler",
    performers: "Natalia van der Mersch | Natalia Kovalzon",
    label: "Ars Produktion",
    spotifyId: "7MIKGKGwCxvjW6spnv5JpY",
    links: {
      spotify: "https://open.spotify.com/album/7MIKGKGwCxvjW6spnv5JpY",
      apple: "https://music.apple.com/us/album/my-kreisler-album/1691353858",
      amazon: "https://amazon.fr/music/player/albums/B0F1N5VJBV",
      shop: "https://amzn.eu/d/0d0O994",
    },
  },
  {
    id: "russia",
    title: "Magical Russia",
    subtitle: "Zimbalist, Tschaikowski, Alyabiev, Rubenstein, Glinka, Stravinsky, Kopylov",
    performers: "Duo Natalia",
    label: "Ars Produktion",
    spotifyId: "3Opd4V6Flu7OOGvhARV599",
    links: {
      spotify: "https://open.spotify.com/album/3Opd4V6Flu7OOGvhARV599",
      apple: "https://music.apple.com/us/album/magical-russia/1530280264",
      amazon: "https://amazon.com/music/player/albums/B0DVBD3FJ5",
      shop: "https://a.co/d/cvsv7Jk",
    },
  },
  {
    id: "folia",
    title: "La Folia",
    subtitle: "Bach, Bartók, Corelli, Dvořák, Schubert, Wieniawski, Williams",
    performers: "Natalia van der Mersch | Natalia Kovalzon",
    label: "Ars Produktion",
    spotifyId: "1KD1hLV854AGIYbhRsMgsf",
    links: {
      spotify: "https://open.spotify.com/album/1KD1hLV854AGIYbhRsMgsf",
      apple: "https://music.apple.com/de/album/la-folia/1446040789",
      amazon: "https://music.amazon.fr/albums/B07L6RHBBY",
    },
  },
];
