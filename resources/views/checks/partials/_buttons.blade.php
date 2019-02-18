<!-- Edit -->
<a href="{{ route('check.edit',['check' => $check] ) }}" class="ui small icon button {{!$check->getLockedStatus() && $check->runs->count() == 0? : 'disabled'}}"
   data-content="Check bearbeiten">
    <i class="edit icon"></i>
</a>

<!-- Duplicate -->
<a href="{{ route('check.duplicate',['check' => $check] ) }}" class="ui small icon button" data-content="Check duplizieren">
    <i class="clone icon"></i>
</a>

<!-- Delete -->
<form onsubmit="return confirm('Check wirklich löschen?')"
      action="{{ route('check.destroy', $check->id) }}" method="POST" style="display: inline-block;">
    {{ csrf_field() }}
    {{ method_field('DELETE') }}
    <button type="submit" class="ui small icon button" data-content="Check löschen"><i class="trash outline icon"></i></button>
</form>