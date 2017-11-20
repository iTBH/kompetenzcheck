<?php $uniqid = uniqid() ?>
<div>
    <div class="ui divider"></div>
    <input type="hidden" name="phrase[{{ $uniqid }}][category]" value="{{ $category->id }}"/>
    <input type="hidden" name="phrase[{{ $uniqid }}][statement]" value="{{ $statement }}"/>
    <input type="hidden" name="phrase[{{ $uniqid }}][tab]" value="{{ $tab }}"/>
    <div class="phrase">
        <i class="{{ $category->icon }} icon"></i> Der/Die Lernende {{ $statement }}

        <a href="javascript:void(0)" class="assessment-rating-foreign-btn ui small icon button" data-phrase="{{ $_phrase->id }}" data-check="{{ $check->id }}" data-run="{{ $run->id }}"
           data-runphrase="@isset($run_phrase){{$run_phrase->id }}@endisset"><i class="edit icon"></i></a>
        <div class="ui massive bullseye rating disabled" style="float: right;" data-rating="{{isset($run_phrase) ? $run_phrase->rating : 0}}"></div>
    </div>
</div>