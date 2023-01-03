export async function submitter(data) {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        if(response.ok) {
            alert('Data is submitted successfully');
        } else {
            alert(`Submitting data is failed. Error: ${response.status}`)
        }
    }
