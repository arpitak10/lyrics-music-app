import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8c8479f5bemshadba2b050a32084p1bddfcjsn9d6190a798f4",
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  };

//fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  // .then(response => response.json())
  //.then(response => console.log(response))
 // .catch(err => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
          headers.set(
            "X-RapidAPI-Key",
            "8c8479f5bemshadba2b050a32084p1bddfcjsn9d6190a798f4"
          );
        
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre:builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),
    getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
    getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
    getArtistDetails:builder.query({query:(artistId)=>`/artists/details?artist_id=${artistId}`}),
    getSongsByCountry:builder.query({query:(countryCode)=>`/charts/country?country_code=${countryCode}`  }),
    getSongBySearch:builder.query({query:(searchTerm)=>`/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
  }),
  });
  
export const { 
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongBySearchQuery,
    
   } = shazamCoreApi;