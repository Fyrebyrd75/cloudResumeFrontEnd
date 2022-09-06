const get_visit_count_URL = 'https://1guc9sr3g7.execute-api.us-east-1.amazonaws.com/get_visit_count'
const increment_count = 'https://1guc9sr3g7.execute-api.us-east-1.amazonaws.com/increment_visitor_counter'
const count_element = document.getElementById('count');
const data = {'body':'visit_count'}
 
function updateVisitCount(){
    fetch(increment_count,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => console.log('Success', data))
    }
 
function displayVisitCount(){

    fetch(get_visit_count_URL)
    .then((response) => response.json())
    .then((response) => {
        count_element.innerHTML = response[0]
    });
}
updateVisitCount();
displayVisitCount(); 