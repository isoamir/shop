const useresCont = document.querySelector(".add-cart")

window.addEventListener("load" , () => {
    fetch("https://shop-add2-default-rtdb.firebaseio.com/user.json/")
    .then(res => res.json())
    .then(data => {
        let UserData = Object.entries(data)

        UserData.forEach(user => {
            useresCont.insertAdjacentHTML("beforeend" ,
                ` <div class="amir" >
            <img src="./${user[1].Tamneel}" alt="">
            <h1>${user[1].Title}</h1>
            <p>${user[1].Description}</p>
             <h2>${user[1].Price}</h2>
              <h2>${user[1].Number1}</h2>
            <button type="button" >Buy</button>
        </div>
                `
            )
        })
    })
})