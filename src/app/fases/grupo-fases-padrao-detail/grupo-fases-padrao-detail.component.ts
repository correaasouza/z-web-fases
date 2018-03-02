import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GrupoFasesPadrao } from '../model/GrupoFasesPadrao';
import { FasesService } from './../fases.service';


@Component({
  selector: 'app-grupo-fases-padrao-detail',
  templateUrl: './grupo-fases-padrao-detail.component.html',
  styleUrls: ['./grupo-fases-padrao-detail.component.css']
})
export class GrupoFasesPadraoDetailComponent implements OnInit {

  @Input() grupoFasesPadrao: GrupoFasesPadrao;

  constructor(
    private route: ActivatedRoute,
    private fasesService: FasesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGrupoFasesPadrao();
  }

  getGrupoFasesPadrao(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fasesService.getGrupoFasesPadraoPorId(id)
      .subscribe(grupoFasesPadrao => this.grupoFasesPadrao = grupoFasesPadrao);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.fasesService.updategrupoFasesPadrao(this.grupoFasesPadrao)
      .subscribe(() => this.goBack());
  }

}
