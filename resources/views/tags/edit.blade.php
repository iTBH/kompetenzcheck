@extends('layouts.app')

@section('title', 'Tags')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => $tag->name
    ])

    <form method="POST" action="{{ route('tags.update', $tag->id) }}" class="ui form">
        {{ csrf_field() }}
        {{ method_field("put") }}
        <div class="fields">
            <div class="sixteen wide field">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value="{{ $tag->name }}">
            </div>
        </div>
        <div class="fields">
            <div class="sixteen wide field">
                <label for="description">Beschreibung:</label>
                <textarea name="description" id="description" placeholder="Beschreibung">{{ $tag->description }}</textarea>
            </div>
        </div>
        <div class="fields">
            <div class="sixteen wide field">
                <button type="submit" class="ui primary button">Speichern</button>
            </div>
        </div>
    </form>
@endsection
