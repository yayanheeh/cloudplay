import {Component, OnInit} from '@angular/core';
import {Session} from '../../models/session.model';
import {Playlist} from '../../../playlists/models/playlist.model';

@Component({
  moduleId: module.id,
  selector: 'liked-track-view',
  templateUrl: 'liked-tracks-view.template.html',
  styleUrls: ['liked-tracks-view.style.css'],
  providers: [Playlist]
})

export class LikedTracksViewComponent implements OnInit {
  private session = Session.getInstance();

  private user = this.session.get('user');

  ngOnInit(): void {
    this.user.get('likes').fetch({reset: true});
  }

}