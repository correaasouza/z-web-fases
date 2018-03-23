import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from '../messages.service';
import { Fases } from './model/Fases';
import { FasesPadrao } from './model/FasesPadrao';
import { GrupoFasesPadrao } from './model/GrupoFasesPadrao';
import { GrupoProcesso } from './model/GrupoProcesso';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface City {
  id: number;
  name: string;
  postCode: number;
}

@Injectable()
export class FasesService {

  private fasesUrl = 'http://localhost:8000/api';

  constructor(
    private messageService: MessagesService,
    private http: HttpClient
  ) { }

  // Grupo Processos  
  addgruposProcessos(grupoProcesso: GrupoProcesso): Observable<GrupoProcesso> {
    return this.http.post<GrupoProcesso>(this.fasesUrl + '/grupoprocessos', grupoProcesso, httpOptions).pipe(
      tap((grupoProcesso: GrupoProcesso) => this.log(`added grupofasespadroes w/ id=${grupoProcesso.id}`)),
      catchError(this.handleError<GrupoProcesso>('addgrupoProcesso'))
    );
  }


  // Grupo de Fases Padrao
  getGrupoFasesPadrao(): Observable<GrupoFasesPadrao[]> {
    return this.http.get<GrupoFasesPadrao[]>(this.fasesUrl + '/grupofasespadroes')
    .pipe(
      tap(heroes => this.log(`Encontrados GrupoFasesPadrao`)),
      catchError(this.handleError('getGrupoFasesPadrao', []))
    );
  }

  getGrupoFasesPadraoPorId(id: number): Observable<GrupoFasesPadrao> {
    const url = `${this.fasesUrl + '/grupofasespadroes'}/${id}`;
    return this.http.get<GrupoFasesPadrao>(url).pipe(
      tap(_ => this.log(`Encontrado GrupoFasesPadrao id=${id}`)),
      catchError(this.handleError<GrupoFasesPadrao>(`getGrupoFasesPadraoPorId id=${id}`))
    );  
  }

  updategrupoFasesPadrao(grupoFasesPadrao: GrupoFasesPadrao): Observable<GrupoFasesPadrao> {
    return this.http.put(this.fasesUrl+ '/grupofasespadroes/' + 
      grupoFasesPadrao.id, grupoFasesPadrao, httpOptions).pipe(
      tap(_ => this.log(`Updated grupoFasesPadrao id=${grupoFasesPadrao.id}`)),
      catchError(this.handleError<any>('Updated grupoFasesPadrao'))
    );
  }

  addgruposFasesPadrao(GrupoFasesPadrao: GrupoFasesPadrao): Observable<GrupoFasesPadrao> {
    return this.http.post<GrupoFasesPadrao>(this.fasesUrl + '/grupofasespadroes', GrupoFasesPadrao, httpOptions).pipe(
      tap((GrupoFasesPadrao: GrupoFasesPadrao) => this.log(`added grupofasespadroes w/ id=${GrupoFasesPadrao.id}`)),
      catchError(this.handleError<GrupoFasesPadrao>('addgrupoFasesPadrao'))
    );
  }

