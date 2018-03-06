import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-fase-padrao-edit-dropdown',
  templateUrl: './fase-padrao-edit-dropdown.component.html',
  styleUrls: ['./fase-padrao-edit-dropdown.component.css']
})
export class FasePadraoEditDropdownComponent implements OnInit {

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pabradė'}
  ];
  selectedCityId: any;



  constructor() { }

  ngOnInit() {
  }

  showError(control) {
    return control.invalid
  }

  
}
