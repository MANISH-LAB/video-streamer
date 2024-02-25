const API_KEY="AIzaSyAyixzZP5LdDwFnuuK_RQHZo9-aCUMnibE";
export const VIDEO_URL=" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key="+API_KEY;
export const COMMENT_URL ="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+API_KEY+"&videoId=";
export const SEARCH_SUGGESTION="https://suggestqueries.google.com/complete/search?client=firefox&q=";
export const SEARCH_VIDEO="https://youtube.googleapis.com/youtube/v3/search?maxResults=50&key=AIzaSyCJOVPTar8v4Dl_qg99yVZSYW_zWdxUHAU&q="
export const GET_VIDEOS_BY_KEYWORD="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key="+API_KEY+"&q=";