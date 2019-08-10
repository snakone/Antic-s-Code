import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})

export class CommentBoxComponent implements OnInit {

  commentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createCommentForm();
  }

  private createCommentForm(): void {
    this.commentForm = new FormGroup({
       name: new FormControl(null, [Validators.required]),
    comment: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.commentForm.invalid) { return; }
    console.log(this.commentForm.value);
  }

}
