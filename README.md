# WordCamp Brighton 2018 Workshop App (wcbtn-2018-app)

An Ionic app to connect with a WordPress install.

## Setting Up Ionic
1/ Git clone or download this repo into your development area
* Install [**node**](https://nodejs.org) if you haven’t already (it includes the package manager npm)
* Install Ionic globally if you haven’t already
```
npm install -g ionic
```

2/ Navigate to the project folder in the terminal then
```
npm install
```
This will install all the ionic dependencies.

## Setting Up WordPress
This app is set-up to work with the accompanying [**Workshop Repo**](https://github.com/schlessera/wcbtn-2018-api).

## Connecting WordPress & Ionic
1/ Navigate to the ionic project folder and open the `src/environment.ts` file - you’ll see these settings:
```
export const environment = {
	site_url : '<YOUR_LOCAL_INSTALL_URL>',
	ideas_url : '/wp-json/wp/v2/ideas',
	jwt_url: '/wp-json/jwt-auth/v1/token',
}
```

2/ Change the `site_url` to the root URL of your WordPress install

## Setting-up Authentication
3/ Create a new `JWT Secret Key` and add to your `wp-config.php` file, for example
```
define('JWT_AUTH_SECRET_KEY', 'Oo,I7#nl{|*,8uhGGfU4z@fR&$uBjab54qCZ:rd3|6');
```
4/ Go to your Ionic project folder in the terminal and type:
```
Ionic serve
```
5/ All being well, you should see your new ionic app, with data fed from your WordPress website

## Prerequisites

You need a development environment (like WAMP, MAMP or Vagrant)
You need to be able to access the files and folder structure of your WordPress site.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* [**Alain Schlesser**](https://www.alainschlesser.com/) & [**Sean Blakeley**](http://www.seanblakeley.co.uk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
