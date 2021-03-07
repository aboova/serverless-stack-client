const config = {
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "buscketball",
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://4dhte3e7h8.execute-api.ap-northeast-2.amazonaws.com/prod/notes",
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_53rZ8GkNo",
      APP_CLIENT_ID: "4nk2r3apkktej1guv7jodr6r5q",
      IDENTITY_POOL_ID: "ap-northeast-2:3f26f082-191d-4fbe-b4d3-2b94f76bdd10",
    },
  };

  export default config;