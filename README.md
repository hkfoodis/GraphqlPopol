# GraphqlPopol
- GraphQL을 통한 음식주문시스템

## 개발 환경
- Database: MariaDB: db.t2.micro

- KindService, RestaurantService, MenuService, Web: Java Spring

- Apollo Gateway: JavaScript

## GraphQL Schema
<img src = "https://user-images.githubusercontent.com/43229125/103976403-04ba0980-51ba-11eb-8657-6f990f8af695.png" width="40%">

## 서비스 구조
<img src = "https://user-images.githubusercontent.com/43229125/103975810-6bd6be80-51b8-11eb-8caf-64a0fd69d1d5.png" width="40%">

## 실행방법
- KindService
```
  java -jar graphQL-Kind-0.0.1-SNAPSHOT.war
```
  
- RestaurantService
```
  java -jar graphQL-Restaurant-0.0.1-SNAPSHOT.war
```

- MenuService
```
  java -jar graphQL-Menu-0.0.1-SNAPSHOT.war
```

- Apollo Gateway
```
  node gateway.js
``` 

- Web
```
  java -jar graphQL-Web-0.0.1-SNAPSHOT.war
```
