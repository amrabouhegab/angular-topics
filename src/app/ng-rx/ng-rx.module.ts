import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxRoutingModule } from './ng-rx-routing.module';
import { MoviesListComponent } from './components/add-movie/movies-list/movies-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MovieEffects } from './store/effects/movie.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BackendService } from './services/backend.service';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MovieComponent } from './components/movie/movie.component';
import { RouterSerializer } from './store/router-serializer';

@NgModule({
  declarations: [
    MoviesListComponent,
    AddMovieComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    NgRxRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forFeature('Ngrx', {movie: movieReducer})
    StoreModule.forRoot(reducers, {
      metaReducers,
      // runtimeChecks: {
      //   strictActionImmutability: true,
      //   strictActionSerializability: true,
      //   strictActionTypeUniqueness: true,
      //   strictActionWithinNgZone: true,
      //   strictStateImmutability: true,
      //   strictStateSerializability: true
      // }
    }),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production, maxAge: 25}),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer
    })
  ],
  providers: [BackendService]
})
export class NgRxModule { }
