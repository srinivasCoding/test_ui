import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class CountriesStoreService {
    private readonly _countries = new BehaviorSubject<[]>([]);

    readonly countries$ = this._countries.asObservable();
    regionData = ['Europe', 'Asia']

    get countries() {
        return this._countries.getValue();
    }

    set countries(val) {
        this._countries.next(val);
    }
}