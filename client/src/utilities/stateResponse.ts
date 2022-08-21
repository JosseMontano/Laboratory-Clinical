const stateResponse = (res: Response) => {
    console.log(res);
    if (res.status === 200) {
      alert("ok");
    } else {
      alert("algo salio mal");
    }
}
export default stateResponse