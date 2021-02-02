# Simple-TS3-App

A simple React app for showing results from [simple-ts3-api](https://github.com/jontzii/simple-ts3-api).

## Usage

The app can be used by pulling and running `jontzii/simple-ts3-app` from Docker Hub. The Docker image is always build from the latest merge to `main` using the default build tool and served using serve. The image hosts the app on port 80.

Running the image basically does the same thing as running `npm run build` and `serve -s build` inside the project directory.

Currently fetch address is hardcoded but it will be made a env variable in the future.

[Demo](https://status.naapur1t.com)

## Building

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `docker build -t your_app_name .`

Builds a Docker image from the 
