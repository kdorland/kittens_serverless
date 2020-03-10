export async function handler(event, context) {
    const data = [{
        "hobbies": ["sleeping", "purring", "people watching", "eating"],
        "_id": "5dd648db675c47c05217a15b",
        "name": "Tom"
    }, {
        "hobbies": ["people watching", "purring", "eating", "sleeping", "asdf"],
        "_id": "5dd648db675c47c05217a15c",
        "name": "Garfield"
    }, {
        "hobbies": ["purring", "asfd"],
        "_id": "5dd648db675c47c05217a15d",
        "name": "Felix",
    }, {
        "hobbies": ["sleeping"],
        "_id": "5dd648db675c47c05217a15e",
        "name": "Tom"
    }];

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}