import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { GrupoFasesPadrao } from './../model/GrupoFasesPadrao';
import { FasesService } from './../fases.service';

@Component({
  selector: 'app-grupo-fases-padrao-search',
  templateUrl: './grupo-fases-padrao-search.component.html',
  styleUrls: ['./grupo-fases-padrao-search.component.css']
})
export class GrupoFasesPadraoSearchComponent implements OnInit {

  grupoFasesPadrao$: Observable<GrupoFasesPadrao[]>;
  private searchTerms = new Subject<string>();

  constructor(private fasesService: FasesService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() : void{

    this.grupoFasesPadrao$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.fasesService.searchGrupoFasesPadrao(term)),
    );
  }

}
