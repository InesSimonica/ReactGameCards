export async function fetchData(numberOfCards) {
    let json

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        json = await response.json()
    } catch (e) {
        return e
    }

    const collectedData = json.slice(0, numberOfCards)

    return collectedData.map((element) => {
        const collectedTitle = element.title
        // Getting only the first word of long title and converting to uppercase
        const shortenedTitle = collectedTitle.split(' ')[0].toUpperCase() 
        return {
        id: element.id, 
        title: shortenedTitle, 
        url: element.url,
        description: element.title
        }
    })
}

export async function fetchDataById(id) {
    let json

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
        json = await response.json()
    } catch (e) {
        return e
    }
    return json.title
}
