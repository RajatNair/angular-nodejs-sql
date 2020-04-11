import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  /**
   * Server URL from environment config
   */
  static SERVER_URL: string = environment.server;

  constructor() {}
}
