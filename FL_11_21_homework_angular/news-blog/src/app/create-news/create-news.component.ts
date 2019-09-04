import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  blog_news = 'Create News';
  news = [];

  constructor() { }

  ngOnInit() {
    
  }

  createNews( heading, description, content, date, author, url ) {
    if(heading.value || description.value || content.value || date.value || author.value || url.value) {

      let article = {
        "heading": heading.value, 
        "description": description.value,
        "content": content.value,
        "date": date.value,
        "author": author.value,
        "url": url.value
      }
  
      if(localStorage.getItem("news")) {
        this.news = JSON.parse(localStorage.getItem("news"))
      }
  
      this.news.push(article);
      localStorage.setItem("news", JSON.stringify(this.news));
  
      heading.value = "";
      description.value = "";
      content.value = "";
      date.value = "";
      author.value = "";
      url.value = "";
      
    }
  }
  
}
