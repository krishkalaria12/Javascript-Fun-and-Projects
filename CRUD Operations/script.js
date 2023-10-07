document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let msg = document.getElementById("msg");
    let posts = document.getElementById("posts");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("button clicked");

        formValidation();
    });

    let formValidation = () => {
        if (input.value === "") {
            msg.innerHTML = "Post cannot be blank";
            console.log("failure");
        } else {
            console.log("success");
            msg.innerHTML = "";
            acceptData();
        }
    };

    let data = {};

    let acceptData = () => {
        data["text"] = input.value;
        console.log(data);
        createPost();
    };

    let createPost = () => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <p>${data.text}</p>
            <span class="options">
                <i class="fas fa-edit edit-post"></i>
                <i class="fas fa-trash-alt delete-post"></i>
            </span>
        `;

        const editIcon = postElement.querySelector(".edit-post");
        const deleteIcon = postElement.querySelector(".delete-post");

        editIcon.addEventListener("click", (e) => editPost(e));
        deleteIcon.addEventListener("click", (e) => deletePost(e));

        posts.appendChild(postElement);

        input.value = "";
    };

    let deletePost = (e) => {
        e.target.parentElement.parentElement.remove();
    };

    let editPost = (e) => {
        input.value = e.target.parentElement.previousElementSibling.textContent;
        e.target.parentElement.parentElement.remove();
    };
});
