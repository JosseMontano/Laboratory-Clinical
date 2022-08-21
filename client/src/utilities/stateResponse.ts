
const stateResponse = (res: Response) => {
    if (res.status != 200) {
        alert("algo salio mal");
        return 'login'
    } 
    alert("ok");
    return 'index'
}
export default stateResponse