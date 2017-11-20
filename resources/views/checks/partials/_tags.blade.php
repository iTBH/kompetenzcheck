@foreach($check->tags as $tag)
    <a href="{{ route('tags.show', $tag->id) }}" class="ui label">{{ $tag->name }}</a>
@endforeach