import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Story } from '../home/home.component';

@Component({
  selector: 'app-story',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.scss'],
})
export class StoryModalComponent implements OnInit {
  storymap = new Map<string, string>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: Story) {}

  ngOnInit(): void {
    console.log(Object.keys(this.data));

    Object.keys(this.data).forEach((key) => {
      this.storymap.set(key, this.data[key]);
    });
  }
}
