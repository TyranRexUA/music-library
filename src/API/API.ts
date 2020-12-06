import axios from 'axios';
import { artistInfoType, searchTracksType, topTracksType } from '../types/types';

const apiKey: string = '78fafa6218217a14aaada8308dd63c3b'

const instance = axios.create({
    baseURL: `http://ws.audioscrobbler.com/2.0/`,
    params: {
        api_key: apiKey,
        format: 'json',
    }
})

// API HAS BROKEN PAGINATION (IT SHOWS A TOTAL PAGES = 500 000, BUT REQUEST ON 300+ PAGE SHOWS EMPTY ARRAY OF TRACKS)

const API = {
    //Top Tracks List
    getTopTracks() {
        return instance.get<topTracksType>('', {params: {
            method: 'chart.gettoptracks'
        }})
            .then(response => response.data.tracks.track) // return array of tracks
    },
    getMoreTopTracks(next: number) {
        return instance.get<topTracksType>('', {params: {
            method: 'chart.gettoptracks',
            page: next
        }})
            .then(response => response.data.tracks.track) // return array of tracks
    },

    // Search Tracks List
    getSearchTracks(search: string) {
        return instance.get<searchTracksType>('', {params: {
            method: 'track.search',
            limit: 50,
            track: search
        }})
            .then(response => response.data.results.trackmatches.track) // return array of tracks
    },
    getMoreSearchTracks(search: string, next: number) {
        console.log('getMoreSearchTracks', search, next)
        return instance.get<searchTracksType>('', {params: {
            method: 'track.search',
            limit: 50,
            track: search,
            page: next
        }})
            .then(response => response.data.results.trackmatches.track) // return array of tracks
    },

    // ArtistPage
    getArtistInfo(artistName: string) {
        return instance.get<artistInfoType>('', {params: {
            method: 'artist.getinfo',
            artist: artistName,
        }})
            .then(response => response.data)
    }
}

export default API;