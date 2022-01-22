import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private serivce:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
        this.getAllData();
  }


  //get delete id

  deleteID(id:any)
  {
      console.log(id,'deleteid==>');
      this.serivce.deleteData(id).subscribe((res)=>{
            console.log(res,'deleteres==>');
            this.successmsg = res.message;

            this.getAllData();

      });
  }


  //get data

  getAllData()
  {

    this.serivce.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
    });


  }






}
