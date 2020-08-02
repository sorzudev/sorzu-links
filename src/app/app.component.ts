import { Component } from '@angular/core';
const urlImg = 'assets/logos/{name}.png'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public socialLinks: Array<{ name: string, url: string, img: string }> = [
    { name: 'Facebook', url: 'https://fb.com/sorzudev', img: urlImg.replace('{name}', 'fb') },
    { name: 'Twitter', url: 'https://twitter.com/sorzudev', img: urlImg.replace('{name}', 'tw') },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCYqHYu0S6knon0wSOZgTeSw', img: urlImg.replace('{name}', 'yt') },
    { name: 'Instagram', url: 'https://instagram.com/sorzudev', img: urlImg.replace('{name}', 'insta') },
  ];

  public openUrl(url: string) {
    window.open(url);
  }
}