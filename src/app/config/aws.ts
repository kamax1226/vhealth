import config from "./";
console.log("Node_env", process.env);
const awsConfig = {
    Auth: {
        "region": process.env.REACT_APP_AWS_REGION,
        "userPoolId": process.env.REACT_APP_USER_POOL_ID,
        "userPoolWebClientId": process.env.REACT_APP_APP_CLIENT_ID,
        "mandatorySignIn": false,
        "cookieStorage": {
            "domain": config.COOKIE_STORAGE,
            "path": "/",
            "expires": 365,
            "secure": true
        },
        "redirectSignIn": config.REDIRECT_SIGNIN_URL,
        "redirectSignOut": config.REDIRECT_SIGNOUT_URL
    },
    "API": {
        "endpoints": [
            {
                "name": "hopblox-api",
                "endpoint": "https://api.dev.hopblox.com"
            }
        ]
    }
};

const awsAuth = {
    "domain": config.AUTH_DOMAIN,
    "scope": [
      "email",
      "profile",
      "openid",
      // "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": config.REDIRECT_SIGNIN_URL,
    "redirectSignOut": config.REDIRECT_SIGNOUT_URL,
    "responseType": "code"
}

export { awsConfig, awsAuth };
