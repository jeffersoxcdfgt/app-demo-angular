import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';
import { Team } from '../../shared/team';
import { TraceService } from '../../../shared/utils/traceService';
const FIRST =0;

@Injectable()
export class TeamsService {
  protected URL ='http://localhost:3000/api/teams';


  constructor(private http: HttpClient ,private traceService: TraceService){ }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<Team[]>{
      return this.http.get<Team[]>(this.URL , { params: params }).pipe(
          tap(_ => this.traceService.log('fetched teams')),
          catchError(this.traceService.handleError<Team[]>('findAll', []))
      )
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
   public insert(data: Team): Observable<Team>{
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type','application/json; charset=utf-8');
     return this.http.post<Team>(this.URL , data  ,{headers: headers })
     .pipe(
        tap((newTeam:Team) => this.traceService.log(`added team w/ id=${newTeam.id}`)),
        catchError(this.traceService.handleError<Team>('insert'))
     )
   }

   /**
    * Update specific object into DB
    * @param team the object to be updated
    * @returns gets the response
    */
   public update(team: Team): Observable<Team> {
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     return this.http.put<Team>(this.URL + '/' + team['team'].id, team['team'], {headers: headers}).pipe(
       tap(_ => this.traceService.log(`updated team id=${team['team'].id}`)),
      catchError(this.traceService.handleError<any>('update'))
     )
   }

   /**
    * Find an object by its identifier
    * @param id the object identifier
    * @returns gets the object found
    */
   public findById(id: any): Observable<Team> {
     return this.http.get<Team>(this.URL + '/' + id[FIRST]).pipe(
       tap(_ => this.traceService.log(`fetched team id=${id[FIRST]}`)),
       catchError(this.traceService.handleError<Team>(`findById id=${id[FIRST]}`))
     )
   }

   /**
    * Delete an object by its identifier field
    * @param id the object identifier
    * @returns gets the response
    */
   public delete(id): Observable<Team> {
     return this.http.delete<Team>(this.URL + '/' + id).pipe(
       tap(_ => this.traceService.log(`deleted team id=${id}`)),
       catchError(this.traceService.handleError<Team>('delete'))
     )
   }
}
