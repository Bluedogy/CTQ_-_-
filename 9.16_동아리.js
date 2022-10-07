async function getData() {
  // /articles 테스트 API
  const url =
    'https://gist.githubusercontent.com/amclio/4e6e0fb70de41ba96352953db02c2bd9/raw/9af50fad775a0e496ae01abded66746488965f05/articles'
  const response = await fetch(url, {
    /* POST일 경우 아래에 'POST'라고 넣기 */
    method: 'GET',
  })

  const data = await response.json()
  return data
}

async function createList(data) {
  const list = document.querySelector('#list')
 const template = document.querySelector('#template')

  // 데이터가 배열일 때
  for (let i = 0; i < data.length; i++) {
    const article = data[i]
    console.log(article, i)
    console.log(template, i)

    // 아이템 안에 텍스트를 넣습니다.
    template.querySelector('.title').innerHTML = '제목: ' + article.title
    template.querySelector('.article').innerHTML = '내용: ' + article.content
   template.querySelector('.person').innerHTML = '유저 아이디: ' + article.userId
    
    const clonedTemplate = template.cloneNode(true)
    // 생성한 요소를 <li> 태그 안에 넣습니다.
    list.appendChild(clonedTemplate)
}
}

async function loadList() {
  const data = await getData()
  await createList(data)
}

// 페이지가 다 로드되면 loadList 함수 호출
window.addEventListener('load', loadList)