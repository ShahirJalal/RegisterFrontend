import { Component } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  message: string = '';

  constructor(private helloService: HelloService) { }

  /**
   * Calls the service to fetch the 'Hello from EC2' message.
   */
  fetchMessage() {
    this.helloService.getHelloMessage().subscribe(
      (response: string) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching message', error);
        this.message = 'Failed to fetch message';
      }
    );
  }
}