import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../Models/IPost';


export const postAPI = createApi({
reducerPath: 'postAPI',
baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
tagTypes: ['Post'],
endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
        query: (limit: number = 5) => ({
            url: `/posts`,
            params: {
                _limit: limit
            }
        }),

        providesTags: result => ['Post']
    }),
    addPost: build.mutation<IPost, IPost>({
        query: (post) => ({
            url: `/posts`,
            method: 'POST',
            body: post
        }),

        invalidatesTags: ['Post']
    }),

    editPost:  build.mutation<IPost, IPost>({
        query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'PUT',
            body: post
        }),

        invalidatesTags: ['Post']
    }),

    deletePost:  build.mutation<IPost, IPost>({
        query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'DELETE',
        }),

        invalidatesTags: ['Post']
    }),
})
})