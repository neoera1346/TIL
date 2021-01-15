// ! 아래는 SQL Commands와 Schema 관련한 연습문제들 모음이다.

// TODO: Q 3-1. 현재 있는 데이터베이스에 존재하는 모든 테이블 정보를 보기위한 SQL을 작성해주세요.
const PART3_1 = 'Show databases';

// TODO: Q 3-2. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART3_2 = `Desc user`;
// desc, describe 모두 가능하다.

// TODO: Q 3-3. content 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART3_3 = `Desc content`;

// TODO: Q 4-1. user 테이블에 존재하는 모든 컬럼을 포함한 모든 데이터를 확인하기 위한 SQL을 작성해주세요.
const PART4_1 = 'Select * from user';

// TODO: Q 4-2. user 테이블에 존재하는 모든 데이터에서 name 컬럼만을 확인하기 위한 SQL을 작성해주세요.
const PART4_2 = `Select name from user`;

// TODO: Q 4-3. user 테이블에 데이터를 추가하기 위한 SQL을 작성해주세요.
// ? 원하는 name, email을 사용하시면 됩니다.
const PART4_3 = `Insert into user(name, email) values ('Geonha', 'lgh96920@gmail.com')`;
// `INSERT INTO [TableName](ColumnName) VALUES ('[Values]')`를 기억하자.

// TODO: Q 4-4. user 테이블에서 특정 조건을 가진 데이터를 찾기위한 SQL을 작성해주세요.
// ? 조건 : name이 duhyunkim이여야 합니다.
const PART4_4 = `Select * from user where name = 'duhyunkim'`;
// 특정 조건은 WHERE로 줄 수 있다.

// TODO: Q 4-5. user 테이블에서 특정 조건을 가진 데이터를 찾기위한 SQL을 작성해주세요.
// ? 조건 : name이 duhyunkim이 아니여야 합니다.
const PART4_5 = `Select * from user where not name = 'duhyunkim'`;
// 특정 조건으로 찾을 때, ~ 가 아닌 것을 찾는 경우, NOT이 WHERE 뒤에 온다.

// TODO: Q 4-6. content 테이블에 존재하는 모든 데이터에서 title 컬럼만을 찾기 위한 SQL을 작성해주세요.
const PART4_6 = `Select title from content`;

// TODO: Q 4-7. content의 title과 그 컨텐츠를 작성한 user의 name을 찾기 위한 SQL을 작성해주세요.
// ? 저자가 없더라도, 켄턴츠의 title을 모두 찾아야합니다.
const PART4_7 = `Select a.title, b.name from content a left join user b on a.userID=b.id`;
// SELECT ~ FROM ~ LEFT JOIN ~ ON
// Table 다음에 알파벳이나 다른 별칭을 적어줌으로서 이름을 변경해줄 수 있다.

// TODO: Q 4-8. content의 title과 그 컨텐츠를 작성한 user의 name을 찾기 위한 SQL을 작성해주세요.
// ? 저자가 있는 컨텐츠의 title만 찾아야합니다.
const PART4_8 = `Select a.title, b.name from content a left join user b on a.userid=b.id where b.name is not null`;

// TODO: Q 4-9. content의 데이터를 수정하기 위한 SQL을 작성해주세요.
// ? title이 database sprint인 content 데이터에서 body를 database is very easy로 수정해야합니다.
const PART4_9 = `Update content set body='database is very easy' where title='database sprint'`;
// UPDATE [테이블명] SET [행이름]='[변경후이름]' WHERE [조건]

// TODO: Q 4-10. content의 데이터를 추가하기 위한 SQL을 작성해주세요.
// ? duhyunkim이 작성한 컨텐츠를 추가해주세요. 제목과 본문은 자유입니다. (참고: duhyunkim의 아이디는 1입니다.)
const PART4_10 = `Insert into content(title, body, userId) values ('database sprint', 'database is very easyyy', 1)`;

// TODO: Q 5-1-1. category 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART5_1_1 = `Desc category`;

// TODO: Q 5-1-2. content_category 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART5_1_2 = `Desc content_category`;

// TODO: Q 5-1-3. role 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART5_1_3 = `Desc role`;

// TODO: Q 5-1-4. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
const PART5_1_4 = `Desc user`;

// TODO: Q 5-2-1. category 테이블에 존재하는 데이터에서 id, name을 찾는 SQL을 작성해주세요.
const PART5_2_1 = `Select id, name from category`;

// TODO: Q 5-2-2. user의 name과 email 그리고 그 user가 속한 role name(컬럼명: roleName)을 찾기 위한 SQL을 작성해주세요.
// ? 속한 role이 없더라도, user의 name과 email,role name을 모두 찾아야합니다.
const PART5_2_2 = `Select a.name, a.email, b.name as roleName from user a left join role b on a.roleId = b.id`;

// TODO: Q 5-2-3. 어느 role에도 속하지 않는 user의 모든 컬럼 데이터를 찾기위한 SQL을 작성해주세요.
const PART5_2_3 = `Select * from user where roleId is null`;

// TODO: Q 5-2-4. content_category 테이블에 존재하는 모든 칼럼의 데이터를 찾기위한 SQL을 작성해주세요.
const PART5_2_4 = `Select * from content_category`;

// TODO: Q 5-2-5. jiSungPark이 작성한 content의 title을 찾기위한 SQL을 작성해주세요.
const PART5_2_5 = `Select a.title from content a join user b on a.userId=b.id where b.name='jiSungPark'`;

// TODO: Q 5-2-6. JiSungPark이 작성한 content의 category name을 찾기위한 SQL을 작성해주세요.
const PART5_2_6 = `Select a.name from category a join content_category b ON a.id = b.categoryId join content c ON b.contentId = c.id join user d ON c.userId = d.id where d.name ='jiSungPark';`;

// TODO: Q 5-2-7. category의 name이 soccer인 content의 title, body, created_at을 찾기위한 SQL을 작성해주세요.
const PART5_2_7 = `Select a.title, a.body, a.created_at from content a join content_category b ON a.id = b.contentId join category c ON b.categoryId = c.id where name ='soccer';`;

// TODO: Q 5-2-8. category의 name이 soccer인 content의 title, body, created_at, user의 name을 찾기위한 SQL을 작성해주세요.
const PART5_2_8 = `Select a.title, a.body, a.created_at, b.name from content a join user b on a.userId=b.id join content_category c on a.id=c.contentId join category d on c.categoryId=d.id where d.name ='soccer'`;

// TODO: Q 5-2-9. duRiCha가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
const PART5_2_9 = `Select count(a.id) as ContentCount from content a join user b on a.userId=b.id where b.name='duRiCha'`;

// TODO: Q 5-2-10. 각 user(컬럼명: name)가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
const PART5_2_10 = `Select a.name, count(b.id) as ContentCount from user a left join content b on a.id=b.userId group by a.name`;