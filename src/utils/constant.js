
export const buttons = [ "All", "Music", "Web Development", "Computer programming", "News", "Game shows", "Live", "Mixes", "Science fiction", "Television comedy", "Dramedy", "T-Series", "Movie musicals"];

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + import.meta.env.VITE_GOOGLE_API_KEY;