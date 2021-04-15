initialState = {
  showLoader: false,
  codeIsError: false,
  errorMsg: '',
  UserName: '',
  address: '',
  imageURL: '',
  mobileNumber: '',
  email: '',
  token: '',
  acessCode: '',
  RequiredNotification: false,
  message: '',
  isLoggedIn: false,
  historylist: [],
  paymenthstry: [],
  forget_response: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AddLoaderL':
      return { ...state, showLoader: action.payload };
    case 'AddErrorL':
      return { ...state, errorMsg: action.payload };
    case 'AddMessageL':
      return { ...state, message: action.payload };
    case 'add_token':
      return { ...state, token: action.payload };
    case 'LoginAction':
      return { ...state, isLoggedIn: action.payload };
    case 'getJobHistory':
      return {
        ...state,
        historylist: action.payload,
        showLoader: false,
      };
    case 'get_pymnt_hstry':
      return {
        ...state,
        paymenthstry: action.payload,
        showLoader: false,
      };
    case 'clearSignin':
      return { initialState };
    case 'ForgetpwdSucess':
      return { ...state, forget_response: action.payload };
    default:
      return state;
  }
}
