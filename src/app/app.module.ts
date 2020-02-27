import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { isPlatformBrowser } from '@angular/common'
import { MyMaterialModule } from './material.module'

import { AppComponent } from './app.component'

//import { MatToolbarModule } from '@angular/material/toolbar'
// import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'angular6-template' }),
    HttpClientModule,
    //MatToolbarModule,
    MyMaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server'
    console.log(`Running ${platform} with appId=${appId}`)
  }
}
