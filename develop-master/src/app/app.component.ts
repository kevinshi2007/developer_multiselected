import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.currentLang);

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.currentLang);
}

switchLangEvent(event) {
  if(this.currentLang == 'en')
    this.currentLang = 'fr';
  else
    this.currentLang = 'en';

    this.translate.use(this.currentLang);
}

}
