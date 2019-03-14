import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'page-interest',
  template: `
  <div class="page-interest">
    <div class="bs">
      <div class="bs__label">耀才利率</div>
      <div class="bs__int">{{bsInt}}</div>
    </div>
  </div>
  `,
  styleUrls: ['./interest.page.scss'],
})
  
export class InterestPage implements OnInit{
  public bsInt;
  constructor(private api: ApiService) {
    
  }

  ngOnInit() {
    let tt$ = this.api.hkabGet();
    tt$.subscribe((res: any) => {
      if (res.tenors)
        this.bsInt = res.tenors[1].haseHibor + 4;
      else
        this.bsInt = '<未更新>';
    });
  }


}
