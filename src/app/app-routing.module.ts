import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./Pages/index/index.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const appRoute:Routes=[
  {
    path:'',component:IndexComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  }
]


@NgModule({
  imports:[
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
