// import Manage from './manage.js'
// let mng = new Manage()



function appendImageElem(keyword, index){
    const imgElem = document.createElement('img')
    imgElem.src = `https://source.unsplash.com/320x320/?${keyword}&sig=${index}`
    const galleryElem = document.querySelector('.gallery')
    galleryElem.appendChild(imgElem)
}
function removePhotos(){
    const galleryElem = document.querySelector('.gallery')
    galleryElem.innerHTML = ""

}
function searchPhotos(event){
    const keyword = event.target.value
    if (event.key === 'Enter' && keyword){
        removePhotos()
        // loop รูปภาพมาแสดงผล
        for (let i=1; i<=12;i++){
            appendImageElem(keyword, i)
        }
    }
}
function run(){
    const inputElem = document.querySelector('input')
    inputElem.addEventListener('keydown', searchPhotos)
}
run()