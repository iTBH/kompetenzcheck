@extends('layouts.app')

@section('title', 'Profil')

@section('content')
    @include('partials.flash')
    @include('partials.content-header', [
        'title' => 'Profil',
        'divider' => false,
    ])
    {{--    @include('profile.partials.tabs')--}}
    <div class="ui divider dotted"></div>
    <form action="{{ route('profile.update') }}" method="POST" class="ui form" enctype="multipart/form-data"">
    {{ csrf_field() }}
    <input type="hidden" name="_method" value="put">
    <div class="ui middle aligned grid">
        <div class="row">
            <div class="four wide column">
                {!! Form::label('picture', 'Profilbild', ['module' => 'profile', 'class' => 'control-label small text-uppercase mb-0']) !!}
            </div>
            <div class="seven wide column">
                @if(Auth::user()->hasMedia('picture'))
                    <div id="profile-picture-thumbnail">
                        <img src="{{ Auth::user()->getFirstMediaUrl('picture') }}"
                             class="img-thumbnail mb-1 mr-1"
                             style="max-height: 200px; max-width: 200px;"/>
                    </div>
                @endif
                {!! Form::file('picture', ['module' => 'foundingidea','class' => 'form-control form-control-file']) !!}
                @if ($errors->has('picture'))
                    <span class="invalid-feedback">
                                                <strong>{{ $errors->first('picture') }}</strong>
                                            </span>
                @endif
            </div>
        </div>
        @if(Auth::user()->hasMedia('picture'))
            <div class="row">
                <div class="four wide column">
                    <label for="name">Profilbild entfernen:</label>
                </div>
                <div class="seven wide column">
                    <div class="ui checkbox">
                        <input type="checkbox" name="picture_delete" value="true"/>
                        <label></label>
                    </div>
                </div>
            </div>
        @endif

        <div class="row">
            <div class="four wide column">
                <label for="name">Name</label>
            </div>
            <div class="seven wide column">
                <input type="text" value="{{ $user->name }}" id="name" name="name">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label>E-Mail</label>
            </div>
            <div class="seven wide column">
                <div class="ui disabled input fluid">
                    <input type="text" value="{{ $user->email }}">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="profession">Beruf</label>
            </div>
            <div class="seven wide column">
                <input type="text" value="{{ $user->profession }}" id="profession" name="profession">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="date_of_birth">Geburtsdatum</label>
            </div>
            <div class="seven wide column">
                <div class="ui calendar" data-calendar-type="date">
                    <div class="ui input left icon fluid">
                        <i class="calendar icon"></i>
                        <input type="text" id="date_of_birth" name="date_of_birth" placeholder="25.03.1992"
                               value="{{ $user->date_of_birth }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="location_of_birth">Geburtsort</label>
            </div>
            <div class="seven wide column">
                <input type="text" id="location_of_birth" name="location_of_birth"
                       value="{{ $user->location_of_birth }}">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="street">Anschrift</label>
            </div>
            <div class="seven wide column">
                <input type="text" value="{{ $user->street }}" id="street" name="street">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="city">Postleitzahl / Ort</label>
            </div>
            <div class="seven wide column">
                <input type="text" value="{{ $user->city }}" id="city" name="city">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="phone">Telefon</label>
            </div>
            <div class="seven wide column">
                <input type="text" id="phone" name="phone" value="{{ $user->phone }}">
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label for="education">Höchster Bildungsabschluss</label>
            </div>
            <div class="seven wide column">
                <input type="text" id="education" name="education" value="{{ $user->education }}">
            </div>
        </div>
        {{--<div class="row calendar-group">--}}
        {{--<div class="four wide column">--}}
        {{--<label for="training_date_from">Ausbildungszeit</label>--}}
        {{--</div>--}}
        {{--<div class="three wide column">--}}
        {{--<div class="ui calendar date-from" data-calendar-type="date">--}}
        {{--<div class="ui input left icon fluid">--}}
        {{--<i class="calendar icon"></i>--}}
        {{--<input type="text" id="training_date_from" name="training_date_from"--}}
        {{--value="{{ $user->training_date_from }}">--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--<div class="one wide column">--}}
        {{--bis:--}}
        {{--</div>--}}
        {{--<div class="three wide column">--}}
        {{--<div class="ui calendar date-to" data-calendar-type="date">--}}
        {{--<div class="ui input left icon fluid">--}}
        {{--<i class="calendar icon"></i>--}}
        {{--<input type="text" id="training_date_to" name="training_date_to"--}}
        {{--value="{{ $user->training_date_to }}">--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        <div class="row">
            <div class="four wide column">
                <label for="password">Passwort</label>
            </div>
            <div class="seven wide column">
                <a href="{{ route('password.edit') }}">Passwort ändern</a>
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
            </div>
            <div class="seven wide column text-right">
                <button type="submit" class="ui primary button">Speichern</button>
                <a href="{{ route('profile.index') }}" type="submit" class="ui secondary button">Abbrechen</a>
            </div>
        </div>
    </div>
    </form>
@endsection