let inputOne = document.querySelector(".inputOne");
let btnSub = document.querySelector(".btnSub");
let list = document.querySelector(".list")
let delAll = document.querySelector(".delAll")
let btnUp = document.querySelector(".btnUpdate")
let updateText

let arr = []
function test() {
    list.innerHTML = ""
    arr.map((item, index) => {
        list.innerHTML += `<li>${index} ${item.name} <button data-index=${index} class="btnDel">delete</button> <button data-index=${index} class="btnEdt">edit</button> </li>`
    })
    let btnDelete = document.querySelectorAll(".btnDel")
    let btnEdit = document.querySelectorAll(".btnEdt")

    let delArr = Array.from(btnDelete);
    let edtArr = Array.from(btnEdit);
    delArr.map((item) => {
        item.addEventListener("click", () => {
            arr.splice(item.dataset.index, 1)
            test()
        })

    })
    edtArr.map((item, index) => {
        item.addEventListener("click", () => {
            btnSub.style.display = "none"
            btnUp.style.display = "inline-block"
            inputOne.value = arr[item.dataset.index].name
            updateText = index
        })
    })
}
btnSub.addEventListener("click", () => {
    arr.push({
        name: inputOne.value
    })
    test()
})

btnUp.addEventListener("click", () => {

    arr[updateText].name = inputOne.value
    test()
})

delAll.addEventListener("click", () => {
    list.innerHTML = ""
    arr.length = 0
    inputOne.value = ""
})

