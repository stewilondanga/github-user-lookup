import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Lookup';

  constructor(private http:Http){}
  userName="";
  githubData:any="";


userLookup(){
  this.http.get("https://api.github.com/users/"+this.userName).subscribe((response:Response)=>{
    const userData=response.json();
    this.githubData=userData;
    console.log(userData);

  }
)
}
}
