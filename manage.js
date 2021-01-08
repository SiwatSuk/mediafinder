export default class Manage{
    appendImageElem(keyword, index){
        const imgElem = document.createElement('img')
        imgElem.src = `source.unsplash.com/800x600/?${keyword}&sig=${index}`
        const galleryElem = document.querySelector('.gallery')
        galleryElem.appendChild(imgElem)
    }
    removePhotos(){
        const galleryElem = document.querySelector('.gallery')
        galleryElem.innerHTML = ""

    }
    searchPhotos(event){
        const keyword = event.target.value
        if (event.key === 'Enter' && keyword){
            // this.removePhotos()
            // loop รูปภาพมาแสดงผล
            for (let i=1; i<=9;i++){
                this.appendImageElem(keyword, i)
            }
        }
    }
}