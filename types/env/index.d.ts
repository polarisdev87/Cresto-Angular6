type Env = {
  production: boolean,
  host: {
    api: {
       url: string,
       prefix: string
     }
  },
  cresttoken: {
    api: {
       url: string,
       prefix: string
     }
  },
  facebookConfig: {
    appId: string
  },
  googleConfig: {
    appId: string,
    capthca: string
  },
  domain: string,
};