  deleteGrupoFasesPadrao(grupoFasesPadrao: GrupoFasesPadrao | number): Observable<GrupoFasesPadrao> {
    const id = typeof grupoFasesPadrao === 'number' ? grupoFasesPadrao : grupoFasesPadrao.id;
    const url = `${this.fasesUrl + '/grupofasespadroes'}/${id}`;  
    return this.http.delete<GrupoFasesPadrao>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted grupofasespadroes id=${id}`)),
      catchError(this.handleError<GrupoFasesPadrao>('grupofasespadroes'))
    );
  }

  searchGrupoFasesPadrao(term: string): Observable<GrupoFasesPadrao[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<GrupoFasesPadrao[]>(this.fasesUrl + '/grupofasespadroes/finddescricao/' + term).pipe(
      tap(_ => this.log(`enontrados grupos de fases padrão com o termo "${term}"`)),
      catchError(this.handleError<GrupoFasesPadrao[]>('searcGrupofasespadroes', []))
    );
  }

  // Fases
  getFases(): Observable<Fases[]> {
    return this.http.get<Fases[]>(this.fasesUrl + '/fases')
    .pipe(
      tap(fases => this.log(`Encontrados Fases`)),
      catchError(this.handleError('getFases', []))
    );
  }

  getFasesPorId(id: number): Observable<Fases> {
    const url = `${this.fasesUrl + '/fases'}/${id}`;
    return this.http.get<Fases>(url).pipe(
      tap(_ => this.log(`Encontrado Fases id=${id}`)),
      catchError(this.handleError<Fases>(`getFasesPorId id=${id}`))
    );  
  }

  updateFases(Fases: Fases): Observable<Fases> {
    return this.http.put(this.fasesUrl+ '/fases/' + 
      Fases.id, Fases, httpOptions).pipe(
      tap(_ => this.log(`Updated Fases id=${Fases.id}`)),
      catchError(this.handleError<any>('Updated Fases'))
    );
  }

  addFases(Fases: Fases): Observable<Fases> {
    return this.http.post<Fases>(this.fasesUrl + '/fases', Fases, httpOptions).pipe(
      tap((Fases: Fases) => this.log(`added fases w/ id=${Fases.id}`)),
      catchError(this.handleError<Fases>('addFases'))
    );
  }

  deleteFases(Fases: Fases | number): Observable<Fases> {
    const id = typeof Fases === 'number' ? Fases : Fases.id;
    const url = `${this.fasesUrl + '/fases'}/${id}`;  
    return this.http.delete<Fases>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted fases id=${id}`)),
      catchError(this.handleError<Fases>('fases'))
    );
  }

  searchFases(term: string): Observable<Fases[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Fases[]>(this.fasesUrl + '/fases/finddescricao/' + term).pipe(
      tap(_ => this.log(`enontrados grupos de fases padrão com o termo "${term}"`)),
      catchError(this.handleError<Fases[]>('searcfases', []))
    );
  }

  // Fases Padrão
  getFasesPadrao(idGrupoFases: number): Observable<FasesPadrao[]> {
    const url = `${this.fasesUrl + '/fasespadroes/grupofasespadroes'}/${idGrupoFases}`;
    return this.http.get<FasesPadrao[]>(url)
    .pipe(
      tap(fases => this.log(`Encontradas Fases Padrão`)),
      catchError(this.handleError('getFasesPadrao', []))
    );
  }

  getFasesPadraoPorId(id: number): Observable<FasesPadrao> {
    const url = `${this.fasesUrl + '/fasespadroes'}/${id}`;
    return this.http.get<FasesPadrao>(url).pipe(
      tap(_ => this.log(`Encontrada Fase Padrao id=${id}`)),
      catchError(this.handleError<FasesPadrao>(`getFasesPorId id=${id}`))
    );  
  }

  addFasePadrao(FasesPadrao: FasesPadrao): Observable<FasesPadrao> {
    return this.http.post<FasesPadrao>(this.fasesUrl + '/fasespadroes', FasesPadrao, httpOptions).pipe(
      tap((FasesPadrao: FasesPadrao) => this.log(`added fases padrão w/ id=${FasesPadrao.id}`)),
      catchError(this.handleError<FasesPadrao>('addFasesPadrao'))
    );
  }

  deleteFasesPadrao(fasesPadrao: FasesPadrao | number): Observable<FasesPadrao> {
    const id = typeof fasesPadrao === 'number' ? fasesPadrao : fasesPadrao.id;
    const url = `${this.fasesUrl + '/fasespadroes'}/${id}`;  
    return this.http.delete<FasesPadrao>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted fasespadroes id=${id}`)),
      catchError(this.handleError<FasesPadrao>('fasespadroes'))
    );
  }

  updateFasesPadrao(FasesPadrao: FasesPadrao): Observable<FasesPadrao> {
    return this.http.put(this.fasesUrl+ '/fasespadroes/' + 
    FasesPadrao.id, FasesPadrao, httpOptions).pipe(
      tap(_ => this.log(`Updated Fases Padrao id=${FasesPadrao.id}`)),
      catchError(this.handleError<any>('Updated Fases'))
    );
  }

  private log(message: string) {
    this.messageService.add('Fases Service: ' + message);
  }
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
