import { useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import Videos from "../Videos";
import Comments from "../Comments";

function Video(props) {
  const params = useParams();

  const videoQuery = useQuery({
    queryKey: ["videos", params.videoId],
    queryFn: () => renderVideo(params.videoId),
  });

  const commentsQuery = useQuery({
    queryKey: ["comments", params.videoId],
    queryFn: () => renderComments(params.videoId),
  });

  const chanelId = commentsQuery.data?.items[0].snippet.channelId;
  const suggestedQuery = useQuery({
    queryKey: ["suggested", chanelId],
    queryFn: () => renderSuggested(chanelId),
  });

  return (
    <div className="clicked-video-container">
      <div className="video-and-comments">
        {videoQuery.isPending && <h1>Loading...</h1>}

        {videoQuery.data && (
          <div className="video-display">
            <YouTube
              videoId={params.videoId}
              opts={{ height: "600px", width: "1000px" }}
            />

            <h1> {videoQuery.data.items[0].snippet.title} </h1>

            <div className="video-display-info">
              <p className="views">
                {Number(
                  videoQuery.data.items[0].statistics.viewCount
                ).toLocaleString("en-US")}
                views
              </p>

              <p>
                <ion-icon name="thumbs-up-outline"></ion-icon>{" "}
                {videoQuery.data.items[0].statistics.likeCount}{" "}
              </p>
              <ion-icon name="thumbs-down-outline"></ion-icon>
              <p>
                <ion-icon name="share-social-outline"></ion-icon>&nbsp;SHARE
              </p>

              <p>
                <ion-icon name="download-outline"></ion-icon>&nbsp;Download
              </p>
            </div>
          </div>
        )}

        {commentsQuery.isPending && <h1>Loading...</h1>}
        <div className="comments-display">
          <Comments data={commentsQuery.data} />
        </div>
      </div>

      {suggestedQuery.isPending && <h1>Loading...</h1>}
      <div className="suggested-display">
        <Videos data={suggestedQuery.data} />
      </div>
    </div>
  );
}

const renderVideo = async (id) => {
  // const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
  //     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // const response = await fetch(url, options);
  // return await response.json();
  const response = {
    kind: "youtube#videoListResponse",
    items: [
      {
        kind: "youtube#video",
        id: "16K8dbTZBZQ",
        snippet: {
          publishedAt: "2025-07-14T23:17:35Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "8 year old picks our NEW FAMILY CAR?!?😳👀 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          categoryId: "22",
          liveBroadcastContent: "none",
          localized: {
            title: "8 year old picks our NEW FAMILY CAR?!?😳👀 #shorts #family",
            description: "",
          },
        },
        contentDetails: {
          duration: "PT36S",
          dimension: "2d",
          definition: "hd",
          caption: "false",
          licensedContent: true,
          contentRating: {},
          projection: "rectangular",
        },
        statistics: {
          viewCount: "188177",
          likeCount: "5913",
          favoriteCount: "0",
          commentCount: "32",
        },
      },
    ],
    pageInfo: { totalResults: 1, resultsPerPage: 1 },
  };
  return response;
};

const renderComments = async (id) => {
  // const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
  //     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // const response = await fetch(commentsUrl, options);
  // return await response.json();
  const response = {
    kind: "youtube#commentThreadListResponse",
    pageInfo: { totalResults: 25, resultsPerPage: 100 },
    items: [
      {
        kind: "youtube#commentThread",
        id: "UgxuKpEu8SbzoORyiPB4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxuKpEu8SbzoORyiPB4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "I love Kia Tellurides we have had it for 4 years now and it is still in shape. And it’s the best car my my family has had, and I like how it has room to fit all your friends and then the rest of your family members.",
              textOriginal:
                "I love Kia Tellurides we have had it for 4 years now and it is still in shape. And it’s the best car my my family has had, and I like how it has room to fit all your friends and then the rest of your family members.",
              authorDisplayName: "@cortneybedel8785",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_mJ-GmxYrrgngIIzy-FCElfnXtguKxOakSok7FVOCY=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@cortneybedel8785",
              authorChannelId: { value: "UCVmibFbb-TGhURxvc37sraQ" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-19T14:10:11Z",
              updatedAt: "2025-07-19T14:10:11Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "Ugz4vBataVuBmjHKX8J4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "Ugz4vBataVuBmjHKX8J4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "What are you guys getting I couldn’t see the paper",
              textOriginal:
                "What are you guys getting I couldn’t see the paper",
              authorDisplayName: "@LaurenGallagher-e1t",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_mMCFGLpx-oVhpUD-5nWuGkQGaSnhc77pZDhv7mEa7cxk6UAAgzralettYUi9Lid9Cr3w=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@LaurenGallagher-e1t",
              authorChannelId: { value: "UCoilGvpJZipJlqiU0LBOu1w" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-19T12:37:32Z",
              updatedAt: "2025-07-19T12:37:32Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgxOSZ5zVlOipNQtwFB4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxOSZ5zVlOipNQtwFB4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "The carnival is like the telluride but bigger (which is better)- but with a stupid name haha",
              textOriginal:
                "The carnival is like the telluride but bigger (which is better)- but with a stupid name haha",
              authorDisplayName: "@mandymo.5571",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/dr2s2Hd3wRzDeDB4wmGj2N5NbUzafupaIcgMJm7keRMVGgN4FIdpvd3LJ6MhsL7EupLStMKtKl4=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@mandymo.5571",
              authorChannelId: { value: "UCWSOhUIKWJBGSzSe4REKpDQ" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-19T09:03:33Z",
              updatedAt: "2025-07-19T09:03:33Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "Ugyy2DgPTrIIt7SqCON4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "Ugyy2DgPTrIIt7SqCON4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "I drove a Kia Telluride when I was an au pair in the usa. Loved that car! 😍",
              textOriginal:
                "I drove a Kia Telluride when I was an au pair in the usa. Loved that car! 😍",
              authorDisplayName: "@Ambertje_engel",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_nDF-SmkanHXPCiqjdNUCBJbzEYyOIz5FrRrJbA5-uyHHGJ=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Ambertje_engel",
              authorChannelId: { value: "UCsxTiMwy26pRaU_AUOQiw1Q" },
              canRate: true,
              viewerRating: "none",
              likeCount: 15,
              publishedAt: "2025-07-17T19:35:19Z",
              updatedAt: "2025-07-17T19:35:31Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgymZ66p6T8fmVZPnFJ4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgymZ66p6T8fmVZPnFJ4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "You mean your kids are buying a new family car. The only reason people watch this crap are for your kids. You know the dangers of exploiting your child, yet you ignore it and still heavily exploit them..",
              textOriginal:
                "You mean your kids are buying a new family car. The only reason people watch this crap are for your kids. You know the dangers of exploiting your child, yet you ignore it and still heavily exploit them..",
              authorDisplayName: "@JLJ3110",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/z8b4V-dM2TRK1Lx0A7u26x6mxhcSpRZKGu7C7Z2gCyT_BysYPUq10cOydJ782dDBD0qD4YEkYg=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@JLJ3110",
              authorChannelId: { value: "UCyQNImDUjPdbqwz4DiUlsqg" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-17T00:53:49Z",
              updatedAt: "2025-07-17T00:53:49Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "Ugyqpeoc7qQoXeaQH1x4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "Ugyqpeoc7qQoXeaQH1x4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Grace always has the choice 🎉❤",
              textOriginal: "Grace always has the choice 🎉❤",
              authorDisplayName: "@-0ctupus",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/sshkz7vfCPybojFS9kWNLLvgYbi07wuEohvHDjv7ycDCIWyacdfxQ5fvsjFvw3-5TqiHRNLr0g=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@-0ctupus",
              authorChannelId: { value: "UCPgB5Dkst1bKjjS_qdRn1ow" },
              canRate: true,
              viewerRating: "none",
              likeCount: 1,
              publishedAt: "2025-07-16T02:58:56Z",
              updatedAt: "2025-07-16T02:58:56Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgyaXqyatk5ay3mZEph4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgyaXqyatk5ay3mZEph4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "Nice! Available funds usually decide for most of us. Well, most of us that pay cash and live within our ACTUAL means anyway. So nice to not have to worry about extra loans &amp; crazy interest rates, ngl. Even when that means saving up for a year or two and making do with what we already have. But not everyone has the benefit and blessing of financial literacy, I guess 🤷🏻‍♀️",
              textOriginal:
                "Nice! Available funds usually decide for most of us. Well, most of us that pay cash and live within our ACTUAL means anyway. So nice to not have to worry about extra loans & crazy interest rates, ngl. Even when that means saving up for a year or two and making do with what we already have. But not everyone has the benefit and blessing of financial literacy, I guess 🤷🏻‍♀️",
              authorDisplayName: "@376alexisb",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/XVR3-5vYEZR2PQt5-UjGFyEzCIqlyId2oczL7yhR0BILd7Xo6tAPRfrzPDj-gjMGKzIuILnN=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@376alexisb",
              authorChannelId: { value: "UCkEtuAuoJN-YDg4_vo2m23A" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T20:38:47Z",
              updatedAt: "2025-07-15T20:38:47Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgxDUImy78WVzpVq_st4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxDUImy78WVzpVq_st4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Lexus was such a good choice tho 😭",
              textOriginal: "Lexus was such a good choice tho 😭",
              authorDisplayName: "@jackyramirez7900",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/GhkXmEXcpbqKVoT0XfOin2lZToHuqp8rh5SYEGOnp-BvTmtbo_fbYzFTEoLQ6yg3e3B7GWfFVg=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@jackyramirez7900",
              authorChannelId: { value: "UCdpCk-ItA09tDSdHB0RO1TA" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T15:33:43Z",
              updatedAt: "2025-07-15T15:33:43Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgxMECqmAXpYOLbYmCx4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxMECqmAXpYOLbYmCx4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "Me and my family have a kia telluride and I literally love it there’s so much space and it’s just awesome",
              textOriginal:
                "Me and my family have a kia telluride and I literally love it there’s so much space and it’s just awesome",
              authorDisplayName: "@AliyahBean2012",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/tFaw3dj6yTtn5rl7r43Hf28uwnJ_wp7j8CyuQLhS_0DNgGxs4orSR0cBR0QiNQncuH9czV0zUg=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@AliyahBean2012",
              authorChannelId: { value: "UCC3LelrhFaFXOXko1UdTPug" },
              canRate: true,
              viewerRating: "none",
              likeCount: 25,
              publishedAt: "2025-07-15T15:33:15Z",
              updatedAt: "2025-07-15T15:33:34Z",
            },
          },
          canReply: true,
          totalReplyCount: 1,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgzVSNl9EZL9X1ANEDB4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgzVSNl9EZL9X1ANEDB4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Kia Telluride are great cars!",
              textOriginal: "Kia Telluride are great cars!",
              authorDisplayName: "@khgshorts7369",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_lstB3YH641mvD7c0F5CsIK1VohS5sGjDHznzqAxeFzDrKoh35mwiEQPb1tQwNdxYWaWA=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@khgshorts7369",
              authorChannelId: { value: "UCNWx0XKTZA5mXyIKBG3gMHA" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T14:01:04Z",
              updatedAt: "2025-07-15T14:01:04Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "Ugzb4DdYLYEHc5PtCSZ4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "Ugzb4DdYLYEHc5PtCSZ4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "So cute!!!",
              textOriginal: "So cute!!!",
              authorDisplayName: "@VivienneThome",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/hKpn6EacWbNK-c8TY122Vl66bMVtiU07FR_zIYc7OPHPYiQ-g1u4Xl5EVTKBR42MiYwBUoml=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@VivienneThome",
              authorChannelId: { value: "UCcrr8cmv4uvbeGxymf0moEg" },
              canRate: true,
              viewerRating: "none",
              likeCount: 1,
              publishedAt: "2025-07-15T04:15:55Z",
              updatedAt: "2025-07-15T04:15:55Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgySQ3tYH3YFMo_kSqV4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgySQ3tYH3YFMo_kSqV4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "What car was it",
              textOriginal: "What car was it",
              authorDisplayName: "@hadassah1269",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ywiscisLT6pGGrz6w8e8WShxal5ZZE5eS6vngvKvTDOzM7FNVvy3W0LjTxiF_eq9qXvzRuxVSA=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@hadassah1269",
              authorChannelId: { value: "UC-_oqjJx9S4OXhJivWGz3kQ" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-15T00:47:41Z",
              updatedAt: "2025-07-15T00:47:41Z",
            },
          },
          canReply: true,
          totalReplyCount: 1,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgyhBGxP-oAjZGQNNtp4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgyhBGxP-oAjZGQNNtp4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Yay!",
              textOriginal: "Yay!",
              authorDisplayName: "@StellaDees",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_mhpdt52gf-ewuMICMSpf58jqqKXetktX-rAgmJkXZktJrVu4vDkBYngfAtIfmb6uJy3w=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@StellaDees",
              authorChannelId: { value: "UCnLGVvH7YpzqmPJrZn5Qang" },
              canRate: true,
              viewerRating: "none",
              likeCount: 1,
              publishedAt: "2025-07-15T00:45:28Z",
              updatedAt: "2025-07-15T00:45:28Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgwbBYR2z0LuAoWgP-B4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgwbBYR2z0LuAoWgP-B4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "What’s the I can’t see it",
              textOriginal: "What’s the I can’t see it",
              authorDisplayName: "@laceybyrne251",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_nbOUAr0DSwhLxiizEugjSv8iKSQDExD2jdLJLEQo6XILh7G8ygJrMPXfBhVWCr4m6HlQ=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@laceybyrne251",
              authorChannelId: { value: "UC5cVD7g_Xudi9rNovqw1GVw" },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-07-15T00:44:56Z",
              updatedAt: "2025-07-15T00:44:56Z",
            },
          },
          canReply: true,
          totalReplyCount: 1,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgyQxvcVmu8MAhtLrYZ4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgyQxvcVmu8MAhtLrYZ4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Cuteeeeee",
              textOriginal: "Cuteeeeee",
              authorDisplayName: "@Sofia-u6b3j",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/mZ31cS7E99U00ogS6hG8_G4UWROS_ai_7_lSAkP2cpWq1N7cI3HeARmiB7NLUC-TsfDlUJ_zSg=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Sofia-u6b3j",
              authorChannelId: { value: "UCJfUnJJVNix4Is-eHxGWdjQ" },
              canRate: true,
              viewerRating: "none",
              likeCount: 1,
              publishedAt: "2025-07-15T00:39:08Z",
              updatedAt: "2025-07-15T00:39:08Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgxO2Eh_RfYmSrPWRv14AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxO2Eh_RfYmSrPWRv14AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "What happened to that Meghan trainer video she was literally supposed to make months ago 😂😂",
              textOriginal:
                "What happened to that Meghan trainer video she was literally supposed to make months ago 😂😂",
              authorDisplayName: "@BRIX0X1",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/0cLOsBYFGOCtn_PyIgQ1juLW8799zxZW_w04rWPWC76MDS5bLBdYMXl4yqI6dDFniqrB7dM4hQ=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@BRIX0X1",
              authorChannelId: { value: "UCVGHAYfLjBsiFd8Ty6kIf-g" },
              canRate: true,
              viewerRating: "none",
              likeCount: 44,
              publishedAt: "2025-07-15T00:30:45Z",
              updatedAt: "2025-07-15T00:30:45Z",
            },
          },
          canReply: true,
          totalReplyCount: 2,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgwbIE8E6gQHuT0BlOB4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgwbIE8E6gQHuT0BlOB4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Haha yay! What an exciting thing!!",
              textOriginal: "Haha yay! What an exciting thing!!",
              authorDisplayName: "@ryds123",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/-8_oLiqguQ2Efch4f44SUB5TZbuYv8nZUES9UovJkjTnG4OoHyIlSbtxaG-Jlfz4v0ciT4aQ4KE=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@ryds123",
              authorChannelId: { value: "UCRMwxcVXzoBXf08nTT1NdBQ" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T00:17:52Z",
              updatedAt: "2025-07-15T00:17:52Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgwMMO8CMcAYNmut0TV4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgwMMO8CMcAYNmut0TV4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Why would you let a child choose your car?",
              textOriginal: "Why would you let a child choose your car?",
              authorDisplayName: "@Sandra.753",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_ksjIPIkEUWFQVtPaQVPVSVARuKNLGv4dDxivmHnYY=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Sandra.753",
              authorChannelId: { value: "UCrFccNwip9z1cdejAusK5hw" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T00:15:44Z",
              updatedAt: "2025-07-15T00:15:44Z",
            },
          },
          canReply: true,
          totalReplyCount: 1,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgwaNDHpZCzxPChm64t4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgwaNDHpZCzxPChm64t4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "so cuteeee",
              textOriginal: "so cuteeee",
              authorDisplayName: "@AbbieCarpenter-e7h",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/NZdkGbAIEyWUz0tBk-3VA4OoocMAh4nzDi6x06HmtThLDqciu0uN0SApgrDVlwgY1s3iz0f0kw=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@AbbieCarpenter-e7h",
              authorChannelId: { value: "UCMg0ZujTq0fyn7NqJg7OfBA" },
              canRate: true,
              viewerRating: "none",
              likeCount: 2,
              publishedAt: "2025-07-15T00:07:50Z",
              updatedAt: "2025-07-15T00:07:50Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgyfrSl0qWJq8PliSWd4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgyfrSl0qWJq8PliSWd4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "I love you guys. It was funny how you wanted your car then it got picked to not be the car you picked first",
              textOriginal:
                "I love you guys. It was funny how you wanted your car then it got picked to not be the car you picked first",
              authorDisplayName: "@Brynna-i9h",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_nYQvAmUyrYtkF2soc7ppz6IxaER9_xGSrVZLHiG4eUGMeY1Tl-U5nqn34h_UtOew4GdA=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Brynna-i9h",
              authorChannelId: { value: "UCzw7vDKPbY9XlHWnXQkHMDg" },
              canRate: true,
              viewerRating: "none",
              likeCount: 22,
              publishedAt: "2025-07-14T23:27:01Z",
              updatedAt: "2025-07-14T23:27:01Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "Ugwb9FaiC_kVdDXfWjN4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "Ugwb9FaiC_kVdDXfWjN4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "This is honestly such a cute and fun way to incorporate Grace in the car! Have fun!!❤",
              textOriginal:
                "This is honestly such a cute and fun way to incorporate Grace in the car! Have fun!!❤",
              authorDisplayName: "@ItsJustSugarCookie",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/3H4muC4US6EedAyqpHRZYSkyqovWP7gJnGAGCm3GEhGTJ_RoUghTDx2KapFY3P_CGW6ZL707=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@ItsJustSugarCookie",
              authorChannelId: { value: "UCyB6daWrtFBTccSuPF-5JIg" },
              canRate: true,
              viewerRating: "none",
              likeCount: 90,
              publishedAt: "2025-07-14T23:26:39Z",
              updatedAt: "2025-07-14T23:26:39Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgwqmkQY1p8NMA6K8o94AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgwqmkQY1p8NMA6K8o94AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay:
                "2nd!! Can I please get a pin!! Ilysm<br>I’ve been watching you since before Emma was born!! You are an awesome mom!! Keep up the good work and good bless!!❤❤",
              textOriginal:
                "2nd!! Can I please get a pin!! Ilysm\nI’ve been watching you since before Emma was born!! You are an awesome mom!! Keep up the good work and good bless!!❤❤",
              authorDisplayName: "@Payton_14_b",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_mudJBOukNXf6EwU9s9qkSmrQeXVMInDb6nJZWhI4Ee75BBlCMMDWOLtD2fTJpyUniYrg=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Payton_14_b",
              authorChannelId: { value: "UC5IyPYCQsHidkOzPhlMBDGA" },
              canRate: true,
              viewerRating: "none",
              likeCount: 6,
              publishedAt: "2025-07-14T23:24:13Z",
              updatedAt: "2025-07-14T23:24:13Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgxbicKECrh73Q_qf-p4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgxbicKECrh73Q_qf-p4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "Omg love yallll",
              textOriginal: "Omg love yallll",
              authorDisplayName: "@Atozkids1111",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/1LzStGfllR_X3GjRTsFGtFmjYp7ALzPFGZ8XDVxaM8nhjnC7gYVAAkdEOfebTiTazH3xJ56W=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Atozkids1111",
              authorChannelId: { value: "UCTZDHAHlPqy8s5yz8j26vcw" },
              canRate: true,
              viewerRating: "none",
              likeCount: 10,
              publishedAt: "2025-07-14T23:23:36Z",
              updatedAt: "2025-07-14T23:23:36Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgyC9lloYu8GzuDyl5B4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgyC9lloYu8GzuDyl5B4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "So what car are you getting?",
              textOriginal: "So what car are you getting?",
              authorDisplayName: "@ThatDogSugar",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/2mmaXQ22cZnQ9KkzCw8CEmco7xiv9Hd_682LVPM9NR1lfQqQWdmC_j0AK8VokFwja9sz6tTF-Q=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@ThatDogSugar",
              authorChannelId: { value: "UCY9cV9aQ1ngE--4MDlHt5gA" },
              canRate: true,
              viewerRating: "none",
              likeCount: 15,
              publishedAt: "2025-07-14T23:22:25Z",
              updatedAt: "2025-07-14T23:22:25Z",
            },
          },
          canReply: true,
          totalReplyCount: 1,
          isPublic: true,
        },
      },
      {
        kind: "youtube#commentThread",
        id: "UgzSqKkY1tPsJ4By-rx4AaABAg",
        snippet: {
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          videoId: "16K8dbTZBZQ",
          topLevelComment: {
            kind: "youtube#comment",
            id: "UgzSqKkY1tPsJ4By-rx4AaABAg",
            snippet: {
              channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
              videoId: "16K8dbTZBZQ",
              textDisplay: "I’m so early ahhhh omg",
              textOriginal: "I’m so early ahhhh omg",
              authorDisplayName: "@Laurenbeezu",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/gmXZ8mllcrrLA47p8dMD0ro2QBl96VFiqp13JRy5eYpQDqdJ0QsOrD36_YGen7X9Ek7P4m9qbw=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@Laurenbeezu",
              authorChannelId: { value: "UCXa-9AKW_ww2-hNaJOATG-g" },
              canRate: true,
              viewerRating: "none",
              likeCount: 4,
              publishedAt: "2025-07-14T23:22:08Z",
              updatedAt: "2025-07-14T23:22:08Z",
            },
          },
          canReply: true,
          totalReplyCount: 0,
          isPublic: true,
        },
      },
    ],
  };
  return response;
};

