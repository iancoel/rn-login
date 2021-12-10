interface IAction {
  type: string;
  payload: {
    token: string;
  };
}

export const getToken = (token: string): IAction => {
  return {
    type: '',
    payload: {
      token,
    },
  };
};
