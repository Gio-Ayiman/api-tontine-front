import { Injectable } from '@angular/core';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  public kc!: any;

  constructor() { }

  async init(): Promise<void> {
    this.kc = new Keycloak({
      url: "http::/localhost:42369",
      realm: "quarkus",
      clientId: "emf-tontine-front"
    });
    await this.kc.init({
      onLoad: "login-required"
    })
  }
}
