export interface Character {
  name: string;
  slug: string;
  role: string;
  description: string;
  image: string | null;
  type: "protagonist" | "antagonist";
  bio?: string;
  abilities?: string[];
  background?: string;
}

export const characterImageMap: Record<string, string> = {
  "anna-lam": "anna",
  "susie-swanson": "susie",
  "fedora-mask": "fedora-mask",
  "bea-beatrix": "bea",
  "j-woo": "j-woo",
  "may-melody": "may-melody",
  "jared-jimenez": "jared",
};

export const characters: Character[] = [
  // Protagonists
  {
    name: "Anna Lam",
    slug: "anna-lam",
    role: "the Engineer",
    description:
      "When her mentor dies under suspicious circumstances, former AI engineer Anna Lam descends into FedoraCon, a bizarre 24-hour anime convention, searching for answers.",
    image: null,
    type: "protagonist",
    bio: "A former AI engineer, Anna Lam is investigating her mentor's suspicious death. Her only lead is the Failsafe, a device she built that's reacting to something she and her mentor created years ago. The signal traces to FedoraCon, a permanent underground anime convention powered by experimental holographic technology.\n\nStepping into this unfamiliar world of cosplayers, influencers, and convention culture, Anna must navigate bizarre challenges and eccentric personalities to uncover what really happened and what her mentor left behind.",
  },
  {
    name: "Susie Swanson",
    slug: "susie-swanson",
    role: "Shojo Sheriff, Weeb Detective",
    description:
      "Convention enforcer and internal investigator. Cheerful, competent, and looking for an outsider's perspective on FedoraCon's strange happenings. When she sponsors Anna into the convention, she might finally get the help she needs.",
    image: null,
    type: "protagonist",
    bio: "Susie Swanson serves as both a convention enforcer and FedoraCon's internal investigator. A talented professional cosplay maker with a knack for reading people, she can see through FedoraCon's theatrical nonsense better than most. Despite her cheerful demeanor, she's increasingly concerned about strange happenings at the convention that others seem willing to ignore.\n\nWhen she meets Anna, an outsider clearly uninvolved in FedoraCon's usual politics and drama, Susie sees an opportunity. Anna's fresh perspective might be exactly what's needed to help solve longstanding issues Susie can't tackle alone.",
  },
  // Antagonists
  {
    name: "Fedora Mask",
    slug: "fedora-mask",
    role: "Founder of FedoraCon, Crypto-Billionaire, Paladin Level 20, Dungeon Master",
    description:
      "Crypto-billionaire founder of FedoraCon. With his patented Hard-Holo technology and seemingly limitless resources, Fedora Mask is on a mission to make anime a reality and change fandom forever.",
    image: null,
    type: "antagonist",
    bio: "Fedora Mask, a crypto-billionaire, decided to spend his wealth creating the first permanent 24-hour underground anime convention to bring his dreams to reality. Powered by his patented Hard-Holo technology, he envisions a world where anyone can make their fantasies come true.\n\nWith seemingly limitless resources and powerful allies at his side, Fedora Mask strives to make anime a reality. Theatrical and grandiose in everything he does, he works tirelessly on his newest project that promises to change fandom forever.",
  },
  {
    name: "Bea Beatrix",
    slug: "bea-beatrix",
    role: 'Halloween Lifestylist and Influencer, Art "Judge"',
    description:
      "Halloween isn't a holiday for Bea Beatrix, it's a lifestyle. As judge of the Artist Alley, she offers one consistent critique to every artist: could this be spookier? To Bea, the answer is always yes.",
    image: null,
    type: "antagonist",
    bio: "Halloween isn't a holiday for Bea Beatrix, it's a lifestyle. At FedoraCon, she serves as the gatekeeper of the Artist Alley, where she judges submissions and offers critiques to aspiring artists.\n\nA devoted Hallowcore lifestyle influencer, Bea has built her entire existence around spooky aesthetics. She genuinely cannot understand why everyone doesn't share her singular devotion to pumpkins, skeletons, witches, and all things Halloween. Her critiques often boil down to one simple question: could this be spookier? To Bea, the answer is always yes.",
  },
  {
    name: "J-Woo",
    slug: "j-woo",
    role: "Former K-Pop Star, Dance Master",
    description:
      "Once a member of K-Pop group 3NIX, J-Woo walked away from stardom to dedicate himself to a vow of uninterrupted dance.",
    image: null,
    type: "antagonist",
    bio: "Son Jae-woo, known as J-Woo, was once a rising star in the K-Pop group 3NIX. At the height of his fame, he walked away from sold-out stadiums to honor his vow of uninterrupted dance. Since then, he's traveled the world learning from dance masters both human and animal, turning movement itself into meditation.\n\nJ-Woo communicates entirely through dance, with the Woo Crew, his three most loyal fans, translating his movements into words. To J-Woo, dance isn't performance. It's a sacred commitment he's never broken.",
  },
  {
    name: "May Melody",
    slug: "may-melody",
    role: "Kawaii Influencer, Content Creator, Streamer",
    description:
      "Kawaii influencer and streamer sponsored by Kawaii Couture, a Bae Capital Holdings company (we're legally obligated to write this). May Melody runs FedoraCon's Cosplay Contest, turning every moment into content for her massive audience.",
    image: null,
    type: "antagonist",
    bio: 'May Melody is the most well-known kawaii influencer on the planet, sponsored by Kawaii Couture, a Bae Capital Holdings company (we\'re legally obligated to write this). She rose to fame through her bubbly persona, adorable cosplays, and constant stream of content for her massive online following.\n\nAt FedoraCon, May runs the Cosplay Contest at the Kawaii Castle, judging entrants on the accuracy of their cosplay and featuring the best on her streams. Hearts and sparkles follow her everywhere, and she greets everyone as "cuties" while maintaining her carefully crafted kawaii queen image. Behind the cheerful exterior and sponsorship deals, May works to a fault to keep her audience engaged and her brand partners happy.',
  },
  {
    name: "Jared Jimenez",
    slug: "jared-jimenez",
    role: "The Collector",
    description:
      'Heralding himself as the "ultimate" collector, Jared strives to collect rare collectables. On his mind are four sacred Chiibos, vinyl collectable figures, that are rumored to possess ancient druidic power.',
    image: null,
    type: "antagonist",
    bio: "Jared Jimenez is a collector who has dedicated himself to amassing rare Chiibos, vinyl collectible figures that have taken the convention world by storm. At FedoraCon's Exhibition Floor, he manages his meticulously organized collection, cataloging every figure's production run, special variants, and value. His ultimate goal: to become the \"Ultimate\" Collector.\n\nBut Jared's true obsession lies with four sacred Chiibos that he believes were blessed with the magic of ancient druids. While others see mass-produced vinyl collectibles, Jared sees artifacts of immense power. He's convinced that uniting all four will grant their wielder unlimited strength, and he'll stop at nothing to complete his collection.",
  },
];

export const protagonists = characters.filter((c) => c.type === "protagonist");
export const antagonists = characters.filter((c) => c.type === "antagonist");