const renderSuggested = async (id) => {
  // const suggestedUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
  //     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // const response = await fetch(suggestedUrl, options);
  // return await response.json();
  const response = {
    kind: "youtube#searchListResponse",
    nextPageToken: "CCIQAA",
    regionCode: "DE",
    pageInfo: { totalResults: 525, resultsPerPage: 34 },
    items: [
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "2-pRL05BL_g" },
        snippet: {
          publishedAt: "2025-07-20T22:37:59Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "Shes LOOKING for a Labubu?!?👀🤧🤍 #shorts #vlog #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/2-pRL05BL_g/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/2-pRL05BL_g/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/2-pRL05BL_g/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-20T22:37:59Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "hTqEi923ZOg" },
        snippet: {
          publishedAt: "2025-07-18T02:15:43Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "My engine will BLOW UP?! 😭🤧 #newcar #shorts #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/hTqEi923ZOg/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/hTqEi923ZOg/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/hTqEi923ZOg/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-18T02:15:43Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "IBtTmQwOJm8" },
        snippet: {
          publishedAt: "2025-07-17T23:48:26Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "She was the ONLY ONE who didn’t have BoDy SpRaY?! 🤧 #shorts #vlog #cute",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/IBtTmQwOJm8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/IBtTmQwOJm8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/IBtTmQwOJm8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-17T23:48:26Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "JgJJniSwv4Q" },
        snippet: {
          publishedAt: "2025-07-17T00:05:33Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "The WORST seat in the CaR?!👀😳 #shorts #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/JgJJniSwv4Q/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/JgJJniSwv4Q/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/JgJJniSwv4Q/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-17T00:05:33Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "UP0uOyFD49w" },
        snippet: {
          publishedAt: "2025-07-16T23:42:02Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "My husband CAUGHT ME doing this 😳 #shorts #funny #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/UP0uOyFD49w/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/UP0uOyFD49w/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/UP0uOyFD49w/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-16T23:42:02Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "DLffZQzA_WA" },
        snippet: {
          publishedAt: "2025-07-15T23:18:16Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "Deciding our next AGE GAP after theirs was 10 MoNtHs!!👀 #shorts #momlife #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/DLffZQzA_WA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/DLffZQzA_WA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/DLffZQzA_WA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T23:18:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "CkVTP6sIG2A" },
        snippet: {
          publishedAt: "2025-07-14T23:29:19Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "Buying a NEW CAR for the FIRST TIME 🤭🎀 #shorts #vlog",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/CkVTP6sIG2A/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/CkVTP6sIG2A/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/CkVTP6sIG2A/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-14T23:29:19Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "16K8dbTZBZQ" },
        snippet: {
          publishedAt: "2025-07-14T23:17:35Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "8 year old picks our NEW FAMILY CAR?!?😳👀 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/16K8dbTZBZQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-14T23:17:35Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "QdrjTUfzhiM" },
        snippet: {
          publishedAt: "2025-07-14T02:46:58Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "8 year old WINS Bugatti TREND 😅🤧 #shorts #funny #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/QdrjTUfzhiM/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/QdrjTUfzhiM/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/QdrjTUfzhiM/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-14T02:46:58Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "vdQXY2TZz14" },
        snippet: {
          publishedAt: "2025-07-13T22:56:30Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "We DECIDED our FAMILY NAME 👀 #shorts #momlife #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/vdQXY2TZz14/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/vdQXY2TZz14/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/vdQXY2TZz14/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-13T22:56:30Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "sIJGMRh4coU" },
        snippet: {
          publishedAt: "2025-07-11T23:20:44Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "Our 8 year olds REACTION to the BiG NeWs 👀🤭 #shorts #reaction",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/sIJGMRh4coU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/sIJGMRh4coU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/sIJGMRh4coU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-11T23:20:44Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "4Qfjphw1OS0" },
        snippet: {
          publishedAt: "2025-07-08T23:12:30Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "she STYLED the outfit she BLINDLY BOUGHT 👀✨#shorts #cute #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/4Qfjphw1OS0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/4Qfjphw1OS0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/4Qfjphw1OS0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-08T23:12:30Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "eEWCyjhJnSs" },
        snippet: {
          publishedAt: "2025-07-07T22:32:46Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "I met my HUSBAND when I was PREGNANT?! 😳 #storytime #shorts",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/eEWCyjhJnSs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/eEWCyjhJnSs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/eEWCyjhJnSs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-07T22:32:46Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "dWAUKMuqWz8" },
        snippet: {
          publishedAt: "2025-07-05T23:31:42Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "She BLINDLY picked her OUTFIT 👀😳#shorts #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/dWAUKMuqWz8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/dWAUKMuqWz8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/dWAUKMuqWz8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-05T23:31:42Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "OavNBKtjleM" },
        snippet: {
          publishedAt: "2025-07-03T22:40:54Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "My 8 year old DESPERATELY wants to MATCH her BFF 👀 #shorts #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/OavNBKtjleM/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/OavNBKtjleM/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/OavNBKtjleM/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-03T22:40:54Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "9HCrcpFYSxI" },
        snippet: {
          publishedAt: "2025-07-01T23:36:27Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "I CHANGED after being pregnant for 18 MONTHS 🤧😳 #pregnancy #shortsfeed",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/9HCrcpFYSxI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/9HCrcpFYSxI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/9HCrcpFYSxI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-07-01T23:36:27Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "-wH_kPLMbjA" },
        snippet: {
          publishedAt: "2025-06-30T00:05:03Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "My HuSbAnD asked me to FAKE PROM?! 🤭😭 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/-wH_kPLMbjA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/-wH_kPLMbjA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/-wH_kPLMbjA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-30T00:05:03Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "Q9LWTMxshDk" },
        snippet: {
          publishedAt: "2025-06-28T00:11:37Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "Girl who got PREGNANT 7 Weeks AFTER BIRTH 👀😳 #shorts #momlife #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Q9LWTMxshDk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Q9LWTMxshDk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Q9LWTMxshDk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-28T00:11:37Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "AO8j-plXMcE" },
        snippet: {
          publishedAt: "2025-06-26T01:28:54Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "We NEED to be RESCUED 🤧😭 #shorts #momlife #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/AO8j-plXMcE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/AO8j-plXMcE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/AO8j-plXMcE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-26T01:28:54Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "S_Qs4jpibUs" },
        snippet: {
          publishedAt: "2025-06-23T23:37:05Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "I said NO to her SLEEPOVER?! 🤧 #shorts #momlife #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/S_Qs4jpibUs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/S_Qs4jpibUs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/S_Qs4jpibUs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-23T23:37:05Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "CIJRB-kSrNI" },
        snippet: {
          publishedAt: "2025-06-22T23:12:00Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "Going to PROM as 30 year OLDS?! 👀#shorts #funny #vlog",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/CIJRB-kSrNI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/CIJRB-kSrNI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/CIJRB-kSrNI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-22T23:12:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "W_Ta4NN3SwE" },
        snippet: {
          publishedAt: "2025-06-17T23:44:56Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "I went into LABOR when she was 10 MONTHS OLD?!😳 #shorts #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/W_Ta4NN3SwE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/W_Ta4NN3SwE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/W_Ta4NN3SwE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-17T23:44:56Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "_vCNDWDK30E" },
        snippet: {
          publishedAt: "2025-06-16T23:19:19Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "I got married BEFORE I REALIZED THIS 😭💔#shorts #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/_vCNDWDK30E/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/_vCNDWDK30E/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/_vCNDWDK30E/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-16T23:19:19Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "umEaPoVBrgQ" },
        snippet: {
          publishedAt: "2025-06-15T23:35:24Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "He loved my daughter like HIS OWN 🤧❤️ #shorts",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/umEaPoVBrgQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/umEaPoVBrgQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/umEaPoVBrgQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-15T23:35:24Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "dr_6gHruIn4" },
        snippet: {
          publishedAt: "2025-06-14T00:23:09Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "8 year old RODEO FIT REVEAL 👀🤠 #shorts #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/dr_6gHruIn4/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/dr_6gHruIn4/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/dr_6gHruIn4/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-14T00:23:09Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "evDO_Rma-0E" },
        snippet: {
          publishedAt: "2025-06-10T00:23:34Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "Kids at her SCHOOL LOVE my cake pops?!? 👀 #shorts #momlife #vlog",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/evDO_Rma-0E/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/evDO_Rma-0E/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/evDO_Rma-0E/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-10T00:23:34Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "_uGKR4TOEgA" },
        snippet: {
          publishedAt: "2025-06-08T21:42:53Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "My 8 year old WANTED these SO BAD 😭🤧 #shorts #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/_uGKR4TOEgA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/_uGKR4TOEgA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/_uGKR4TOEgA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-08T21:42:53Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "eBu9MZ31xD0" },
        snippet: {
          publishedAt: "2025-06-05T22:54:47Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "our 8 year old ALWAYS WANTED THIS 👀😭 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/eBu9MZ31xD0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/eBu9MZ31xD0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/eBu9MZ31xD0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-05T22:54:47Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "8blgJv8eQk0" },
        snippet: {
          publishedAt: "2025-06-03T23:57:42Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "We’re NOT doing that again..👀 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/8blgJv8eQk0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/8blgJv8eQk0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/8blgJv8eQk0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-03T23:57:42Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "kicw4HCCNSg" },
        snippet: {
          publishedAt: "2025-06-02T23:45:51Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title:
            "My 8 year old is going to be the NEXT MEGHAN TRAINOR?! 👀 #shorts #vlog #funny",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/kicw4HCCNSg/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/kicw4HCCNSg/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/kicw4HCCNSg/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-06-02T23:45:51Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "rCcua8S-f_0" },
        snippet: {
          publishedAt: "2025-05-30T20:38:26Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "3.5 months after I gave BIRTH 😂😭 #shorts #funny #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/rCcua8S-f_0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/rCcua8S-f_0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/rCcua8S-f_0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-05-30T20:38:26Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "Z8kIUXQAECY" },
        snippet: {
          publishedAt: "2025-05-29T22:29:58Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "Outfits I’ll be wearing ALL summer 💅🏼 #shorts #funny #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Z8kIUXQAECY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Z8kIUXQAECY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Z8kIUXQAECY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-05-29T22:29:58Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "MMHSeS0WNBA" },
        snippet: {
          publishedAt: "2025-05-28T22:45:48Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "Their 10 month AGE GAP 10 months later 👀😭 #shorts #family",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/MMHSeS0WNBA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/MMHSeS0WNBA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/MMHSeS0WNBA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-05-28T22:45:48Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "Jp186QQESHI" },
        snippet: {
          publishedAt: "2025-05-28T01:03:30Z",
          channelId: "UCYEWRxUoOQdOCLab1SAyVLA",
          title: "My 8 year old CHANGES her HAIR AGAIN?! 👀 #shorts #momlife",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Jp186QQESHI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Jp186QQESHI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Jp186QQESHI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jacqueline Woodwell",
          liveBroadcastContent: "none",
          publishTime: "2025-05-28T01:03:30Z",
        },
      },
    ],
  };
  return response;
};

export default Video;
