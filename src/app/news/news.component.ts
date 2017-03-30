import { Component, OnInit } from '@angular/core';

export interface News {
    id: number;
    title: string;
    summary: string;
    body: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = "News page";
  public newsList: News[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
        const item: News = {
            id: i,
            title: `News ${i}`,
            summary: `This is summary ${i}`,
            body: `This is body ${i}`
        }
        this.newsList.push(item);
    }
  }

}
