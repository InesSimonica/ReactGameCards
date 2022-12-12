export const fetchData = async (numberOfCards) => {
    let json

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        json = await response.json()
    } catch (error) {
        return error
    }

    const collectedData = json.slice(0, numberOfCards)

    return collectedData.map((element) => {
        const collectedTitle = element.title
        const shortenedTitle = collectedTitle.split(' ')[0].toUpperCase() 
        return {
        id: element.id, 
        title: shortenedTitle, 
        url: element.url,
        description: element.title
        }
    })
}

export const fetchDataById = async (id) => {
    let json

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
        json = await response.json()
    } catch (error) {
        return error
    }
    return json.title
}
