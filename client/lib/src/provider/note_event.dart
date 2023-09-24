import 'package:client/src/model/note_model.dart';

abstract class NoteEvent {}

class NoteFetched extends NoteEvent {}

class NoteAdded extends NoteEvent {
  final NoteModel model;

  NoteAdded(this.model);
}

class NoteUpdate extends NoteEvent {
  final NoteModel model;
  NoteUpdate(this.model);
}

class NoteDeleted extends NoteEvent {
  final int id;
  NoteDeleted(this.id);
}
