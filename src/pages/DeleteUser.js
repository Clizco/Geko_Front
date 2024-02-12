const DeleteUserData = () => {
        fetch("http://localhost:1500/account/delete/", {
            method: 'DELETE',
            })
            .then ((res) => res.json())
            .then(res => console.log(res))
    }
export default DeleteUserData;