import 'dotenv/config';

export default {
  expo: {
    name: "frontend",
    slug: "frontend",
    plugins: [
      [
        "expo-router",
        {
          origin: "https://n",
        },
      ],
      "expo-font",
    ],
    extra: {
      awsCognitoUserPoolId: process.env.EXPO_AWS_COGNITO_USER_POOL_ID,
      awsCognitoClientId: process.env.EXPO_AWS_COGNITO_CLIENT_ID,
    },
  },
};
