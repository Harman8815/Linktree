const socialData = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    description: "Open source projects and code repositories",
    primaryColor: "#333333",
    secondaryColor: "#24292e",
    stats: {
      repositories: "50+",
      followers: "1.2K",
      contributions: "2.5K+",
      stars: "500+",
    },
    highlights: ["Open Source Contributor", "Active Developer", "Code Quality"],
    category: "Development",
    isVerified: true,
    joinedDate: "2020",
    activity: "Daily commits",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    description: "Professional network and career updates",
    primaryColor: "#0077B5",
    secondaryColor: "#005885",
    stats: {
      connections: "2.5K+",
      posts: "150+",
      articles: "25+",
      endorsements: "100+",
    },
    highlights: ["Industry Expert", "Thought Leader", "Professional Network"],
    category: "Professional",
    isVerified: true,
    joinedDate: "2019",
    activity: "Weekly posts",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
    description: "Tech insights, updates, and community engagement",
    primaryColor: "#1DA1F2",
    secondaryColor: "#0d8bd9",
    stats: {
      followers: "800+",
      tweets: "1.5K+",
      likes: "5K+",
      retweets: "2K+",
    },
    highlights: ["Tech Enthusiast", "Community Builder", "Content Creator"],
    category: "Social",
    isVerified: false,
    joinedDate: "2021",
    activity: "Daily tweets",
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "instagram",
    description: "Behind the scenes, lifestyle, and visual content",
    primaryColor: "#E4405F",
    secondaryColor: "#C13584",
    stats: {
      followers: "1K+",
      posts: "200+",
      stories: "500+",
      engagement: "8.5%",
    },
    highlights: ["Visual Storyteller", "Lifestyle Content", "Creative Posts"],
    category: "Lifestyle",
    isVerified: false,
    joinedDate: "2020",
    activity: "Weekly posts",
  },
  {
    id: 5,
    name: "YouTube",
    url: "https://youtube.com/@yourusername",
    icon: "youtube",
    description: "Coding tutorials, tech reviews, and educational content",
    primaryColor: "#FF0000",
    secondaryColor: "#CC0000",
    stats: {
      subscribers: "5K+",
      videos: "50+",
      views: "100K+",
      watchTime: "10K+ hrs",
    },
    highlights: ["Content Creator", "Tech Educator", "Tutorial Master"],
    category: "Education",
    isVerified: false,
    joinedDate: "2022",
    activity: "Bi-weekly uploads",
  },
  {
    id: 6,
    name: "Discord",
    url: "https://discord.gg/yourinvite",
    icon: "discord",
    description: "Community discussions and real-time collaboration",
    primaryColor: "#5865F2",
    secondaryColor: "#4752C4",
    stats: {
      members: "500+",
      messages: "10K+",
      channels: "15+",
      events: "25+",
    },
    highlights: ["Community Leader", "Active Moderator", "Tech Discussions"],
    category: "Community",
    isVerified: false,
    joinedDate: "2021",
    activity: "Daily active",
  },
]

export default socialData

// Social statistics
export const socialStats = {
  totalPlatforms: socialData.length,
  totalFollowers: socialData.reduce((sum, platform) => {
    const followers =
      platform.stats.followers ||
      platform.stats.subscribers ||
      platform.stats.connections ||
      platform.stats.members ||
      "0"
    return sum + (Number.parseInt(followers.replace(/[^\d]/g, "")) || 0)
  }, 0),
  verifiedAccounts: socialData.filter((platform) => platform.isVerified).length,
  categories: [...new Set(socialData.map((platform) => platform.category))].length,
  totalEngagement: socialData.reduce((sum, platform) => {
    const engagement =
      platform.stats.likes || platform.stats.posts || platform.stats.contributions || platform.stats.messages || "0"
    return sum + (Number.parseInt(engagement.replace(/[^\d]/g, "")) || 0)
  }, 0),
}
