const socialData = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Harman8815",
    icon: "github",
    description: "Open source projects and code repositories",
    primaryColor: "#333333",
    secondaryColor: "#24292e",
    stats: {
      repositories: "50+",
      followers: "11",
      contributions: "500+",
      stars: "10+",
    },
    highlights: ["Open Source Contributor", "Active Developer", "Code Quality"],
    category: "Development",
    isVerified: true,
    joinedDate: "2022",
    activity: "Daily commits",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harman88157/",
    icon: "linkedin",
    description: "Professional network and career updates",
    primaryColor: "#0077B5",
    secondaryColor: "#005885",
    stats: {
      connections: "1K+",
      followers: "1.5K+",
      posts: "100+",
      // articles: "25+",
      // endorsements: "100+",
    },
    highlights: ["Full-Stack Developer", "Consistent", "Professional Network"],
    category: "Professional",
    isVerified: true,
    joinedDate: "2022",
    activity: "Weekly posts",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/harman88157",
    icon: "twitter",
    description: "Tech insights, updates, and community engagement",
    primaryColor: "#1DA1F2",
    secondaryColor: "#0d8bd9",
    stats: {
      // followers: "800+",
      // tweets: "1.5K+",
      // likes: "5K+",
      // retweets: "2K+",
    },
    highlights: ["Tech Enthusiast", "Open Source Contributor", "Trend Analyst"],

    category: "Social",
    isVerified: false,
    joinedDate: "2021",
    activity: "Silent follower",

  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/harman88157/",
    icon: "instagram",
    description: "Behind the scenes, lifestyle, and visual content",
    primaryColor: "#E4405F",
    secondaryColor: "#C13584",
    stats: {
      followers: "100+",
      // posts: "200+",
      // stories: "500+",
      // engagement: "8.5%",
    },
    highlights: ["Design Enthusiast", "Meme Explorer", "Follows Creative Communities"],

    category: "Lifestyle",
    isVerified: false,
    joinedDate: "2020",
    activity: "Weekly posts",
  },
  {
    id: 5,
    name: "YouTube",
    url: "https://youtube.com/@harmandeepsingh",
    icon: "youtube",
    description: "Coding tutorials, tech reviews, and educational content",
    primaryColor: "#FF0000",
    secondaryColor: "#CC0000",
    stats: {
      // subscribers: "5K+",
      // videos: "50+",
      // views: "100K+",
      // watchTime: "10K+ hrs",
    },
    highlights: ["Technology Enthusiast", "Project Discovery Lover", "Keeps Up with Creator Trends"],

    category: "Education",
    isVerified: false,
    joinedDate: "2022",
    activity: "Explores tech content",

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
      // members: "500+",
      // messages: "10K+",
      // channels: "15+",
      // events: "25+",
    },
    highlights: ["Community Leader", "Active Moderator", "Tech Discussions"],
    category: "Community",
    isVerified: false,
    joinedDate: "2023",
    activity: "Thoughtful and selective engagement",

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
