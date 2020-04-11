**Configuration Instructions**

* For the demonstration purposes I use docker services, that I created from scratch some time ago. Currently I did
  little tuning for the assignment on paxful branch. Also for flexibility purposes, I decided to add commits in the same
  git repository in order to make things simpler for the task).

* I am using
    * PHP 7.4.4
    * nginx 1.17
    * Postgres 12.2
    * Laravel (back-end, react on front-end with react-bootstrap and other libraries)
        * Using JavaScript instead of TypeScript as we agreed on for this time being

**Set up instructions**

* Extract files anywhere you wish
* Go to that directory where extracted files and then inside docker directory (make sure you are on paxful branch)
* Copy .env.example to .env
    * Inside .env there are defined configuration parameters related to services
    * By default services are running under 192.168.100.0/24 subnet
    * By default I have configured the application to run on the url: https://paxful.live.test
    * I am using self signed ssl certificate
    * **IMPORTANT**: Please add "192.168.100.100 paxful.live.test" in your hosts file on your host machine
* Under docker directory type: docker-compose up -d --build nginx
* Afterwards type: docker-compose exec php bash
* Make sure you are on /var/www/paxful directory inside container
* Run composer install
* Once it's done open in browser https://paxful.live.test (accept certificate warning)
    * In .env it's possible not to use ssl, but regular http protocol, for it *NGINX_LARAVEL* should be set
        just to laravel.conf.
    * If any parameter is updated in .env for docker, docker images needs to be re-builded in order to take affect
    * In case some of configuration param changes, like https to http, also database credentials, etc... please make sure updating laravel application .env file accordingly too
* Enjoy :)

Application runs: https://paxful.live.test

**API end points**:
* Users: [GET] https://paxful.live.test/api/user
* Specific user by id: [GET] https://paxful.live.test/api/user/{id}
* Trades: [GET] https://paxful.live.test/api/trade
* Specific trade by id: [GET] https://paxful.live.test/api/trade/{id}
* Create trade: [POST] https://paxful.live.test/api/trade
