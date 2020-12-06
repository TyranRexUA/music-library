export interface topTrackType {
    name: string
    duration: number
    playcount: number
    listeners: number
    mbid: string
    url: string
    streamable: {
        '#text': number
        fulltrack: number
    },
    artist: {
        name: string
        mbid: string
        url: string
    },
    image: Array<imageType>
}

interface imageType {
    '#text': string
    size: string
}

export interface topTracksType {
    tracks: {
        track: topTrackType[]
        "@attr": {
            page: number
            perPage: number
            totalPages: number
            total: number
        }
    }
}