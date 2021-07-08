import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StoryComponent } from '../story/story.component';

export interface Tile {
  status: string;
}
export enum Status {
  TO_Do = 'To Do',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed',
}
export interface Story {
  storyId: string;
  heading: string;
  assignee: string;
  storyPoints: number;
  status: Status;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { status: Status.TO_Do },
    { status: Status.IN_PROGRESS },
    { status: Status.RESOLVED },
    { status: Status.CLOSED },
  ];
  stories: Story[] = [
    {
      storyId: 'Story 1',
      heading: 'New story',
      assignee: 'Mohan',
      storyPoints: 4,
      status: Status.TO_Do,
    },
    {
      storyId: 'Story 2',
      heading: 'Progress story',
      assignee: 'Sohan',
      storyPoints: 3,
      status: Status.IN_PROGRESS,
    },
    {
      storyId: 'Story 3',
      heading: 'Resolved story',
      assignee: 'Rohan',
      storyPoints: 5,
      status: Status.RESOLVED,
    },
    {
      storyId: 'Story 4',
      heading: 'Closed story',
      assignee: 'Kohan',
      storyPoints: 6,
      status: Status.CLOSED,
    },
    {
      storyId: 'Story 5',
      heading: 'New story',
      assignee: 'Kohan',
      storyPoints: 4,
      status: Status.TO_Do,
    },
    {
      storyId: 'Story 6',
      heading: 'Progess story',
      assignee: 'Mohan',
      storyPoints: 5,
      status: Status.IN_PROGRESS,
    },
    {
      storyId: 'Story 7',
      heading: 'Resolved story',
      assignee: 'Rohan',
      storyPoints: 6,
      status: Status.RESOLVED,
    },
    {
      storyId: 'Story 8',
      heading: 'Closed story',
      assignee: 'Sohan',
      storyPoints: 3,
      status: Status.CLOSED,
    },
  ];

  constructor(public dialog: MatDialog) {}

  openStoryDetails(index: number) {
    const dialogRef = this.dialog.open(StoryComponent, {
      width: '250px',
      data: this.stories[index],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  ngOnInit(): void {}
}
