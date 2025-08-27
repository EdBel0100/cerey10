import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Import backend DTO type (via alias you set up in tsconfig)
import { PostOpenAiDto } from "@backend-Dtos/OpenAi-Dtos/post-openai.dto";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.196:3001" }),
  endpoints: (builder) => ({
    postOpenAi: builder.mutation<any, PostOpenAiDto>({
      query: (body) => ({
        url: "/openai",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hook for usage in components
export const { usePostOpenAiMutation } = Api;
