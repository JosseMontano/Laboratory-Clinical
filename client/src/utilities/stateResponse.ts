const stateResponse = (res: Response) => {
  if (res.status != 200) {
    return "login";
  }
  return "index";
};
export default stateResponse;
