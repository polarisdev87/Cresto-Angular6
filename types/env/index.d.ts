type Env = {
  production: boolean,
  host: {
    api: {
       url: string,
       prefix: string
     }
  },
  facebookConfig: {
    appId: string
  },
  googleConfig: {
    appId: string
  }
};
