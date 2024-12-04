import { expect, test } from "@chromatic-com/playwright";

test.describe("에세이 리스트 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("accessToken", "token");
    });
    await page.goto("http://localhost:5173/essays");

    await page.route(
      "https://linkedoutapp.com/api/admin-management/essays?page=1&limit=10",
      (route) =>
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            data: {
              essays: [
                {
                  id: 47,
                  title: "2024..11.23",
                  content:
                    "<p>2024년도 이제 한달정도 남았다.. 올해에는 특별한 사건없이 무난하게 흘러갔다.</p><p>밖에는 크리스마스가 곧 다가오다보니.. 크리스마스 트리가 한창이다.</p><p>놀러가고 싶은데.. 집에서 코딩이랑 게임만 하다보니 트렌드에 뒤쳐졌다..</p><p>놀러갈곳 추천해주는 ai가 있으면 참 좋을것 같다.</p><p>함만들어 볼까낫!!</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-23T22:50:02.103+09:00",
                  updatedDate: "2024-11-23T22:50:02.103+09:00",
                  thumbnail: null,
                  views: 0,
                  status: "published",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 46,
                  title: "2024..11.23",
                  content:
                    "<p>2024년도 이제 한달정도 남았다.. 올해에는 특별한 사건없이 무난하게 흘러갔다.</p><p>밖에는 크리스마스가 곧 다가오다보니.. 크리스마스 트리가 한창이다.</p><p>놀러가고 싶은데.. 집에서 코딩이랑 게임만 하다보니 트렌드에 뒤쳐졌다..</p><p>놀러갈곳 추천해주는 ai가 있으면 참 좋을것 같다.</p><p>함만들어 볼까낫!!</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-23T22:50:01.922+09:00",
                  updatedDate: "2024-11-23T23:01:53.699+09:00",
                  thumbnail: null,
                  views: 0,
                  status: "published",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 45,
                  title: "2024-11-22 GeulRoquis",
                  content: "<p>업데이트 하러왔어요옹</p>",
                  linkedOutGauge: 5,
                  createdDate: "2024-11-22T21:27:08.408+09:00",
                  updatedDate: "2024-12-05T00:54:00.351+09:00",
                  thumbnail: null,
                  views: 1,
                  status: "published",
                  location: null,
                  author: {
                    id: 4,
                    nickname: "공일사",
                    email: "kkhyungyung0@naver.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/service/profile_icon_01.png",
                    birthDate: null,
                    platform: "naver",
                    platformId: "tBIxKJ0_Kg_r14IXbGtm5HfUD0d0blmzeVZQK_MnLiA",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-05T13:57:26.982Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 44,
                  title: "<가을날>ㅡ헤르만 헤세ㅡ",
                  content:
                    "<p>숲 가의 가지들&nbsp;금빛에 타오를 때</p><p>나는 홀로 길을 갑니다</p><p>사랑하는 이와 함께</p><p>몇 번이나 둘이서 걸었습니다</p><p>&nbsp;</p><p>이 좋은 날에</p><p>오랫 동안 마음에 지니고 있던</p><p>행복도 슬픔도 나에게서</p><p>이제 먼 향기 속으로 사라졌습니다</p><p>&nbsp;</p><p>잔디풀 태우는 연기 속에서</p><p>농부의 아이들이 뛰어 놉니다</p><p>거기 나도 끼어들어 어린이와 더불어</p><p>가락 맞춰 노래 합니다</p><p><br></p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-22T16:20:20.851+09:00",
                  updatedDate: "2024-11-22T16:20:20.851+09:00",
                  thumbnail: null,
                  views: 0,
                  status: "linkedout",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 43,
                  title: "2024-11-20 GeulRoquis",
                  content:
                    "<p>신발속에 들어온 작은 돌 하나는 하루종일 걷는다해도 익숙해지지않는다&period;</p><p>신발이 가져다주는 당연하다고 여기는 편안함을 잊게만들기 충분하다&period; 돌을 마침내 빼냈을 때&comma; 신발의 편안함을 다시 한 번 느끼게된다&period; 가끔은 신발 속에 들어온 자그마한 돌을 너무 미워하진 말아야할 것이다&period;</p>",
                  linkedOutGauge: 5,
                  createdDate: "2024-11-20T21:57:07.628+09:00",
                  updatedDate: "2024-12-05T00:54:00.351+09:00",
                  thumbnail: null,
                  views: 1,
                  status: "published",
                  location: null,
                  author: {
                    id: 2,
                    nickname: "이팔일",
                    email: "kitoram@naver.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/service/profile_icon_01.png",
                    birthDate: null,
                    platform: "kakao",
                    platformId: "3777735277",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-04T01:52:07.066Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 42,
                  title: "속마음 -이경아",
                  content:
                    "<p>아무&nbsp;말도&nbsp;하지&nbsp;않는다고&nbsp;해서</p><p>가슴까지&nbsp;침묵하고&nbsp;있는&nbsp;것은&nbsp;아닙니다.</p><p>분위기가&nbsp;늘&nbsp;잔잔하다고&nbsp;하여</p><p>마음이&nbsp;항상&nbsp;평화로운&nbsp;것은&nbsp;아닙니다.</p><p><br></p><p>주저없이&nbsp;무너뜨리고&nbsp;다시&nbsp;세우는</p><p>아주&nbsp;많은&nbsp;예습과&nbsp;복습을&nbsp;하며</p><p>끊임없이&nbsp;사랑을&nbsp;닮으려는&nbsp;노력으로</p><p>내&nbsp;밖으로&nbsp;내가&nbsp;나올&nbsp;짬이&nbsp;없는&nbsp;것입니다.</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-15T18:09:47.479+09:00",
                  updatedDate: "2024-12-05T00:54:00.351+09:00",
                  thumbnail: null,
                  views: 1,
                  status: "public",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 41,
                  title: "바람 속에 핀 꽃 -김옥림",
                  content:
                    "<p>그대&nbsp;눈물짓지&nbsp;말아요</p><p>삶이란&nbsp;때론&nbsp;눈물&nbsp;같은&nbsp;것</p><p><br></p><p>그대&nbsp;한숨&nbsp;짓지&nbsp;말아요</p><p>그리움이란&nbsp;때론&nbsp;한숨&nbsp;같은&nbsp;것</p><p><br></p><p>그대&nbsp;쓸쓸함에&nbsp;떨지&nbsp;말아요</p><p>외로움은&nbsp;때론&nbsp;바람&nbsp;같은&nbsp;것</p><p><br></p><p>그러나&nbsp;바람&nbsp;속에서도&nbsp;꽃은&nbsp;피듯이</p><p><br></p><p>바람은&nbsp;바람인대로</p><p>구름은&nbsp;구름인대로</p><p>어찌&nbsp;그리도&nbsp;생각에&nbsp;젖는지요</p><p><br></p><p>바람&nbsp;속에서도</p><p>꽃은&nbsp;피고&nbsp;지듯</p><p>그렇게&nbsp;사는&nbsp;거예요</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-15T18:02:05.814+09:00",
                  updatedDate: "2024-12-03T17:45:41.386+09:00",
                  thumbnail:
                    "https://cdn.linkedoutapp.com/images/f389e79e-0973-43cc-9ad3-530730634cde",
                  views: 0,
                  status: "public",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 40,
                  title: "눈 - 윤동주",
                  content:
                    "<p>지난밤에</p><p>눈이 소복이 왔네</p><p><br></p><p>지방이랑 길이랑 밭이랑</p><p>추워한다고</p><p>덮어주는 이불인가 봐</p><p><br></p><p>그러기에 추운 겨울에만 내리지</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-15T17:55:37.776+09:00",
                  updatedDate: "2024-11-15T17:56:45.595+09:00",
                  thumbnail:
                    "https://cdn.linkedoutapp.com/images/bf857776-429f-4db5-b82b-7aea003bcab6",
                  views: 0,
                  status: "public",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 39,
                  title: "너에게 쓴다 -천양희",
                  content:
                    "<p>꽃이 피었다고 너에게 쓰고</p><p>꽃이 졌다고 너에게 쓴다.</p><p>너에게 쓴 마음이</p><p>벌써 길이 되었다.</p><p>길 위에서 신발 하나 먼저 다 닳았다.</p><p><br></p><p><br></p><p>너에게 쓴 마음이 벌써 내 일생이 되었다.</p><p>마침내는 내 생 풍화되었다.</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-15T17:52:39.174+09:00",
                  updatedDate: "2024-12-05T00:54:00.351+09:00",
                  thumbnail: null,
                  views: 1,
                  status: "published",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
                {
                  id: 38,
                  title: "끝끝내 - 나태주",
                  content:
                    "<p>너의 얼굴 바라봄이 반가움이다.</p><p>너의 목소리를 들음이 고마움이다.</p><p>너의 눈빛 스침이 끝내 기쁨이다.</p><p>끝끝내</p><p>너의 숨소리 듣고 네 옆에 </p><p>내가 있음이 그냥 행복이다.</p><p>이 세상 네가 살아있음이</p><p>나의 살아있음이고 존재이유다.</p>",
                  linkedOutGauge: 0,
                  createdDate: "2024-11-15T17:43:42.231+09:00",
                  updatedDate: "2024-11-15T17:43:42.231+09:00",
                  thumbnail: null,
                  views: 0,
                  status: "published",
                  location: null,
                  author: {
                    id: 1,
                    nickname: "리액트",
                    email: "dudgk0216@gmail.com",
                    gender: null,
                    profileImage:
                      "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                    birthDate: null,
                    platform: "google",
                    platformId: "114938737969974601044",
                    status: "activated",
                    subscriptionEnd: null,
                    createdDate: "2024-11-01T01:43:27.576Z",
                    updatedDate: "2024-12-04T15:54:00.351Z",
                    deletedDate: null,
                    isFirst: false,
                    locationConsent: true,
                  },
                },
              ],
              total: 47,
              page: 1,
              totalPage: 5,
            },
          }),
        })
    );
  });

  test("에세이 리스트 페이지를 보여준다.", async ({ page }) => {
    await expect(page.getByText("총 에세이 수 47")).toBeVisible();
  });

  test("에세이를 클릭하면 개별 페이지로 이동한다", async ({ page }) => {
    await page.click('a:has-text("47")');

    await page.goto("http://localhost:5173/essays/47");

    await expect(page).toHaveURL("http://localhost:5173/essays/47");
  });
});

