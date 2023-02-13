import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-enquiry',
  templateUrl: './all-enquiry.component.html',
  styleUrls: ['./all-enquiry.component.css']
})
export class AllEnquiryComponent implements OnInit{
  
  activeEnquires:any[]=[];
  inActiveEnquires:any[]=[];
  showEnquiryCard:boolean=false;
  enquiryId=0
  enq={
    id:'',
    email:'',
    fullName:'',
    description:'',
    phone:'',
    createdOn:'',
    active:''
  }
  constructor(
    private userService:UserService,
    ){}

    rowDataActive:any[]=[]
    rowDataInActive:any[]=[]
    columnDefs = [
        {headerName: 'id', field: 'id'},
        {headerName: 'active', field: 'active'},
        {headerName: 'email', field: 'email'},
        {headerName: 'fullName', field: 'fullName'},
        {headerName: 'description', field: 'description'},
        {headerName: 'phone', field: 'phone'},
        {headerName: 'createdOn', field: 'createdOn'},
       
    ];

  defaultColDef={
    sortable:true,
    resizable:true,
    filter:true,
  }
  
  showEnquiry(event:any){
    this.showEnquiryCard=true;
    this.enq=event.data;
    console.log(this.enquiryId)
  }
  closeEnquiry(){
    this.showEnquiryCard=false;
  }
  ngOnInit(): void {
    this.getActiveEnquires();
    this.getInActiveEnquires();
    
  }
  getActiveEnquires(){
    this.userService.getAllActiveEnquriy().subscribe(
      (data:any)=>{
        this.activeEnquires=data;
        this.rowDataActive=data;
        console.log(data)
      },(error:any )=>{
        alert("Something went Wrong!!");
      }
    )
  }
  getInActiveEnquires(){
    this.userService.getAllInActiveEnquriy().subscribe(
      (data:any)=>{
        this.inActiveEnquires=data;
        this.rowDataInActive=data;
        console.log(data)
      },(error:any )=>{
        alert("Something went Wrong!!");
      }
    )

  }


  toggleActive(id:any){
    this.userService.toggleActiveStatus(id).subscribe(
      (data:any)=>{
        this.enq=data;
        this.getActiveEnquires();
        this.getInActiveEnquires();
        Swal.fire(
          {
            title:"Success",
            text:"Active staus changed",
            icon:'success'
          }
        )
      },(error:any) =>{
        Swal.fire(
          {
            title:"error Occured",
            text:"Some Error Occured",
            icon:'error'
          }
        )
      }
    );
    
    this.closeEnquiry();
  }

  onRowClicked(event:any){
    console.log(event.data.id)
  }


}
