@extends('layouts.app')

@section('title', 'Tags')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => $tag->name,
        'delete' => [
            'route' => route('tags.destroy', [$tag->id]),
            'confirm' => 'Schlagwort wirklich löschen?'
        ],
        'edit' => route('tags.edit', [$tag->id])
    ])

    <div class="ui secondary menu">
        <a class="item active" data-tab="entries">Checks</a>
    </div>
    <div class="ui tab active" data-tab="entries">
        @foreach($tag->checks as $check)
            <div class="ui divider dotted"></div>
            <h2 class="green colored">
                <a href="{{ route('check.show', [$check->id]) }}">{{ $check->title }}</a>
            </h2>
            <p>{!! $check->description !!}</p>
            <div>
                @foreach($check->tags as $checkTag)
                    <a href="{{ route('tags.show', $checkTag->id) }}" class="ui label">{{ $checkTag->name }}</a>
                @endforeach
            </div>
        @endforeach
    </div>
@endsection
