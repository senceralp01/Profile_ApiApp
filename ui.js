class UI {
    constructor() {
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <b>Name</b>: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                <b>Username</b>: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                <b>Email</b>: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                <b>Address</b>: ${profile.address.street}, ${profile.address.suite}, ${profile.address.zipcode}, ${profile.address.city}
                            </li>
                            <li class="list-group-item">
                                <b>Phone</b>: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                <b>Website</b>: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                <b>Company</b>: ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4">Todo List</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>
            </div>

        `;

    }

    showAlert(text) {
        this.alert.innerHTML = `${text} is not found!`;
    }

    showTodo(todo){
        // console.log(todo[0]);

        let html = "";

        todo.forEach(item => {
            if(item.completed){
                html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            }else{
                html += `
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>
                `;
            }

        });

        this.profileContainer.querySelector("#todo").innerHTML = html;

    }

    clear(){
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}