
const container = document.querySelector("#div")
const btn = document.querySelector("#btn")
const element1 = document.querySelector(".el-1")
const element2 = document.querySelector(".el-2")
const element3 = document.querySelector(".el-3")
// const element4 = document.querySelector(".el-4")


let numb = 1

const addImages = function addPictures() {
    fetch(`https://pixabay.com/api/?key=44002611-c1194520823d769ac47082ab5&per_page=9&page=${numb}`)
    .then(response => response.json())
    .then(pic => {

        element1.insertAdjacentHTML("beforeend", `
        <img src="${pic["hits"][0]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][1]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][2]["previewURL"]}" alt="" width="250px">`)
        element2.insertAdjacentHTML("beforeend", `
        <img src="${pic["hits"][3]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][4]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][5]["previewURL"]}" alt="" width="250px">`)
        element3.insertAdjacentHTML("beforeend", `
        <img src="${pic["hits"][6]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][7]["previewURL"]}" alt="" width="250px">
        <img src="${pic["hits"][8]["previewURL"]}" alt="" width="250px">`)

    })
    numb+=1
}

btn.addEventListener("click", addImages)