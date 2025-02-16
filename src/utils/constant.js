
export const buttons = [ "All", "Music", "Web Development", "Computer programming", "News", "Game shows", "Live", "Mixes", "Science fiction", "Television comedy", "Dramedy", "T-Series", "Movie musicals"];

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";