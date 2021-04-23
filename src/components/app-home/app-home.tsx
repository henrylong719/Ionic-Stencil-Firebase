import { Component, h } from '@stencil/core';
import { AuthService } from '../../services/auth';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  async login(){
    const user = await AuthService.loginAnon();
    console.log(user);
  }



  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

    <ion-form>
      <ion-grid>
       <ion-label>Email</ion-label>
      <ion-input type="email" ></ion-input>
       <ion-label>Password</ion-label>
       <ion-input type="password" ></ion-input>
      </ion-grid>

      <ion-button type='submit'>Sign up</ion-button>
    </ion-form>

        <ion-button onClick={()=>this.login()}>Test Login</ion-button>

        <ion-button onClick ={()=> this.login()}> Sign in with Google</ion-button>


    <ion-form>
      <ion-grid>
       <ion-label>Email</ion-label>
      <ion-input type="email" ></ion-input>
       <ion-label>Password</ion-label>
       <ion-input type="password" ></ion-input>
      </ion-grid>

      <ion-button type='submit'>Sign in</ion-button>
    </ion-form>



        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}
