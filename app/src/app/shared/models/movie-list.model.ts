export class MovieList {

    description: string;
    favoriteCount: number;
    id: number;
    itemCount: number;
    listType: string;
    name: string;
    posterPath: string;
    constructor(movieListInput: IMovieListInput) {
        if (movieListInput) {
            this.description = movieListInput.description;
            this.favoriteCount = movieListInput.favorite_count;
            this.id = movieListInput.id;
            this.itemCount = movieListInput.item_count;
            this.listType = movieListInput.list_type;
            this.name = movieListInput.name;
            this.posterPath = movieListInput.poster_path;
        }
    }
}

export interface IMovieListInput {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    list_type: string;
    name: string;
    poster_path: string;
}
