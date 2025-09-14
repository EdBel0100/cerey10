import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Import backend DTO type (via alias you set up in tsconfig)
import { PostOpenAiDto } from "@backend-Dtos/OpenAi-Dtos/post-openai.dto";
import { CreateUserDto } from "@backend-Dtos/User-Dtos/create-user.dto"

const baseUrl = "http://172.20.10.10:3001" || "http://192.168.0.196:3001"

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    postOpenAi: builder.mutation<any, PostOpenAiDto>({
      query: (body) => ({
        url: "/openai",
        method: "POST",
        body,
      }),
    }),
    updatePreferences: builder.mutation<any, { userCognitoId: string; body: any }>({
      query: ({ userCognitoId, body }) => ({
        url: `/preferences/${userCognitoId}`,
        method: 'PUT',
        body,
      }),
    }),

    
    getPreferences: builder.query<any, string>({
      query: (userCognitoId) => ({
        url: `/preferences/${userCognitoId}`,
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


  }),
});

// Export hook for usage in components
export const { usePostOpenAiMutation, useUpdatePreferencesMutation, useGetPreferencesQuery } = Api;
