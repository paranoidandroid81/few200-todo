import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as songActions from '../actions/songs.actions';
import { SongEntity } from '../reducers/songs.reducer';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class SongEffects {

  private baseUrl = 'http://localhost:3000';

  addSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.addSong),
      switchMap((origAction) => this.http.post<SongEntity>(`${this.baseUrl}/songs`, {
        title: origAction.payload.title,
        artist: origAction.payload.artist,
        album: origAction.payload.album
      }).pipe(
        map(resp => songActions.addSongsSucceeded({ oldId: origAction.payload.id, payload: resp }))
      ))
    ), { dispatch: true });

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.http.get<GetResponse>(`${this.baseUrl}/songs`)
        .pipe(
          map(resp => resp.data),
          map(data => songActions.loadSongsSucceeded({ payload: data }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private http: HttpClient) { }
}

interface GetResponse {
  data: SongEntity[];
}
