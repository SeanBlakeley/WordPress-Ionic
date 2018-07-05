# An Ionic App Driven by the WordPress API

This project creates a very simple authenticated CRUD (Create, Read, Update, Delete) connection between a WordPress website and an Ionic App.

Please be aware - this is nowhere near production ready - with sensitive information deliberately exposed in the console. Don’t even think about using this near a production environment.

## Setting Up Ionic
1/ Git clone or download this repo into your development area
* Install node if you haven’t already
* Install Ionic globally if you haven’t already
```npm install -g ionic```

2/ Navigate to the project folder in the terminal then
```npm install```
This will install all the ionic dependencies.

## Setting Up WordPress
3/ Create a WordPress install in your development area the standard way (for example: [**http://wpionic.local**](http://wpionic.local)
)

4/ Add the [**Custom Post Type UI Plugin**](https://en-gb.wordpress.org/plugins/custom-post-type-ui/)
**you can skip this step if you are comfortable creating custom post types**

5/ Add the [**JSON Web Token Plugin**](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

6/ Create a new 'ideas' custom post type
![Alt text](/src/assets/imgs/create-new-ideas-ctp.PNG?raw=true "Create Ideas custom post type")
Scroll down towards the bottom of the list of options and update the REST API settings:
![Alt text](/src/assets/imgs/show-in-rest.PNG?raw=true "Show Ideas custom post type in rest")

7/ Now you need to create some ideas!
Alternately, you can upload the dummy.xml file included in the root of the repo. Go to Tools > Import > WordPress > Install Now. The Run Importer option will replace the Install Now after a moment or 2. Click Run Importer and upload the Dummy.xml file as prompted.

## Connecting WordPress & Ionic
8/ Navigate back to the ionic project folder and open the src/environment.ts file - you’ll see these settings:
```
export const environment = {
	site_url : '<YOUR_LOCAL_INSTALL_URL>',
	ideas_url : '/wp-json/wp/v2/ideas',
	jwt_url: '/wp-json/jwt-auth/v1/token',
}
```

9/ Change the site_url to the root URL of your WordPress install
10/ If you set the REST API base slug to anything other than ideas, change it here

## Setting-up Authentication
11/ Create a new JWT Secret Key and add to your wp-config.php file, for example
```define('JWT_AUTH_SECRET_KEY', 'Oo,I7#nl{|*,8fU4z@fR&$uBjab54qCZ:rd3|6');```
12/ Go to your Ionic project folder in the terminal and type:
```Ionic serve```
13/ All being well, you should see your new ionic app, with data fed from your WordPress website

## Prerequisites

You need a development environment (like WAMP, MAMP or Vagrant)
You need to be able to access the files and folder structure of your WordPress site.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* [**Sean Blakeley**](http://www.seanblakeley.co.uk) - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
