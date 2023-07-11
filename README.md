# sk_electlink_test

SK 일렉링크 과제

## 제출자 정보

- 지원 포지션 : 사용자 앱 개발자
- 제출자 : 김례원

## 사용 라이브러리

- React Native : 0.72.1
- Redux : 8.1.1
- Redux Saga : 1.2.3
- Redux Persist : 6.0.0
- React Navigation : v6
  - Naitve
  - Bottom Tabs
  - Stack
- React Native FastImage
- Lottie React Native
- TypeScript
- 그 외 : eslint, prettier, axios

---

## 구현 기능

| 구현 기능                                                                                  |           화면           |
| :----------------------------------------------------------------------------------------- | :----------------------: |
| Lottie 적용1(Splash)                                                                       |  ![Alt text](image.png)  |
| Lottie 적용2(Loading)                                                                      | ![Alt text](image-1.png) |
| Bottom Tab                                                                                 | ![Alt text](image-2.png) |
| Flicking 가로 배너                                                                         | ![Alt text](image-1.png) |
| 세로 무한 스크롤                                                                           | ![Alt text](image-3.png) |
| Stack Navigation을 활용한 상세 페이지 이동 <br> (홈 화면의 배너 클릭 시 상세화면으로 이동) | ![Alt text](image-4.png) |
| 공통 헤더                                                                                  | ![Alt text](image-5.png) |

---

## 프로젝트 구조

- src
  - assets
    - images
    - lottie
  - components
    - CustomHeader
    - Loadng
  - container
    - Store
    - ChargingStation
    - Home
    - My
    - Total
  - navigators
    - CustomTabBar
    - BottomNavigator.tsx
    - MainNavigator.tsx
    - RootNavigator.tsx
  - sagas
    - CommonSaga.ts
    - ChargingStationSaga.ts
    - HomeSaga.ts
    - index.ts
  - stores
    - Common
    - ChargingStation
    - Home
    - CreateStore.ts
    - index.ts
  - services
    - Axios.ts
    - NavigationService.ts
    - UserService.ts
