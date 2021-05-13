export class RestEndPoint{  

static OAUTH_SERVER_END_POINT : string = 'http://103.228.202.217:86/oauth/';

static CLIENT_ID : string = 'adminClient';
static CLIENT_SECRET : string = 'secret';

static REDIRECT_URI : string  = 'http://localhost:4201/';

static OAUTH_AUTHORIZE : string = 'oauth/authorize?response_type=code&client_id='+RestEndPoint.CLIENT_ID+'&redirect_uri=';
static OAUTH_TOKEN : string = 'oauth/token';
static CHECK_TOKEN : string = 'oauth/check_token';
static OAUTH_LOGOUT : string = 'logout?redirect_uri='+ RestEndPoint.REDIRECT_URI;

static BASE_URL :string ='http://103.228.202.217:86';
static BASE_URL_ATOM :string ='http://103.228.202.217:86';


}