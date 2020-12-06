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
    size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | ''
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

export interface searchTrackType {
    name: string,
    artist: string,
    url: string,
    streamable: string,
    listeners: number,
    image: Array<imageType>,
    mbid: string
}

export interface searchTracksType {
    results: {
        "opensearch:Query": {
            "#text": string,
            role: string,
            startPage: number
        },
            "opensearch:totalResults": number
            "opensearch:startIndex": number
            "opensearch:itemsPerPage": number
            trackmatches: {
                track: searchTrackType[]
            },
            "@attr": {}
    }
}

interface artistType {
    name: string
    url: string
    image: imageType[]
}

interface tagsType {
    name: string
    url: string
}

export interface artistInfoType {
    artist?: artist
    error?: number
    message?: string
    links?: string[]
}

export interface artist {
    name: string
    mbid: string
    url: string
    image: imageType[],
    streamable: number
    ontour: number
    stats: {
        listeners: number
        playcount: number
    },
    similar: {
        artist: artistType[]
    },
    tags: {
        tag: tagsType[]
    },
    bio: {
        links: {
            link: {
                "#text": string,
                rel: string
                href: string
            }
        }
        published: string
        summary: string
        content: string
    }
}