test.describe("에세이 디테일 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("accessToken", "token");
    });
    await page.goto("http://localhost:5173/essays/47");

    await page.route(
      "https://linkedoutapp.com/api/admin-management/essays/47",
      (route) =>
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            data: {
              id: 47,
              title: "2024..11.23",
              content:
                "<p>2024년도 이제 한달정도 남았다.. 올해에는 특별한 사건없이 무난하게 흘러갔다.</p><p>밖에는 크리스마스가 곧 다가오다보니.. 크리스마스 트리가 한창이다.</p><p>놀러가고 싶은데.. 집에서 코딩이랑 게임만 하다보니 트렌드에 뒤쳐졌다..</p><p>놀러갈곳 추천해주는 ai가 있으면 참 좋을것 같다.</p><p>함만들어 볼까낫!!</p>",
              linkedOutGauge: 0,
              location: null,
              createdDate: "2024-11-23T22:50:02.103+09:00",
              updatedDate: "2024-11-23T22:50:02.103+09:00",
              thumbnail: null,
              views: 0,
              status: "published",
              author: {
                id: 1,
                email: "dudgk0216@gmail.com",
                nickname: "리액트",
                gender: null,
                profileImage:
                  "https://cdn.linkedoutapp.com/profile/eeb8b309-4138-4be9-829a-cde10e8cc5e9",
                birthDate: null,
                platform: "google",
                platformId: "114938737969974601044",
                status: "activated",
                reputation: 140,
                subscriptionEnd: null,
                createdDate: "2024-11-01T01:43:27.576Z",
                updatedDate: "2024-12-04T16:06:00.352Z",
                deactivationDate: null,
                deletedDate: null,
              },
              story: null,
              reports: [],
              reviews: [],
            },
          }),
        })
    );
  });
  test("에세이 디테일 페이지를 보여준다.", async ({ page }) => {
    await page.goto("http://localhost:5173/essays/47");

    await expect(page.getByText("작성자 ID")).toBeVisible();
    await expect(page.getByText("제목")).toBeVisible();
    await expect(page.getByText("내용")).toBeVisible();
  });
});
