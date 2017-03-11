import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ PostsService ]
})
export class UserComponent implements OnInit {
  posts : posts;
  constructor(private postsService: PostsService) { 
    this.postsService.getPosts().subscribe(posts => {
			this.posts = posts
		})
  }

  ngOnInit() {
  }

}


interface posts{
	body: string,
	id: number,
	title: string,
	userId: number
}