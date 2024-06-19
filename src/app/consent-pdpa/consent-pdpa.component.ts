import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

export interface Consent {
  pdpaflag_1: boolean;
  pdpaflag_2: boolean;
  pdpaflag_3: boolean;
}

export interface details_pdpa {
   name: string;
   img: string;
   description: string;
}

@Component({
  selector: 'app-consent-pdpa',
  templateUrl: './consent-pdpa.component.html',
  styleUrls: ['./consent-pdpa.component.css']
})
export class ConsentPDPAComponent {

  data: any[] = [];

  constructor(private api: ApiService) { }

  stats: boolean = true;
  select: any = "";

  ngOnInit(): void {
    this.get();
  }

  cross_ntl() {
    this.stats = false;
    this.select = "cross_ntl";
  }

  cross_other() {
    this.stats = false;
    this.select = "cross_other";
  }

  analytics() {
    this.stats = false;
    this.select = "analytics";
  }

  get_stats(data: boolean) {
    this.stats = data;
  }

  path = "get_consent"

  get() {
    this.api.getapi(this.path).subscribe((res: any) => {
      this.data.push(res);
      this.convertData(this.data);
    })
  }

  consent_pdpa: Consent[] = [{ pdpaflag_1: false, pdpaflag_2: false, pdpaflag_3: false }];

  convertData(data: any) {
    let _data = [];
    for (let i = 0; i < data.length; i++) {
      _data.push({
        pdpaflag_1: data[i]['pdpa_consent_flag']['pdpaflag_1'] || false,
        pdpaflag_2: data[i]['pdpa_consent_flag']['pdpaflag_2'] || false,
        pdpaflag_3: data[i]['pdpa_consent_flag']['pdpaflag_3'] || false,
      });
    };
    this.consent_pdpa = _data;
    console.log(this.consent_pdpa);
  }

  checkbox_ntl = false;
  checkbox_other = false;
  checkbox_analytics = false;

  next() {
    console.log(this.checkbox_ntl);
    console.log(this.checkbox_other);
    console.log(this.checkbox_analytics);
  }


}
