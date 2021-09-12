import { style } from '@angular/animations';
import { Component } from '@angular/core';

const data =[
  {
    Id : "1",
    Name : "Ankit",
    Country : "India",
    Dob : "05/14/1999"
  },
  {
    Id : "2",
    Name : "Milind",
    Country : "America", 
    Dob : "1997/14/07"
  },
  {
    Id : "3",
    Name : "Jayant",
    Country : "Russia",
    Dob : "15/1998/03"
  }
];
@Component({
  selector: 'app-root',
  template : `
  <head>
  <style>
  table {
    width: 100%;
  }
  div{
    background-color : #29d3e6;
    padding: 0px 25px 25px 100px;
    border-style: dotted;
    margin : 25px 500px 75px 300px;
  }
  #open,#view{
    color : blue;
  }
  #exit{
  position: relative;
  left: 567px;
  border: 6px solid #d60f0f;
  }
  </style>
  </head>
  <button mat-raised-button id="open" (click)="isVisible()">{{btnStr}}</button>
  <br><br><br><br>

  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" *ngIf ="open">
  
  <ng-container matColumnDef="Id">
    <th mat-header-cell *matHeaderCellDef> Id </th>
    <td mat-cell *matCellDef="let element"> {{element.Id}} </td>
  </ng-container>

  <ng-container matColumnDef="Name" >
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.Name}} </td>
  </ng-container>

  <ng-container matColumnDef="Buttons">
    <th mat-header-cell *matHeaderCellDef> Buttons </th>
    <td mat-cell *matCellDef="let element"><button mat-raised-button id="view" (click)="onclick(element.Id,element.Name,element.Country)" >view</button></td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
<div  *ngIf = "open && flag2 && flag3">
<button mat-raised-button id="exit" (click)="exit()">X</button>
<h1>Id : {{iId}}</h1>
<h1>Name : {{iName}}</h1>
<h1>Country : {{iCountry}}</h1>
</div>
  `,
 styleUrls :['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['Id','Name','Buttons'];
  dataSource = data;
  open:boolean=false
  btnStr:string="Open"
  flag2 = false
  isVisible(){
    this.open = !this.open
    if(this.open){
      this.btnStr = "Close Data"
    }
    else{
      this.btnStr = "Open Data"
      this.flag2=false
    }
    
  }

  iId:String="";
  iName : String ="";
  iCountry : String = "";
  
  onclick(Id:String,Name:String,Country:String){
    this.flag3 = true;
    this.flag2=true;
    this.iId = Id
    this.iName = Name
    this.iCountry = Country
  }
  flag3 = true
  exit(){
    this.flag3 = false

  }
}

