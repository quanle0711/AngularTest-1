import {AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import 'jarallax';
declare var jarallax: any;
@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'your-local';


  constructor(private changeDetector: ChangeDetectorRef) {
  }



  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    jarallax(document.querySelector('.jarallax-my-video'), {
      speed: 0.2,
      videoSrc: 'https://vimeo.com/groups/freehd/videos/153749650'
    });
  }
}


