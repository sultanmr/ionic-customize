<p *ngIf="platform.is('ios')">ios paragraph</p>
<p *ngIf="platform.is('android')">Android paragraph</p>
<p>Platform Width: {{platform.width()}}</p>
<p>Platform Height: {{platform.height()}}</p>
<p *ngIf="platform.isLandscape()">We are in Landscape mode</p>
<p *ngIf="platform.isPortrait()">We are in Portrait mode</p>



@NgModule({
  declarations: [
    UserPage,
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    //more info is on http://ionicframework.com/docs/api/config/Config/
    IonicModule.forRoot(MyApp, {
      backButtonText: '<-- Move Back',
      iconMode: 'ios',
      platforms: {
        ios: {
          backButtonText: 'Back'
        }
      }
    })
  ],
