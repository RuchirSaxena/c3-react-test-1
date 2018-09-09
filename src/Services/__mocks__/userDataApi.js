/**
 * For Mocking Api Calls used fake data and returning Promise with fakeData
 */
const fakeData = {
    "page": 1,
    "per_page": 10,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
            "id": 1,
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        }
    ]
}
//mocking api call 
export const userDataApi = async (url) => {
    return await new Promise(resolve => {
        resolve(fakeData);
    });
};


