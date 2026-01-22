let getDate = async () => {
    const res = await fetch ('https://6968880169178471522ac04b.mockapi.io/jebesoft/users')
    const date = await res.json()
    console.log(date)


    const h1 = document.createElement('h1')
    h1.innerText = date[0].sms
    document.body.append(h1)
}

getDate()