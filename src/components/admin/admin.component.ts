import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ CommonModule, MatTableModule ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  constructor(private location: Location) {}

  displayedColumns: string[] = [ 'ID', 'Name', 'Email', 'SignUpDate', 'Role', 'PfpUrl' ];
  clients: any[] = [];

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    if(user == null || JSON.parse(user).Role != "admin") {
      this.location.back();
    } else {
      this.getClients();
    }
  }

  getClients() {
    fetch('http://127.0.0.1:3000/api/getUsers')
      .then(res => res.json())
      .then(data => this.clients = data )
      .catch(err => console.error('Error fetching users', err));
  }
}
