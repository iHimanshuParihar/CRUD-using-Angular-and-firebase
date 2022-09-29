import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{

  constructor(private store : AngularFirestore) {}
  ngOnInit(): void {
    this.getData()
  }

  StudentData :string[] = [
    "id",
    "name",
    "rollNo",
    "email",
    "phonenumber",
    "Delete"
  ];
  table:any
  dataSource:any
  name:any
  rollno:any
  email:any
  phonenumber:any

  addData(){
    this.store.collection("StudentData").add({
      name : this.name,
      rollNo : this.rollno,
      email : this.email,
      phonenumber : this.phonenumber
    }); 
}


  deleteData(id:any){
    this.store.collection("StudentData").doc(id).delete();
  }

  getData(){
    this.store.collection("StudentData").snapshotChanges().subscribe((response) => {
      this.dataSource = response.map((item) => {
        return Object.assign(
          {
            id: item.payload.doc.id
          },
          item.payload.doc.data()
        );
      });
    });
  }
}

