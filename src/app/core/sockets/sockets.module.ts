import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '@env/environment';

const config: SocketIoConfig = {
  url: environment.api,
  options: {}
};

@NgModule({
  imports: [
    SocketIoModule.forRoot(config)
  ]
})

export class SocketsModule { }
