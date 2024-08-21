const header = document.getElementById("header");
const headerHome = document.getElementById("header-home");
const headerNews = document.getElementById("header-news");
const headerFooter = document.getElementById("header-footer");
const topic = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const Loader = document.getElementById('loader');

window.addEventListener("load", ()=>{
    Loader.style.display = "none";
})

header.addEventListener("mouseover", () => {
    if(window.innerWidth > 768)
    {
        headerHome.style.display = "block";
        headerNews.style.display = "block";
        headerFooter.style.display = "block";
    }
})
header.addEventListener("mouseout", () => {
    if(window.innerWidth > 768)
    {
        headerHome.style.display = "none";
        headerNews.style.display = "none";
        headerFooter.style.display = "none";
    }
    
})

$(document).ready(function(){

    $(window).scroll(function(){
       if($(window).scrollTop() >= 20){
           $('.header-1').addClass('active');
       }else{
           $('.header-1').removeClass('active');
       }
   })
 })


const newsImage = document.getElementsByClassName('news-image');
const newsTitle = document.getElementsByClassName('title');
const moreInfo = document.getElementsByClassName('more-info');

async function fetchNews(headline){
    const url = 'https://newsapi.org/v2/everything?' +
        'q='+ 
        headline +'&'+
        'apiKey=077d071b28eb4e8db8f317ad151952d8';

    let i = 0;
    let j = 0;
    try{
        const response = await fetch(url);
        const result = await response.json();
        const data = result['articles'];
        for(i; i < data.length; i++){
            // if(data[i]['urlToImage'] == null){
            //     newsImage[i].src = '../AtulyaBharat website/canoeing.jpg';
            // }
            // else{
            //     newsImage[i].src = data[i]['urlToImage'];
            // }
            // newsTitle[i].innerHTML = data[i]['title'];
            // moreInfo[i].href = data[i]['url'];
            if(data[i]['urlToImage'] != null){
                newsImage[j].src = data[i]['urlToImage'];
                newsTitle[j].innerHTML = data[i]['title'];
                moreInfo[j].href = data[i]['url'];
                j++;
            }
            else{
                continue;
            }
        }
    }
    catch(error){
        console.log(error);
    }
    
}
fetchNews('trending india news');

searchButton.addEventListener('click', () => {
    const slide = document.getElementsByClassName('towards-news-section');
    const headlineText = document.getElementById('topic-headline');
    if(topic.value == ''){
        window.alert("please enter a topic.");
    }
    else{
        
        headlineText.innerHTML = 'Search result for '+ topic.value + '🔥:';
        fetchNews(topic.value);
        slide.href = '#news';
    }
})