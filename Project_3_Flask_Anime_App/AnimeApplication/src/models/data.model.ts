export interface Data{
    data: String;
    genre: String;
    rating: String;
}

export interface ReviewData{
    user: String;
    userrating: Float32Array;
    review: String;
}

export interface InsertAnime{
    anime: String;
    format: String;
    episodes: Int32Array
    insertrating: Float32Array
    insertgenre: String
    insertdate: String
}