import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';


const GIG_KEY = 'GIF_KEY';



const loadFromLocalStorage = ()=> {
  const gifsFromLocalStorage = localStorage.getItem(GIG_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;

}



@Injectable({providedIn: 'root'})
export class GifService {
   
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor(){
        this.loadTrendingGifs();
        console.log("servicio creado")
    }

    saveGifsToLocalStorage = effect(() =>{

      const historyString = JSON.stringify(this.searchHistory());
      localStorage.setItem(GIG_KEY, historyString); /* almacena en local storage*/ 


    })

    loadTrendingGifs(){
       
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
          params: {
            api_key: environment.giphyApiKey,
            limit: 20,
          },
        }).subscribe((resp) =>{
            const  gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
            console.log({gifs})
        });


    }

    searchGifs(query: string): Observable<Gif[]>{
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
          params: {
            api_key: environment.giphyApiKey,
            limit: 20,
            q: query,
          },
        })
        .pipe(
          map(({data}) => data ),
          map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
          
          // TODO: Historial
          tap(items => {
              this.searchHistory.update(history => ({
                ...history,
                [query.toLowerCase()]: items,
              }));
          })
        )
        //.subscribe((resp) =>{
          //  const  gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
          //  console.log({search: gifs})
         //   return gifs;
       // });

    }

    getHistoryGifs(query: string){
      return this.searchHistory()[query] ?? [];
    }
    
}