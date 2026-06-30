import laylaImg from "../assets/vas/layla.jpg";
import danielleImg from "../assets/vas/danielle.jpg";
import vanilleImg from "../assets/vas/vanille.jpg";
import jessieImg from "../assets/vas/jessie.jpeg";
import pokkinImg from "../assets/vas/pokkin.png";

export interface CastMember {
  slug: string;
  role: string;
  name: string;
  image: ImageMetadata | null;
  bio: string;
  highlightsHtml?: string;
  links: { label: string; url: string }[];
}

// Listed in the same order as the characters page.
export const voiceCast: CastMember[] = [
  {
    slug: "anna-lam",
    role: "Anna Lam",
    name: "Layla Fatima",
    image: laylaImg,
    bio: "With a background in theater and healthcare, Layla has been lending her voice to many projects such as commercials, audio dramas, and more for the last several years.",
    links: [
      { label: "Website", url: "https://laylafatima.com/" },
      { label: "Facebook", url: "https://www.facebook.com/laylafatimavoiceover" },
      { label: "Twitter/X", url: "https://x.com/laylafatimavo" },
      { label: "TikTok", url: "https://www.tiktok.com/@layla_fatima_voiceover" },
    ],
  },
  {
    slug: "susie-swanson",
    role: "Susie Swanson",
    name: "Vanille Velasquez",
    image: vanilleImg,
    bio: "Vanille Velasquez is a Filipino voice over actress based in the Philippines. She started dubbing Tagalog anime, cartoons, and movies on Philippine TV at age 18. Now 27, she has lent her voice to animation, video games, commercials, dubs, and even toys all over the world.",
    highlightsHtml: "Neon (Valorant), Zeri (League of Legends)",
    links: [
      { label: "Website", url: "https://www.vanillevelasquez.com/" },
      { label: "Twitter/X", url: "https://x.com/vanillevela" },
      { label: "TikTok", url: "https://www.tiktok.com/@vanillevela" },
      { label: "Instagram", url: "https://www.instagram.com/vanillevela" },
    ],
  },
  {
    slug: "fedora-mask",
    role: "Fedora Mask",
    name: "Armand Cabral",
    image: null,
    bio: "Lifelong Bay Stater Armand Cabral is no stranger to the spotlight. After earning a Bachelor's in Music Performance, he spent years channeling heart-driven lyrics as the frontman for local rock group Sic Vita. Armand later brought that same vocal versatility to the mic as a voice actor, voicing commercials for Caterpillar Inc., starring in audio dramas like The Strata and The Strange Case of Starship Iris, and commentating esports for Post University's Super Smash Bros. Ultimate division. Now, Armand is thrilled to step into the gaming world, proudly donning his finest fedora, trench coat, and cargo shorts to bring Fedora Mask to life.",
    highlightsHtml:
      "The Strange Case of Starship Iris, The Strata, Caterpillar Inc. commercials",
    links: [{ label: "Instagram", url: "https://www.instagram.com/sicarmand" }],
  },
  {
    slug: "bea-beatrix",
    role: "Bea Beatrix",
    name: "Jessie Rogers",
    image: jessieImg,
    bio: "Jessie Rogers is an amateur VA based in Georgia. She is relatively new to the scene, having only started voice acting in January of 2026. Despite this, she is eager to make her first major voice acting debut in a project of this nature! She has also, without fail, dressed up as Wednesday Addams every Halloween for the past ten years.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/thelivingmythVA" },
      { label: "YouTube", url: "https://www.youtube.com/@thelivingmythVA" },
      { label: "Twitter/X", url: "https://x.com/thelivingmyth1" },
    ],
  },
  {
    slug: "j-woo",
    role: "J-Woo",
    name: "SJ Kim",
    image: null,
    bio: "SJ Kim is a voice actor based in Canada, making his major voice acting debut with EIDOLWARE. New to the scene but eager to make his name in indie animation and games, he's most looking forward to building a welcoming community around his work. Memes and fan songs are WELCOME!",
    links: [],
  },
  {
    slug: "may-melody",
    role: "May Melody",
    name: "Danielle Fletcher",
    image: danielleImg,
    bio: "Danielle Fletcher has always been a chatterbox, coming up with fun voices, characters, and silly songs since she was a young, little tyke. At the ripe age of 11, Danielle had her first stage role and she's never looked back. She honed her craft by studying theatre and directing throughout high school and college. In her time at university, she also learned audio engineering with industry standard programs, which has given her a strong, can-do attitude behind the microphone. Her work has included a plethora of genres and projects, including video games like Ninon the Upside Down Mermaid and ECH8, as well as dubbing credits in Nukitashi and Ren Arisugawa is Actually a Girl. She is also a frequent collaborator with the animation company, Dorkly.",
    highlightsHtml:
      "Nukitashi, Ren Arisugawa is Actually a Girl, Ninon the Upside Down Mermaid, ECH8, Dorkly",
    links: [
      { label: "Website", url: "https://www.daniellefletchervo.com/" },
      { label: "Twitter/X", url: "https://x.com/dfletchervo" },
      { label: "Instagram", url: "https://www.instagram.com/dfletcher.vo/" },
      { label: "BlueSky", url: "https://bsky.app/profile/dfletchervo.bsky.social" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/danielle-fletcher-5151a5168/" },
    ],
  },
  {
    slug: "jared-jimenez",
    role: "Jared Jimenez",
    name: 'Ash "Pokkin" Torres',
    image: pokkinImg,
    bio: 'Ash "Pokkin" Torres is a voice actor with credits across short films and web series.',
    highlightsHtml:
      'Murd in the upcoming short film <a href="https://www.youtube.com/watch?v=d62CUIAXpgI" target="_blank" rel="noopener noreferrer">Bread is Dead</a>, the Admin in the web series <a href="https://www.youtube.com/watch?v=ipa3MvD3cQ8" target="_blank" rel="noopener noreferrer">Adventure Mode</a>, and the Bird in the short film <a href="https://www.youtube.com/watch?v=kMp_V1D6-qA" target="_blank" rel="noopener noreferrer">BirdFace</a>.',
    links: [{ label: "Twitter/X", url: "https://x.com/Pokkin1" }],
  },
];

export const voiceCastBySlug: Record<string, CastMember> = Object.fromEntries(
  voiceCast.map((member) => [member.slug, member]),
);
