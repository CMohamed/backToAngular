import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointEnvironmentResolver } from '../../../environments/endpoint.resolver.environment';
import { BaseHttpClient } from './base.http-client';

@Injectable({
  providedIn: 'root'
})
export class EventHttpClient extends BaseHttpClient {

  protected PORT: string = "5001";
  protected PREFIX_URL: string = "api/";

  constructor(protected override http: HttpClient) {
    super(http);
  }

  protected getBaseUrl(): string {
    const resolver = new EndpointEnvironmentResolver();

    return resolver.getEndpointSafeUrl(this.PORT) + this.PREFIX_URL;
  }
}
