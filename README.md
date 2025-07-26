# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

// useEffect(() => {
// const url =
// "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
// const options = {
// method: "GET",
// headers: {
// "x-rapidapi-key": "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
// "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
// },
// };

// const fetchPost = async () => {
// try {
// const response = await fetch(url, options);
// const result = await response.json();
// console.log(result.items);

// setVideos(result.items);
// } catch (error) {
// console.error(error);
// setVideos([]);
// }
// };

// fetchPost();
// }, []);

// function formatDate(string) {
// const index = string.indexOf("T");

// let day = new Date().getDate();
// let month = new Date().getMonth() + 1;
// let year = new Date().getFullYear();

// const dateOfUploading = string.slice(0, index).split("-");
// let yearOfUploading = Number(dateOfUploading[0]);
// let monthOfUploading = Number(dateOfUploading[1]);
// let dayOfUploading = Number(dateOfUploading[2]);

// let yearDifference = year - yearOfUploading;
// let monthDifference = month - monthOfUploading;
// let daysDifference = day - dayOfUploading;

// if (year > yearOfUploading) {
// return yearDifference === 1
// ? `${yearDifference} year ago`
// : `${yearDifference} years ago`;
// }
// if (Number(year) === yearOfUploading && month !== monthOfUploading) {
// return monthDifference === 1
// ? `${monthDifference} month ago`
// : `${monthDifference} months ago`;
// }
// if (
// Number(year) === yearOfUploading &&
// Number(month) === monthOfUploading
// ) {
// if (daysDifference === 0) {
// return "Today";
// }
// if (daysDifference === 1) {
// return "1 day ago";
// }
// if (daysDifference < 7) {
// return `${daysDifference} days ago`;
// }
// if (daysDifference === 7 || (daysDifference > 7 && daysDifference < 14)) {
// return `1 week  ago`;
// }
// if (daysDifference > 14 && daysDifference < 21) {
// return `2 weeks ago`;
// }
// if (daysDifference > 21) {
// return "3 weeks ago";
// }
// }
// }

{/\_ {data?.items?.map((video, index) => (
<a className="link-article" href={`/video/${video.id.videoId}`}>

<Article
                key={index}
                thumbnail={video.snippet.thumbnails.default.url}
                title={video.snippet.title}
                chanel={video.snippet.channelTitle}
                time={formatDate(video.snippet.publishedAt)}
              />
</a>
))} _/}

comments
{/_ <p> comment Id: {comment.id} </p> _/}
{/\_ <p>
{" "}
author chanel url:{" "}
{comment.snippet.topLevelComment.snippet.authorChannelUrl}{" "}

</p> _/}
{/_ <p>
{" "}
published at:{" "}
{comment.snippet.topLevelComment.snippet.publishedAt}{" "}
</p> _/}
////////////////////////////////////////////////////////////////////////////////////
console.log(videoQuery.data);
console.log("comments data", commentsQuery.data);
console.log("chanelId", commentsQuery.data?.items[0].snippet.channelId);

console.log("chanelId", chanelId);
console.log("suggested videos", suggestedQuery.data);
//////////////////////////////////////////////////////////////////////////////////////
{/\_ {data?.items?.map((video, index) => (
<a className="link-article" href={`/video/${video.id.videoId}`}>

<Article
                key={index}
                thumbnail={video.snippet.thumbnails.default.url}
                title={video.snippet.title}
                chanel={video.snippet.channelTitle}
                time={formatDate(video.snippet.publishedAt)}
              />
</a>
))} _/}

<!-- FROM APP.JSX -->

import {
QueryClient,
QueryClientProvider,
useQuery,
} from "@tanstack/react-query";
import Home from "./Home";
