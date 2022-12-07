export async function fetchData(numberOfCards) {
    let response, json
   
    try {
        response = await fetch('https://jsonplaceholder.typicode.com/photos')
    } catch (e) {
        console.error('Could not fetch ' + e)
        return
    }

    try {
        json = await response.json()
    } catch (e) {
        console.error('Could not read json from response ' + e)
        return
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
