import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSongs from './songs.reducer';
import * as fromSongUiHints from './songs-ui-hints.reducer';
import { SongListItem } from '../models';

export const featureName = 'music';
export interface MusicState {
  songs: fromSongs.SongState;
  songUiHints: fromSongUiHints.SongsUiHints;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  songUiHints: fromSongUiHints.reducer
};

// 1. Feature Selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

const selectSongUiHintsBranch = createSelector(
  selectMusicFeature,
  f => f.songUiHints
);

// 3. "helpers"
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);
// this gives us a SongEntity[]

// 4. What the components need

// TODO: SongListItem[]

export const selectSortingSongsBy = createSelector(
  selectSongUiHintsBranch,
  b => b.sortingBy
);

const selectSongListItemsUnsorted = createSelector(
  selectSongEntityArray,
  (songs) => songs.map(song => {
    return {
      ...song,
      isSaved: !song.id.startsWith('T')
    } as SongListItem;
  })
);

export const selectSongListItems = createSelector(
  selectSongListItemsUnsorted,
  selectSortingSongsBy,
  (songs, by) => {
    return [...songs.sort((lhs, rhs) => {
      if (lhs[by].toLowerCase() < rhs[by].toLowerCase()) {
        return -1;
      }
      if (lhs[by].toLowerCase() > rhs[by].toLowerCase()) {
        return 1;
      }
      return 0;
    })];
  }
);
