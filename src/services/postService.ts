import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {PostType} from "models/Post";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<PostType[], number>({
            query: (limit= 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
})
})