import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostOpenAiDto } from "@backend-Dtos/OpenAi-Dtos/post-openai.dto";
import { CreateUserDto } from "@backend-Dtos/User-Dtos/create-user.dto";
import { SignInResponseDto } from "@backend-Dtos/Auth-Dtos/signin-response-dto"
import { SignInDto } from "@backend-Dtos/Auth-Dtos/signin-dto"
import * as SecureStore from "expo-secure-store"


export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3001",
  prepareHeaders: async (headers) => {
    const token = await SecureStore.getItemAsync("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else if (!token){
      return
    }
    console.log(headers)
    return headers;
  },
}),
  endpoints: (builder) => ({
    postOpenAi: builder.mutation<any, PostOpenAiDto>({
      query: (body) => ({
        url: "/openai",
        method: "POST",
        body,
      }),
    }),
    updatePreferences: builder.mutation<any, { body: any }>({
      query: ({ body }) => ({
        url: `/preferences`,
        method: 'PUT',
        body,
      }),
    }),
    getPreferences: builder.query<any, void>({
      query: () => ({
        url: `/preferences`,
        method: "GET",
      }),
    }),
    createUser: builder.mutation<void, CreateUserDto>({
      query: (body) => ({
        url:"/user",
        method:"POST",
        body
      }),
    }),
    signIn: builder.mutation<SignInResponseDto, SignInDto>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    getFavorites: builder.query<any, void>({
      query: () => ({
        url: "/favorites",
        method: "GET"
      }),
    }),

    createRecipe: builder.mutation<void, any>({
      query: (body) => ({
        url:"/favorites",
        method:"POST",
        body: body
      }),
    }),

    deleteRecipe: builder.mutation<void, void>({
      query: () =>({
        url:"/favorites",
        method:"DELETE"
      }),
    }),

    






  }),
});

export const { 
  usePostOpenAiMutation, 
  useUpdatePreferencesMutation, 
  useGetPreferencesQuery, 
  useCreateUserMutation,
  useSignInMutation,
  useGetFavoritesQuery

} = Api;