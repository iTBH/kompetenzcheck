@extends('layouts.app')

@section('title', 'Schlagwörter')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Partner und Partnerinnen',
        'divider' => false,
        'help' => Config::get('help.partner'),
    ])
    <p>
        Hier können Sie Checkpartner und -Partnerinnen hinzufügen, bearbeiten oder löschen. Checkpartner und Checkpartnerinnen sind die Personen, mit denen Sie im Prozess einer Check-Durchführung via E-Mail zusammenarbeiten, z.B. Personen, denen Sie einen Check zuweisen möchten, von denen Sie einen Check zugewiesen bekommen haben, oder eine Einladung zur Fremdeinschätzung erhalten haben.
    </p>
    <div class="ui divider dotted"></div>
    <div class="ui divider hidden"></div>
    <div class="ui grid">
        <div class="six wide column">
            <h2 class="green colored">Neuer Partner/Partnerin</h2>
            <form method="POST" action="{{ route('partner.store') }}" class="ui form">
                {{ csrf_field() }}

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="firstname">Vorname:</label>
                        <input type="text" id="firstname" name="firstname" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="lastname">Nachname:</label>
                        <input type="text" id="lastname" name="lastname" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="email">E-Mail-Adresse:</label>
                        <input type="email" id="email" name="email" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <button type="submit" class="ui primary button">Hinzufügen</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="ten wide column">
            @if(count($partners) > 0)
                <h2 class="green colored">Vorhandene Partner/Partnerinnen bearbeiten</h2>
                <div class="ui grid">
                    <div class="sixteen wide column">
                        <table class="ui very basic compact table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-Mail-Adresse</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($partners as $partner)
                                <tr>
                                    <td>
                                        <strong>{{ $partner->lastname }}, {{ $partner->firstname }}</strong>
                                        <br />
                                        <br />
                                        <form onsubmit="return confirm('Partner / Partnerin wirklich löschen?')"
                                              action="{{ route('partner.destroy', $partner->id) }}" method="POST">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                            <button type="submit" class="button link">Löschen</button>
                                            <a>|</a>
                                            <a href="{{ route('partner.edit', $partner->id) }}">Bearbeiten</a>
                                        </form>
                                    </td>
                                    <td style="vertical-align: top;">{{ $partner->email }}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            @else
                <div class="cta-text">
                    <h2 class="green colored">Sie haben noch keine Checkpartnerin bzw. keinen Checkpartner hinterlegt.</h2>
                    <p>
                        Fügen Sie eine neue Partnerin bzw. einen neuen Partner hinzu.
                    </p>
                </div>
            @endif
        </div>
    </div>
@endsection
