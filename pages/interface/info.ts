// To parse this data:
//
//   import { Convert, AnimeInfo } from "./file";
//
//   const animeInfo = Convert.toAnimeInfo(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AnimeInfo {
    animeTitle:    string;
    type:          string;
    releasedDate:  string;
    status:        string;
    genres:        string[];
    otherNames:    string;
    synopsis:      string;
    animeImg:      string;
    totalEpisodes: string;
    episodesList:  EpisodesList[];
}

export interface EpisodesList {
    episodeId:  string;
    episodeNum: string;
    episodeUrl: string;
}


const info = () => (

    console.log('')  
        );
        
        export default info;

