import React, { useState } from "react";
import Videos from "../Videos";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { categories } from "../data";
import { useOutletContext } from "react-router-dom";
import LogRocket from "logrocket";

function Home() {
  const { id, setId } = useOutletContext();

  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => renderVideos(id),
  });

  console.log(data);

  return (
    <section>
      <aside>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${category.id === id ? "active" : ""}`}
          >
            <ion-icon
              name={
                category.icon.includes("logo")
                  ? `${category.icon}`
                  : `${category.icon}-outline`
              }
            ></ion-icon>
            <a key={index} onClick={() => setId(category.id)}>
              {category.name}
            </a>
          </div>
        ))}
      </aside>

      <main className="video-container">
        {isPending && <h1>Loading...</h1>}
        {data && (
          <h1 className="displayed-videos">
            {id} <span className="videos-span">Videos</span>
          </h1>
        )}

        <Videos data={data} />
      </main>
    </section>
  );
}

const renderVideos = async (id) => {
  // const url = `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`;
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
    kind: "youtube#searchListResponse",
    nextPageToken: "CBgQAA",
    regionCode: "US",
    pageInfo: { totalResults: 1000000, resultsPerPage: 24 },
    items: [
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
        id: { kind: "youtube#video", videoId: "iqcT0qOuPlE" },
        snippet: {
          publishedAt: "2023-02-28T12:00:34Z",
          channelId: "UCE-KQxU0N4684m_FJXofRTw",
          title:
            "Cool Gadgets!😍Smart Appliances,New Gadgets, Kitchen Gadgets, Home Gadgets,Inventions🙏P-112 #shorts",
          description:
            "Cool Gadgets!  Smart Appliances,New Gadgets, Kitchen Gadgets, Home Gadgets,Inventions  P-112 Hi Everyone This channel ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/iqcT0qOuPlE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/iqcT0qOuPlE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/iqcT0qOuPlE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "New Sky TV",
          liveBroadcastContent: "none",
          publishTime: "2023-02-28T12:00:34Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "f1na2CN9WFs" },
        snippet: {
          publishedAt: "2025-07-19T21:05:32Z",
          channelId: "UCwBV-eg1dAkzrdjqJfyEj0w",
          title:
            "THE FANTASTIC FOUR - Galactus Pummels New York City (2025) Official Trailer",
          description:
            "The Fantastic Four: First Steps (2025) – Official Synopsis, Cast & MCU Connections Marvel's First Family finally arrives in the MCU ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/f1na2CN9WFs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/f1na2CN9WFs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/f1na2CN9WFs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "MovieGasm ․ com",
          liveBroadcastContent: "none",
          publishTime: "2025-07-19T21:05:32Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "Hq1361evbT4" },
        snippet: {
          publishedAt: "2025-07-13T18:40:00Z",
          channelId: "UCDqK0AWAzHk43FsDIB9Ng-A",
          title:
            "NEW Sol de Janeiro Scent Leaked?! 👀🍒#makeup #freepreppyclip #sephoraskincare #relatable #preppy",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Hq1361evbT4/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Hq1361evbT4/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Hq1361evbT4/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Christi Rose",
          liveBroadcastContent: "none",
          publishTime: "2025-07-13T18:40:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "FdYHc1fETOw" },
        snippet: {
          publishedAt: "2025-07-16T03:38:42Z",
          channelId: "UCFMGCDS4rQprREJJa8f4F0Q",
          title:
            "Fixing Problem Areas In Our New House With Great Stuff Wide Spray #sponsored @greatstufffoam",
          description:
            "You better scroll quick, I'm about to foam your screen. Alright seriously, we're ready to insulate the new house we're building, but ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/FdYHc1fETOw/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/FdYHc1fETOw/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/FdYHc1fETOw/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "HAUS PLANS ®️",
          liveBroadcastContent: "none",
          publishTime: "2025-07-16T03:38:42Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "oJjuQeATcVE" },
        snippet: {
          publishedAt: "2025-07-20T01:25:25Z",
          channelId: "UC-2hhqBG5Su7s91_HmhaODQ",
          title:
            "😁💪 GOLAZO de MESSI con pase de BUSQUETS | New York Red Bulls 1-4 Inter Miami | MLS 2025",
          description:
            "GOLAZO DE MESSI. El capitán recibió otro gran pase de Sergio Busquets para sentenciar el partido New York Red Bulls vs.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/oJjuQeATcVE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/oJjuQeATcVE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/oJjuQeATcVE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Fox Deportes",
          liveBroadcastContent: "none",
          publishTime: "2025-07-20T01:25:25Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "Bd1lCX4kzWc" },
        snippet: {
          publishedAt: "2025-07-20T02:36:11Z",
          channelId: "UCSZbXT5TLLW_i-5W8FZpFsg",
          title:
            "New York Red Bulls vs. Inter Miami CF | Full Match Highlights | Messi TWO Goals!",
          description:
            "Watch every match with MLS Season Pass on Apple TV: http://apple.co/MLS The plays here: https://www.mlssoccer.com/messi/ ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Bd1lCX4kzWc/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Bd1lCX4kzWc/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Bd1lCX4kzWc/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Major League Soccer",
          liveBroadcastContent: "none",
          publishTime: "2025-07-20T02:36:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "EywSx0gMW2k" },
        snippet: {
          publishedAt: "2025-07-15T18:04:00Z",
          channelId: "UCUhFaUpnq31m6TNX2VKVSVA",
          title: "New Honda Prelude!",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/EywSx0gMW2k/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/EywSx0gMW2k/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/EywSx0gMW2k/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "carwow",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T18:04:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "u3fvLameQ6Q" },
        snippet: {
          publishedAt: "2025-07-18T23:09:06Z",
          channelId: "UC2JEb-uI4E-M3BJMfK9KFUw",
          title:
            "Last Prisoner :  New Action Movie 2025 | Jason Statham | Full Movie | 4K Ultra #actionmovies",
          description:
            "RDEZEDDrama Subscribe Here ❤ Jason Statham : a new action movie for ( Jason Statham ) 2025 | English Movie Subtitles ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/u3fvLameQ6Q/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/u3fvLameQ6Q/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/u3fvLameQ6Q/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "ZED Drama",
          liveBroadcastContent: "none",
          publishTime: "2025-07-18T23:09:06Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "0uHspmssVNs" },
        snippet: {
          publishedAt: "2025-07-15T14:54:39Z",
          channelId: "UCHIRBiAd-PtmNxAcLnGfwog",
          title: "12 years later, a new era begins with the Sony RX1R III",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/0uHspmssVNs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/0uHspmssVNs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/0uHspmssVNs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "B&H Photo Video Pro Audio",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T14:54:39Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "9FXG861XKBw" },
        snippet: {
          publishedAt: "2025-07-16T23:00:14Z",
          channelId: "UCVb7uI1uABY4teAN8i1Ir4g",
          title: "I WOKE UP IN A NEW BUGATTI! 🤣",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/9FXG861XKBw/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/9FXG861XKBw/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/9FXG861XKBw/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Joe Albanese",
          liveBroadcastContent: "none",
          publishTime: "2025-07-16T23:00:14Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "J0SR58GB2Jk" },
        snippet: {
          publishedAt: "2025-07-19T18:25:26Z",
          channelId: "UCsaMlIXxq4n35mkxrFsdw5A",
          title:
            "Bamlak Getnet - Gojame Tebiye | ጎጃሜ ተብዬ - New Ethiopian Music 2025 (Music Video)",
          description:
            "Subscribe to Bamlak Getnet | And Turn ON Notifications To Stay Updated With All New Uploads!   Unauthorized use, Distribution ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/J0SR58GB2Jk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/J0SR58GB2Jk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/J0SR58GB2Jk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Bamlak Getnet",
          liveBroadcastContent: "none",
          publishTime: "2025-07-19T18:25:26Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "2AntCNehm2E" },
        snippet: {
          publishedAt: "2025-07-15T14:52:24Z",
          channelId: "UC9k-yiEpRHMNVOnOi_aQK8w",
          title: "Flash Floods Make a Mess of New York and New Jersey",
          description:
            "Heavy rains hit the Northeast on Monday, causing flash floods, stranding drivers, and disrupting life. In Scotch Plains, New Jersey, ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/2AntCNehm2E/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/2AntCNehm2E/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/2AntCNehm2E/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Inside Edition",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T14:52:24Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "WDlTm3XiGn8" },
        snippet: {
          publishedAt: "2022-06-03T04:00:09Z",
          channelId: "UCMgrC8XJh6H4ZcZlrwuWq3A",
          title: "Tye Tribbett - New (Lyric Video)",
          description:
            "Official Lyric Video for “New” by Tye Tribbett Get the song here: https://TyeTribbett.lnk.to/AllThingsNewID Subscribe to Tye's ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/WDlTm3XiGn8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/WDlTm3XiGn8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/WDlTm3XiGn8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "TyeTribbettVEVO",
          liveBroadcastContent: "none",
          publishTime: "2022-06-03T04:00:09Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "6wyhujatcsE" },
        snippet: {
          publishedAt: "2025-07-15T23:00:07Z",
          channelId: "UCXIJgqnII2ZOINSWNOGFThA",
          title:
            "NEW: Trump directs Bondi to release &#39;whatever she thinks is credible&#39;",
          description:
            "Fox News correspondent David Spunt reports on what's holding back the release of Jeffrey Epstein files on 'Special Report.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/6wyhujatcsE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/6wyhujatcsE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/6wyhujatcsE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Fox News",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T23:00:07Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "mhYxGaJsulw" },
        snippet: {
          publishedAt: "2025-07-20T01:53:16Z",
          channelId: "UC6c1z7bA__85CIWZ_jpCK-Q",
          title:
            "MESSI &amp; SEGOVIA BRACES 🔥 New York Red Bulls vs. Inter Miami | MLS Highlights | ESPN FC",
          description:
            "Watch as Inter Miami get a massive 5-1 win over New York Red Bulls with braces from Lionel Messi and Telasco Segovia.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/mhYxGaJsulw/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/mhYxGaJsulw/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/mhYxGaJsulw/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "ESPN FC",
          liveBroadcastContent: "none",
          publishTime: "2025-07-20T01:53:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "2lGY24khwas" },
        snippet: {
          publishedAt: "2025-07-12T02:45:00Z",
          channelId: "UCeY0bbntWzzVIaj2z3QigXg",
          title:
            "New Hampshire man denied re-entry to U.S. after Canada visit: ‘Very uncertain for me right now’",
          description:
            "Chris Landry has lived in New Hampshire since he was three-years-old. He has a green card and is a U.S. citizen. But Sunday, he ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/2lGY24khwas/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/2lGY24khwas/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/2lGY24khwas/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "NBC News",
          liveBroadcastContent: "none",
          publishTime: "2025-07-12T02:45:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "hHkYha90zmU" },
        snippet: {
          publishedAt: "2025-07-19T03:58:22Z",
          channelId: "UC-eAOK9RzbO4DuOM_eIVuSg",
          title:
            "EVERYTHING in NEW EARLY ZEN UPDATE - SAVE SLOTS, NEW CURRENCY &amp; MORE! (Grow a Garden)",
          description:
            "EVERYTHING in NEW EARLY ZEN UPDATE - SAVE SLOTS, NEW CURRENCY & MORE! (Grow a Garden) Follow me on Roblox: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/hHkYha90zmU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/hHkYha90zmU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/hHkYha90zmU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Ayze Tips",
          liveBroadcastContent: "none",
          publishTime: "2025-07-19T03:58:22Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "VZo9G4E81mA" },
        snippet: {
          publishedAt: "2025-07-20T04:01:48Z",
          channelId: "UCInP1YlFIXKkmAnRxgbeizw",
          title:
            "Lionel Messi vs New York Red Bulls | 2 Goals &amp; 1 Assist | 19/07/2025",
          description:
            "It was the Lionel Messi show once again! The GOAT scored 2 amazing goals, gave 1 assist, and contributed to another goal, ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/VZo9G4E81mA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/VZo9G4E81mA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/VZo9G4E81mA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Kyliann22Second",
          liveBroadcastContent: "none",
          publishTime: "2025-07-20T04:01:48Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "2qJL_PeYJXY" },
        snippet: {
          publishedAt: "2025-07-18T19:58:42Z",
          channelId: "UCsPMNatXCwqyUuJilBT73jg",
          title: "I Stole The 5 NEWEST BRAINROTS..",
          description:
            "WISHLIST & PLAY MY NEW GAME Waterpark Simulator - https://store.steampowered.com/app/3293260/Waterpark_Simulator/ ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/2qJL_PeYJXY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/2qJL_PeYJXY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/2qJL_PeYJXY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "CaylusBlox",
          liveBroadcastContent: "none",
          publishTime: "2025-07-18T19:58:42Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "KoDxDjIwGGA" },
        snippet: {
          publishedAt: "2025-07-13T22:54:12Z",
          channelId: "UCPSLqQkRGZ9TS12idypw5IA",
          title:
            "New Zealand Family eat at Olive Garden for the first time! (WHAT&#39;S WITH THE BREAD STICKS?!)",
          description:
            "CHECK US OUT ON PATREON FOR LOADS OF EXCLUSIVE CONTENT! ￼ https://www.patreon.com/yournewzealandfamily ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/KoDxDjIwGGA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/KoDxDjIwGGA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/KoDxDjIwGGA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Your New Zealand Family",
          liveBroadcastContent: "none",
          publishTime: "2025-07-13T22:54:12Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "jZZCpFe_EBE" },
        snippet: {
          publishedAt: "2025-07-15T11:33:30Z",
          channelId: "UCe_pqrRGpVPcTL8BFg_QtBA",
          title: "Is New World Really Worth Playing In 2025?",
          description:
            "newworld #mmorpg #review Is New World Really Worth Playing In 2025? If you enjoyed this video and want to see more content ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/jZZCpFe_EBE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/jZZCpFe_EBE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/jZZCpFe_EBE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "DeployableLover",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T11:33:30Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "bouPBMhVt84" },
        snippet: {
          publishedAt: "2025-02-11T00:00:06Z",
          channelId: "UCxQ0upnitujgZa5flTvpdaw",
          title: "JamWayne, 501Bryze, &amp; Hessom - New (Official Video)",
          description:
            'JamWayne, 501Bryze, & Hessom - New (Official Video) Stream "New" Single Here: ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/bouPBMhVt84/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/bouPBMhVt84/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/bouPBMhVt84/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "JamWayne",
          liveBroadcastContent: "none",
          publishTime: "2025-02-11T00:00:06Z",
        },
      },
      {
        kind: "youtube#searchResult",
        id: { kind: "youtube#video", videoId: "LwYSiTtnOiY" },
        snippet: {
          publishedAt: "2025-07-15T23:59:58Z",
          channelId: "UCoA4GCxOgBuAK1Gmtz_Gsng",
          title:
            "what’s your new name??🩵🩷 #fypyoutube #fypシ゚viral #new #name #number #like #comment #challenge #fyp",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/LwYSiTtnOiY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/LwYSiTtnOiY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/LwYSiTtnOiY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Kay Clovia",
          liveBroadcastContent: "none",
          publishTime: "2025-07-15T23:59:58Z",
        },
      },
    ],
  };
  return response;
};

// pages
//   home
//     components
//       header.jsx
//       videos.jsx
//   index.jsx
// api
// util
// components
//   ui
//     video.jsx
//     button.jsx
//   layout
//     navigation.jsx
//     footer.jsx

// napravi hijerarhiju fajlova
// napravi import alias (# "import button from "#components/ui/button"   ") napravi alias za components i pages
// napravi shared layout

export default Home;
