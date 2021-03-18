//  http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d849f74ae0d8e55dd10666a12adfd084 

function getUrl(town){
    let url1 = 'http://api.openweathermap.org/data/2.5/weather?q='
    
    let url2 = '&APPID=d849f74ae0d8e55dd10666a12adfd084'
    
    return url1+town+url2
}

let anapa = document.querySelector('#anapa')
let male = document.querySelector('#male')
let paris = document.querySelector('#paris')
let bangkok = document.querySelector('#bangkok')
let сairo= document.querySelector('#сairo')
let Urengoy= document.querySelector('#Urengoy')
let Washington= document.querySelector('#Washington')

let display = document.querySelector('.right')

paris.addEventListener('click', () => {
    let url = getUrl('Paris')
    getData(url)
})

male.addEventListener('click', () => {
    let url = getUrl('Male')
    getData(url)
})

anapa.addEventListener('click', () => {
    let url = getUrl('Anapa')
    getData(url)
})
bangkok.addEventListener('click', () => {
    let url = getUrl('bangkok')
    getData(url)
})
сairo.addEventListener('click', () => {
    let url = getUrl('Cairo')
    getData(url)
})
Urengoy.addEventListener('click', () => {
    let url = getUrl('Urengoy')
    getData(url)
})
Washington.addEventListener('click', () => {
    let url = getUrl('Washington')
    getData(url)
})

async function getData(url){

    let promise = await fetch(url)
    if (promise.ok) {

        let json = await promise.json()

        console.log(json)
        console.log(json.weather[0].main)
        console.log(json.name)

        let photo = '';
        if (json.weather[0].main == 'Clouds') {
            photo = '<img height="100px" src = "https://st.depositphotos.com/1000641/1387/i/600/depositphotos_13876018-stock-photo-cloud-and-blue-sky.jpg">';
        } else if (json.weather[0].main == 'Mist'){
            photo = '<img height="100px" src = "https://www.pnp.ru/upload/entities/2017/09/28/article/detailPicture/b8/0d/30/99/ae0d3c454db8ccf0f971e803e1c57b2b.jpg">';
        }
        else if (json.weather[0].main == 'Clear'){
            photo = '<img height="100px" src = "https://www.sostav.ru/articles/rus/2011/14.03/news/images/1prosto_logo.jpg">';
        }
        let fon='';
        if(json.name=='Anapa'){
            fon= '<img height="100px" src = "data:image/jpeg;base64,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">';}
        else if(json.name=='Paris'){
            fon= '<img height="100px" src = "data:image/jpeg;base64,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">';} 

        let temp = parseFloat(json.main.temp) - 273.15

        display.innerHTML = `
        <div>${photo}</div>
        <div>${fon}</div>
        <div> Скорость ветра: ${json.wind.speed} м/с </div>
        <div> Температура: ${temp.toFixed(2)} C </div>
        `
    }
}


