'use babel';

import {DbRemoveResult} from './types';

class PermaDelete {
  public activate() {
    inkdrop.commands.add(document.body, {
      'perma-delete:delete': async () => {
        try {
          await this.delete();
        } catch (error) {
          console.log(error);
        }
      },
    });
  }

  private async delete() {
    const notes: string[] =
      inkdrop.store.getState().noteListBar.actionTargetNoteIds;

    if (!notes.length) {
      return;
    }

    try {
      await this.deleteSelectedNotes(notes);
    } catch (error) {
      console.log(error);
    }
  }

  private deleteSelectedNotes(notes: string[]): Promise<DbRemoveResult> {
    return inkdrop.main.dataStore.getLocalDB().notes.removeBatch(notes);
  }
}

const permaDelete = new PermaDelete();

module.exports = {
  activate() {
    permaDelete.activate();
  },
};
