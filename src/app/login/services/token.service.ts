import { Injectable } from '@angular/core';
import { CacheKey } from './auth.enum';
import { AbstractCache } from './cache.abstract';

@Injectable({
  providedIn: 'root'
})
export class TokenService extends AbstractCache {
  constructor() {
    super(CacheKey.TOKEN);
  }
}
