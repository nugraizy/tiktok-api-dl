export interface SSSTikFetchTT {
  status: "success" | "error"
  message?: string
  result?: string
}

export interface SSSTikResult {
  status: "success" | "error"
  message?: string
  result?: {
    type: "image" | "video"
    desc: string
    author: Author
    statistics: Statistics
    images?: string[]
    video?: string
    music: string
  }
}

export interface Author {
  avatar: string
  nickname: string
}

export interface Statistics {
  likeCount: string
  commentCount: string
  shareCount: string
}
