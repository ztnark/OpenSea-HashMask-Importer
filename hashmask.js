const fetchData = () => {
  let elements = Array.prototype.slice.call(document.getElementsByClassName('AssetSearchList--asset'));
  elements.forEach((el) => {
    let id = el.childNodes[0].href.split("/")[5];
    let adjustedId = Number(id) - 6243 < 0 ? Number(id) - 6243 + 16384 : Number(id) - 6243;
    if(el.querySelector('.link')) {
      el.querySelector('.link').remove();
    }
    var link = document.createElement("div");
    link.setAttribute("data-link","https://www.thehashmasks.com/detail/" + id);
    link.setAttribute("class","link");
    link.style.color = "blue";
    link.style.textDecoration = "underline";
    link.append(" Id: " + id);
    el.querySelector('.Asset--name').append(link);
    el.querySelector('.Image--image').setAttribute('src','https://hashmasksstore.blob.core.windows.net/hashmaskspreview/' + adjustedId + '.png');
  })  

  if(document.querySelector('.item--large')){
    let id = window.location.pathname.split("/")[3];
    let adjustedId = Number(id) - 6243 < 0 ? Number(id) - 6243 + 16384 : Number(id) - 6243;
    document.querySelector('.item--large').querySelector('.Image--image').setAttribute('src','https://hashmasksstore.blob.core.windows.net/hashmaskspreview/' + adjustedId + '.png');
  }
}

document.addEventListener("click", (e) => {
  e.preventDefault();  
  if(e.target.getAttribute("class") === "link"){
    var win = window.open(e.target.getAttribute("data-link"), '_blank');
    win.focus();
  }
})

fetchData();

setInterval(() => {
  fetchData();
}, 1000);