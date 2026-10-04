import birthdayVideo from "../assets/saba_video.mp4"

interface MediaData {
    media: string;
    description: string;
};

export const vid: MediaData = {
    media: birthdayVideo,
    description: "insert description of video here",
};

export const link: MediaData = {
    media: "https://www.roblox.com/games/2609668898/Custom-Duels",
    description: "insert description of link here",
};