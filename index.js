function init() {
    window.addEventListener("keydown",(event)=> {
        // console.log(event.key,event.ctrlKey,event.shiftKey)
        if((event.key === "c" || event.key === "C") && event.ctrlKey && event.altKey) {
            calOlderThanYoung_worker()
        }
    })
}

async function calOlderThanYoung_worker() {
    // console.log(document.getElementById("table").querySelectorAll("#members+tbody tr:not(.empty-row) .member_name"))
    const allPeopleNode = document.getElementById("table").querySelectorAll("#members+tbody tr:not(.empty-row) .member_name")
    for(const person of allPeopleNode) {
        await checkIsAboveAge(person)
    }
}

async function checkIsAboveAge(person) {
    person.click()

    await timeDelay(500)

    const baseDom = document.getElementById('saint-panel')
    const santName = baseDom.querySelector('#member_name').value
    const birthYear = baseDom.querySelector("[name=year_of_birth]").value
    if(birthYear < 1986) {
        console.log('七會所 ' + santName + " 超過青職年齡，他/她是 " + birthYear + " 生的。")
    }

    await timeDelay(500)

    document.getElementById('saint-panel').querySelector('.close').click()

    await timeDelay(500)


}

function timeDelay(timeDelay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('')
        },timeDelay)
    })
}

init()