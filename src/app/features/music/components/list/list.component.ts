import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SongListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() songs: SongListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
