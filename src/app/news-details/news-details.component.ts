import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { News } from '../news/news.component';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  public newsInfo: News;
  public title: string;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        const newsId = params['id'];
        this.title = `News ${newsId}`;
        this.newsInfo = {
          id: newsId,
          title: `News ${newsId}`,
          summary: `This is summary ${newsId}`,
          body: `This is body ${newsId}`
        }
    });
  }

}
