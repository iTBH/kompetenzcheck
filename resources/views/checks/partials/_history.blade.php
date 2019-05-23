<?php $history = $check->history(); ?>
<?php $last = array_first($history); ?>
<div class="sixteen wide column history">
    <div class="ui accordion">
        <div class="title">
            <div class="ui label"><i class="dropdown icon"></i> Historie - {{ $last['date'] }}: {{$last['action']}} </div>
        </div>
        <div class="content">
            <p class="transition hidden">
            <ul>
                @foreach($history as $his)
                    <li>
                        <label data-content="{{ $his['time'] }} Uhr">{{$his['date']}}</label>
                        {{$his['action']}}
                    </li>
                @endforeach
            </ul>
            </p>
        </div>
    </div>
</div>