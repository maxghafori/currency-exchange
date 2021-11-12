
# Currency Exchange

React Native Application to exchange currencies (USD, EUR, GPB).


## Documentation

This project was created by Expo CLI.

Some library that used in this project:

`redux-toolkit` to centralizing the application's states.

`styled-components` for styles.

`react-query` for fetch data from the network.

`jest` and `testing-library` for unit test.

Airbnb eslint for linting and analyze the code.

And at the end, I wrote a GitHub actions to build Android signed apk automatically after every pushed commit.

Note : The Api has daily rate limit.`https://free.currconv.com/api`

## Demo

#### PWA
http://maxghafori.github.io/currency-exchange

## Run Locally

Clone the project and then in project directory


```bash
  yarn install
```

### PWA
with expo cli
```bash
  expo start:web
```


### iOS
first
```bash
  cd ios && pod install
```

then run
```bash
  yarn ios
```

### Android
for run on an android device/simulator :
```bash
  yarn android
```
#### if you get  `SDK location not found` error :
you should set these variables :

`sdk.dir=YOUR SDK PATH` at `android/local.properties`.

`org.gradle.java.home=YOUR JDK PATH` at `android/gradle.properties`.



## Tech Stack

React Native, Expo, TypeScript,Styled Component, React Query, Github Action.



## Authors

- [Mohsen Ghafori](https://www.github.com/maxghafori)

  
