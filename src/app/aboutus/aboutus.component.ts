import { Component, OnInit } from '@angular/core';
import { Associate } from '../associate.model';
 
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 employ:Associate[];
  constructor() { 
    this.employ = new Array<Associate>();
    this.employ.push({
      id:1786203,
  name:'Tejaswini Penneni' ,
  role:'Team Representative',
  area:'Brigade Bhuwalka' ,
  location:'Bangalore',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOCylq3PGQ1fsDxQKPOgzQY2qe1FEkQfLxg&usqp=CAU'
    }, {
      id: 1772834,
  name:'Ashfiya Khan',
  role:'Team Member' ,
  area:'Deccan Park Madhapur',
  location:'Hyderabad',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rbdZwb1VEK0g16zfVlOjEqBhLK7PCfMx2g&usqp=CAU'
    }, {
      id:1784239 ,
  name:'Shaivee Kumawat',
  role:'Team Member',
  area:'Deccan Park Madhapur',
  location:'Hyderabad',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA6gPnjURZdtkNz72SgrASIvXSzeCHBDytg&usqp=CAU'
    }, {
      id:1786552,
  name: 'Manjusha Kondreddy',
  role: 'Team Member',
  area:'Brigade Bhuwalka',
  location:'Bangalore',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZkNiuWyRoqgsPIaxdE5WECpLdi0SzDcP9A&usqp=CAU'
    });
  }
 
  ngOnInit() {
  }
 
}
