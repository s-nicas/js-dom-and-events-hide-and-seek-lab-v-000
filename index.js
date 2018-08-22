function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function deepestChild(){
  let grand = document.querySelector('#grand-node')
  return grand.children[0].querySelector('div div div div div')
}


function increaseRankBy(n){
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children

    for (let j = 0; j< children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
