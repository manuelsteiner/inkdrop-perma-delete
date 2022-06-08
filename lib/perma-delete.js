"use strict";
'use babel';
Object.defineProperty(exports, "__esModule", { value: true });
class PermaDelete {
    activate() {
        inkdrop.commands.add(document.body, {
            'perma-delete:delete': async () => {
                try {
                    await this.delete();
                }
                catch (error) {
                    console.log(error);
                }
            },
        });
    }
    async delete() {
        const notes = inkdrop.store.getState().noteListBar.actionTargetNoteIds;
        if (!notes.length) {
            return;
        }
        try {
            await this.deleteSelectedNotes(notes);
        }
        catch (error) {
            console.log(error);
        }
    }
    deleteSelectedNotes(notes) {
        return inkdrop.main.dataStore.getLocalDB().notes.removeBatch(notes);
    }
}
const permaDelete = new PermaDelete();
module.exports = {
    activate() {
        permaDelete.activate();
    },
};
//# sourceMappingURL=perma-delete.js.map