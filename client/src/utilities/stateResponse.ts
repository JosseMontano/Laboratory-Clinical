const stateResponse = (res: Response) => {
  if (res.status != 200) {
    return "";
  }
  return "index";
};
export default stateResponse;
