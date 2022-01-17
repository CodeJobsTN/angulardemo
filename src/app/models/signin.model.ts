export interface ISignIn {
  login?: string;
  password?: string;
  rememberMe?: boolean
}

export class SignIn implements ISignIn {

  constructor(public login?: string,public password?: string){
    this.login = login;
    this.password = password;
  }

}
