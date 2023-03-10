
async function mySave(e) {

    try{

    e.preventDefault();

    console.log(e.target.expense.value);

    const expenses = {
        expense: e.target.expense.value,
        description: e.target.description.value,
        category: e.target.category.value,
        userId: 1
    }

    const response = await axios.post("http://localhost:3000/expense/addExpense", expenses);
    console.log(response);
        showUser(response.data.data);

    }

    catch(err) {
        console.log(err);
    }

}

window.addEventListener("DOMContentLoaded", async () => {

    try {
        
        const response = await axios.get(`http://localhost:3000/expense/getExpense`);
        console.log(response);

        response.data.data.forEach(expense => {
            showUser(expense);
        })
    }

    catch(err)  {
        console.log(err);

    }

})

   



function showUser(user) {

    const parentNode = document.getElementById("listOfUsers");
    const childHTML = `<li style="text-decoration: none; font-weight: bold; color: black;;  padding-top: 7px; width: 500px; height: 50px; margin-top: 20px; text-align: left;" id=${user.id}>${user.expense} ${user.description} ${user.category}
              
              <button style="background-color: #00d1b2; border-radius: 10%; border: 2px solid #00d1b2; color: white;" onclick=deleteUser('${user.id}')>delete</button>
              <button style="background-color: #00d1b2; border-radius: 10%; border: 2px solid #00d1b2; color: white;" onclick=editUser('${user.expense}','${user.description}','${user.category}','${user.id}')>Edit the User </button>

            </li>`;

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
}

async function deleteUser(userId){

    try {
    
        const response = await axios.delete(`http://localhost:3000/expense/deleteExpense/${userId}`);
            
            console.log(response);
            removeuser(userId);

    }

    catch(err) {
        console.log("error");
        console.log(err);
    }

}

function removeuser(userId){

    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(userId);
  
    parentNode.removeChild(childNodeToBeDeleted);
  
}


function editUser(expense, description, category, id) {

    document.getElementById("description").value = description;
    document.getElementById("category").value = category;
    document.getElementById("expense").value = expense;
    deleteUser(id);

}




