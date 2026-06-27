// Geçici mock veri. Backend hazır olduğunda bu dosyanın yerini
// src/api/axios.js üzerinden yapılan gerçek API çağrıları alacak.
// Her component zaten prop bekliyor, sadece veri kaynağı değişecek.

export const mockMemorials = [
  {
    id: 1,
    slug: "ahmet-yilmaz",
    fullName: "Ahmet Yılmaz",
    birthDate: "1940",
    deathDate: "2024",
    coverPhoto: "https://picsum.photos/1400/700?random=11",
    profilePhoto: "https://picsum.photos/300?random=12",
    biography:
      "Ahmet Yılmaz hayatı boyunca ailesine ve çevresine değer veren, çalışkan ve yardımsever bir insandı. 35 yıl boyunca öğretmenlik yaptı, yüzlerce öğrencinin hayatına dokundu. Emekliliğinde bahçesiyle ve torunlarıyla vakit geçirmekten büyük mutluluk duyardı.",
    photos: [
      "https://picsum.photos/500/500?random=1",
      "https://picsum.photos/500/500?random=2",
      "https://picsum.photos/500/500?random=3",
      "https://picsum.photos/500/500?random=4",
      "https://picsum.photos/500/500?random=5",
      "https://picsum.photos/500/500?random=6",
    ],
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  {
    id: 2,
    slug: "fatma-demir",
    fullName: "Fatma Demir",
    birthDate: "1955",
    deathDate: "2023",
    coverPhoto: "https://picsum.photos/1400/700?random=21",
    profilePhoto: "https://picsum.photos/300?random=22",
    biography:
      "Fatma Demir, üç çocuk büyütmüş, mahallesinde herkesin tanıdığı, sevecen bir anneydi. El işleriyle ve yemek yapmayla ünlüydü, kapısı her zaman açıktı.",
    photos: [
      "https://picsum.photos/500/500?random=23",
      "https://picsum.photos/500/500?random=24",
      "https://picsum.photos/500/500?random=25",
    ],
    videos: [],
  },
];

export function getMemorialBySlug(slug) {
  return mockMemorials.find((m) => m.slug === slug) || null;
}
