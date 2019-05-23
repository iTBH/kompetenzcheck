@if(!isset($unique))
    @php $unique = uniqid(); @endphp
@endif

<div class="unique-{{$unique}}">
    <div class="ui divider"></div>
    <input type="hidden" name="phrase[{{ $unique }}][category]" value="{{ $category->id }}" />
    <input type="hidden" name="phrase[{{ $unique }}][statement]" value="{{ $statement }}" />
    <input type="hidden" name="phrase[{{ $unique }}][tab]" value="{{ $tab }}" />
    <div class="phrase">
        <i class="{{ $category->icon }} icon"></i> Der/Die Lernende {{ $statement }}

        <a href="javascript:void(0)" data-content="Löschen" class="assessment-delete-btn ui small icon button" style="float: right; margin-top: -8px;"><i class="trash icon"></i></a>
        <a href="javascript:void(0)" data-content="Bearbeiten" data-unique="{{$unique}}" class="assessment-edit-btn ui small icon button" style="float: right; margin-top: -8px;" ><i class="edit icon"></i></a>
    </div>
</div>